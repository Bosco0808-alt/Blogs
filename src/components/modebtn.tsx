import { useState, useEffect } from "react";

export default function ModeBtn() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      ${
        mode === "dark"
          ? `
            h1, p, hr {
                color: white
            }
            
            body {
                background-color: black
            }
            `
          : ""
      }
      
    `;

    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [mode]);
  return (
    <button
      onClick={() =>
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"))
      }
      className="m-2 btn btn-secondary"
    >
      {mode === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
