export function hasUsableUrl(url?: string | null): url is string {
  return Boolean(url && url.trim() && url.trim() !== "#");
}

export function getYouTubeEmbedUrl(url?: string | null) {
  if (!hasUsableUrl(url)) {
    return null;
  }

  let videoId = "";

  if (url.includes("v=")) {
    videoId = url.split("v=")[1]?.split("&")[0] ?? "";
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0] ?? "";
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

export function getDemoMeta(url?: string | null) {
  if (!hasUsableUrl(url)) {
    return null;
  }

  try {
    const { hostname } = new URL(url);

    if (hostname.includes("devpost.com")) {
      return {
        label: "Devpost",
        tone: "blue",
      } as const;
    }

    if (hostname.includes("github.com")) {
      return {
        label: "GitHub",
        tone: "slate",
      } as const;
    }
  } catch {
    return {
      label: "Case Study",
      tone: "slate",
    } as const;
  }

  return {
    label: "Live Site",
    tone: "emerald",
  } as const;
}

export function getProjectCategory(tech: string[]) {
  const joined = tech.join(" ").toLowerCase();

  if (joined.includes("openai") || joined.includes("nlp") || joined.includes("cv") || joined.includes("vision")) {
    return "AI Product";
  }

  if (joined.includes("terraform") || joined.includes("aws") || joined.includes("docker") || joined.includes("aks")) {
    return "Cloud Systems";
  }

  if (joined.includes("webrtc") || joined.includes("socket")) {
    return "Real-time App";
  }

  return "Software Project";
}
