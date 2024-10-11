import React, { useState, useEffect } from "react";

function idGen(label) {
  return `checklist-item-${label}`;
}

interface ChecklistItemProps {
  id: string;
  label: string;
  children?: React.ReactNode;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({
  id,
  label,
  children,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem(id);
    if (savedState) {
      setIsChecked(JSON.parse(savedState));
    }
  }, [id]);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    localStorage.setItem(id, JSON.stringify(newCheckedState));
  };

  return (
    <div>
      <label style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{ marginRight: 5 }}
        />
        {label}
      </label>
      {/* Render sub-checklists or nested items */}
      {children}
    </div>
  );
};

interface ChecklistProps {
  items: { id: string; label: string; children?: ChecklistProps["items"] }[];
}

export const Checklist: React.FC<ChecklistProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ChecklistItem
          key={item.label}
          id={idGen(item.label)}
          label={item.label}
        >
          {item.children && (
            <div style={{ paddingLeft: 20 }}>
              <Checklist items={item.children} />
            </div>
          )}
        </ChecklistItem>
      ))}
    </div>
  );
};
