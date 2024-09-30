import React, { ReactNode } from "react";

export default function BasicButton({
  disabled,
  children,
}: {
  disabled: boolean;
  children: ReactNode;
}) {
  return (
    <button
      style={{
        backgroundColor: `${disabled ? "#6a717a" : "#4FD1C5"}`,
        borderRadius: "12px",
        marginTop: "14px",
        width: "100%",
        minWidth: "45px",
        height: "40px",
      }}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
