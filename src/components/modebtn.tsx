import { useState, useEffect } from "react";

export default function ModeBtn() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  useEffect(() => {
    // @ts-ignore
    setMode(localStorage.getItem("mode"));
  }, []);
  useEffect(() => {
    localStorage.setItem("mode", mode);
    if (mode === "dark") {
      document.body.classList.toggle("dark-mode");
      document
        .getElementById("navbar")
        ?.classList.remove(
          "navbar-black",
          "bg-black",
          "navbar-white",
          "bg-white"
        );
      document
        .getElementById("navbar")
        ?.classList.add("navbar-black", "bg-black");
    } else {
      document.body.classList.remove("dark-mode");
      document
        .getElementById("navbar")
        ?.classList.remove(
          "navbar-black",
          "bg-black",
          "navbar-white",
          "bg-white"
        );
      document
        .getElementById("navbar")
        ?.classList.add("navbar-white", "bg-white");
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
