import useCopy from "../lib/useCopy";
import styles from "../styles/Page.module.css";

// Small "Copy" affordance for copy-paste-ready blocks (bios, abstracts, links).
export default function CopyButton({ text, label = "Copy" }) {
  const [state, copy] = useCopy(text, 1600);

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
