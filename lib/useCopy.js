import { useCallback, useEffect, useState } from "react";

// Copy text with the async Clipboard API, falling back to execCommand where
// it's unavailable (older Safari, insecure contexts). State resets after a beat
// so the button can be pressed again.
function legacyCopy(text) {
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
}

export default function useCopy(text, resetMs = 1800) {
  const [state, setState] = useState("idle"); // idle | copied | failed

  useEffect(() => {
    if (state === "idle") return undefined;
    const t = setTimeout(() => setState("idle"), resetMs);
    return () => clearTimeout(t);
  }, [state, resetMs]);

  const copy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setState("copied");
        return;
      }
    } catch {
      // fall through to legacy path
    }
    setState(legacyCopy(text) ? "copied" : "failed");
  }, [text]);

  return [state, copy];
}
