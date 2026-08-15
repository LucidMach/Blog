export const getTagColor = (tag: string) => {
  const tagColors: Record<string, string> = {
    "UI/UX": "#ff3b70",
    "WebXR": "#00f2fe",
    "web (backend)": "#4361ee",
    "IoT": "#00e676",
    "robotics": "#ff1744",
    "data visualisation": "#9d4edd",
    "automation": "#ff9100",
    "AI": "#ff007f",
    "graphic design": "#76ff03",
    "open source": "#00b0ff",
    "fashion design": "#ffc400",
    "short-stories": "#00e5ff",
    "software": "#ff2a6d",
    "3D Printing": "#00f5d4",
    "wallpaper": "#b5179e",
    "app develeopment": "#00d2ff",
    "UX research": "#ff5e00"
  };
  if (tagColors[tag]) return tagColors[tag];

  const colors = [
    "#ff1744", "#ff9100", "#ffc400", "#76ff03",
    "#00e676", "#00f2fe", "#00b0ff", "#4361ee",
    "#9d4edd", "#ff007f", "#ff3b70", "#00f5d4", "#ff5e00"
  ];
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};
