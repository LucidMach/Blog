interface prop {
  project: any;
  index: number;
}

const ProjectCard: React.FC<prop> = ({ project, index }) => {
  // Use index to pick a deterministic rotation so it is server/client stable
  const rotations = [
    "-rotate-3",
    "rotate-2",
    "-rotate-2",
    "rotate-3",
    "-rotate-1",
    "rotate-1",
    "rotate-0",
  ];
  const rotation = rotations[index % rotations.length];

  return (
    <div
      className={`group w-64 ${rotation} hover:rotate-0 transition-transform duration-300 ease-out flex-shrink-0 relative`}
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#f1f1f1] shadow-inner opacity-80 z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-red-400 opacity-60"></div>
      </div>
      <a
        className="bg-[#fdfdfd] text-[#1a1a1a] shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-[#e5e5e5] p-4 pb-12 flex flex-col items-center w-full min-h-[300px] h-full"
        href={`/projects/${project.slug}/`}
      >
        <div className="w-full aspect-square bg-[#1a1a1a] flex flex-col items-center justify-center p-4 text-center overflow-hidden relative">
          <p className="font-virgil text-white text-xl z-10 mb-2">
            {project.data.title}
          </p>
          <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-white to-transparent mix-blend-overlay"></div>
        </div>

        <div className="mt-4 flex flex-col justify-between h-full w-full">
          <p className="text-sm font-virgil text-center leading-tight line-clamp-3">
            {project.data.description || "No description provided."}
          </p>
          <div className="flex gap-2 justify-center mt-3 flex-wrap">
            {project.data.tags?.slice(0, 3).map((tag: string) => (
              <span key={tag} className="text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-assistant font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
