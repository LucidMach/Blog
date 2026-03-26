export const getTagColor = (tag: string) => {
  const tagColors: Record<string, string> = {
    "web (frontend)": "#60a5fa",
    "web (backend)": "#818cf8",
    "IoT": "#34d399",
    "robotics": "#fc7272",
    "data visualisation": "#a78bfa",
    "automation": "#fb923c",
    "AI": "#f472b6",
    "3D": "#2dd4bf",
    "UX design": "#e879f9",
    "graphic design": "#a3e635",
    "open source": "#f1f1f1",
    "fashion design": "#fbbf24",
    "short-stories": "#94a3b8",
    "software": "#fca5a5"
  };
  if (tagColors[tag]) return tagColors[tag];

  const colors = [
    "#f1f1f1", "#fc7272", "#FACC14", "#60a5fa",
    "#818cf8", "#34d399", "#f472b6", "#fb923c",
    "#a78bfa", "#2dd4bf", "#e879f9", "#a3e635", "#fbbf24"
  ];
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};
