import Head from "next/head";

export default function PresentationPage() {
  return (
    <>
      <Head>
        <title>Gabriel Benmergui - Work Experience - Silver.dev</title>
        <meta
          name="description"
          content="Gabriel Benmergui Work Experience presentation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </Head>

      <div style={styles.container}>
        <header style={styles.header}>
          <a href="/" style={styles.logoLink} aria-label="Back to Silver.dev">
            <img
              src="/images/silver-logo-white.svg"
              alt="Silver.dev"
              style={styles.logo}
            />
          </a>

          <a href="/" style={styles.backLink}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={styles.backIcon}
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Documentation
          </a>
        </header>

        <main style={styles.main}>
          <iframe
            src="/presentation.html"
            title="Gabriel Benmergui - Work Experience"
            style={styles.iframe}
            allow="fullscreen"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </main>
      </div>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
          background: #000;
        }

        .presentation-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          height: 56px;
          background: #111;
          border-bottom: 1px solid #222;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .presentation-header {
            padding: 0 12px;
            height: 48px;
          }
        }
      `}</style>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    background: "#000",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    height: 56,
    background: "#111",
    borderBottom: "1px solid #222",
    flexShrink: 0,
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logo: {
    height: 28,
    width: "auto",
  },
  backLink: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    color: "#999",
    textDecoration: "none",
    fontSize: 14,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    transition: "color 0.2s",
  },
  backIcon: {
    flexShrink: 0,
  },
  main: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
    background: "#000",
  },
};
