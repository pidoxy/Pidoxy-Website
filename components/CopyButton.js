import { useEffect, useState } from "react";
import styles from "../styles/Page.module.css";

// Small "Copy" affordance for copy-paste-ready blocks (bios, abstracts, links).
export default function CopyButton({ text, label = "Copy" }) {
  const [state, setState] = useState("idle"); // idle | copied | failed

  useEffect(() => {
    if (state === "idle") return undefined;
    const t = setTimeout(() => setState("idle"), 1600);
    return () => clearTimeout(t);
  }, [state]);

  // Legacy fallback for contexts where the async Clipboard API is unavailable.
  const legacyCopy = () => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  };

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setState("copied");
        return;
      }
    } catch {
      // fall through to legacy path
    }
    setState(legacyCopy() ? "copied" : "failed");
  };

  return (
    <button
      type="button"
      className={`${styles.copyButton} ${state === "copied" ? styles.copyButtonDone : ""}`}
      onClick={copy}
      aria-live="polite"
    >
      {state === "copied" ? "Copied" : state === "failed" ? "Select & copy" : label}
    </button>
  );
}
