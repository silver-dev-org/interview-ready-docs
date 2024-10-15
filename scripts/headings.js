const fs = require("fs");
const path = require("path");

// Function to read all files recursively from a directory
const readFilesRecursively = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fileList = readFilesRecursively(filePath, fileList); // Recursively read subdirectories
    } else if (filePath.endsWith(".mdx")) {
      fileList.push(filePath); // Add only .mdx files
    }
  });

  return fileList;
};

// Function to replace #### heading with {<h4>heading</h4>}
const replaceHeadings = (content) => {
  return content.replace(/####\s*(.+)/g, "{<h4>$1</h4>}");
};

// Function to process all .mdx files in a directory
const processFiles = (directory) => {
  const files = readFilesRecursively(directory);

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    const updatedContent = replaceHeadings(content);

    fs.writeFileSync(file, updatedContent, "utf8"); // Write the updated content back to the file
    console.log(`Processed: ${file}`);
  });
};

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Please provide the folder path as a command-line argument.");
  process.exit(1); // Exit the process with an error code
}

const directoryPath = args[0];

if (!fs.existsSync(directoryPath)) {
  console.error("The specified folder does not exist.");
  process.exit(1);
}
processFiles(directoryPath);
