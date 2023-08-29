import { useState, useEffect } from "react";

export default function ModeBtn() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  useEffect(() => {
    // @ts-expect-error
    setMode(localStorage.getItem("mode"));
  }, []);
  useEffect(() => {
    localStorage.setItem("mode", mode);
    if (mode === "dark") {
      document.body.classList.toggle("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
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
