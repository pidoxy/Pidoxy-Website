// Shared stroke-icon set. `kind` selects the glyph; `className` sizes it.
export default function Icon({ kind, className }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.85",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  if (kind === "mail") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    );
  }

  if (kind === "github") {
    return (
      <svg {...commonProps}>
        <path d="M9 18c-4 1.5-4-2-6-2" />
        <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    );
  }

  if (kind === "linkedin") {
    return (
      <svg {...commonProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (kind === "youtube") {
    return (
      <svg {...commonProps}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (kind === "external") {
    return (
      <svg {...commonProps}>
        <path d="M14 4h6v6" />
        <path d="M10 14L20 4" />
        <path d="M20 14v6H4V4h6" />
      </svg>
    );
  }

  if (kind === "document") {
    return (
      <svg {...commonProps}>
        <path d="M14 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    );
  }

  if (kind === "brain") {
    return (
      <svg {...commonProps}>
        <path d="M10 4a3 3 0 0 0-6 1 3.5 3.5 0 0 0 0 6 4 4 0 0 0 4 6h2" />
        <path d="M14 4a3 3 0 0 1 6 1 3.5 3.5 0 0 1 0 6 4 4 0 0 1-4 6h-2" />
        <path d="M12 4v16" />
        <path d="M8 10h1" />
        <path d="M15 10h1" />
      </svg>
    );
  }

  if (kind === "code") {
    return (
      <svg {...commonProps}>
        <path d="M8 16L4 12l4-4" />
        <path d="M16 8l4 4-4 4" />
      </svg>
    );
  }

  if (kind === "database") {
    return (
      <svg {...commonProps}>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
        <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      </svg>
    );
  }

  if (kind === "graph") {
    return (
      <svg {...commonProps}>
        <path d="M4 18l6-6 4 4 6-8" />
        <circle cx="4" cy="18" r="1.5" />
        <circle cx="10" cy="12" r="1.5" />
        <circle cx="14" cy="16" r="1.5" />
        <circle cx="20" cy="8" r="1.5" />
      </svg>
    );
  }

  if (kind === "building") {
    return (
      <svg {...commonProps}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h.01" />
        <path d="M15 7h.01" />
        <path d="M9 11h.01" />
        <path d="M15 11h.01" />
        <path d="M9 15h.01" />
        <path d="M15 15h.01" />
      </svg>
    );
  }

  if (kind === "location") {
    return (
      <svg {...commonProps}>
        <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (kind === "arrow-down") {
    return (
      <svg {...commonProps}>
        <path d="M12 5v14" />
        <path d="M6 13l6 6 6-6" />
      </svg>
    );
  }

  if (kind === "arrow-right") {
    return (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    );
  }

  if (kind === "slides") {
    return (
      <svg {...commonProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M9 9l3 3 5-5" />
      </svg>
    );
  }

  if (kind === "image") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    );
  }

  if (kind === "mic") {
    return (
      <svg {...commonProps}>
        <rect x="9" y="2" width="6" height="11" rx="3" />
        <path d="M19 10a7 7 0 0 1-14 0" />
        <path d="M12 19v3" />
        <path d="M8 22h8" />
      </svg>
    );
  }

  if (kind === "twitter") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    );
  }

  if (kind === "trophy") {
    return (
      <svg {...commonProps}>
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
        <path d="M7 4H4v2a3 3 0 0 0 3 3" />
        <path d="M17 4h3v2a3 3 0 0 1-3 3" />
      </svg>
    );
  }

  if (kind === "newspaper") {
    return (
      <svg {...commonProps}>
        <path d="M4 4h13v16H5a1 1 0 0 1-1-1z" />
        <path d="M17 8h3v10a2 2 0 0 1-2 2" />
        <path d="M8 8h5" />
        <path d="M8 12h5" />
        <path d="M8 16h5" />
      </svg>
    );
  }

  if (kind === "menu") {
    return (
      <svg {...commonProps}>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </svg>
    );
  }

  if (kind === "close") {
    return (
      <svg {...commonProps}>
        <path d="M6 6l12 12" />
        <path d="M18 6L6 18" />
      </svg>
    );
  }

  return null;
}

// Picks the right inline icon for a link based on its declared type.
export function LinkIcon({ external = false, type = null, className }) {
  if (type === "video") return <Icon kind="youtube" className={className} />;
  if (type === "slides") return <Icon kind="slides" className={className} />;
  if (type === "photos") return <Icon kind="image" className={className} />;
  return <Icon kind={external ? "external" : "github"} className={className} />;
}
