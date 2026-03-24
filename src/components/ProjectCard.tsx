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
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#000] shadow-inner opacity-80 z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
      </div>
      <a
        className="block bg-[#fdfdfd] text-[#1a1a1a] shadow-xl border border-[#e5e5e5] p-4 pb-8 w-full"
        href={`/projects/${project.slug}/`}
      >
        <div className="w-full aspect-[3/4] bg-[#1a1a1a] overflow-hidden">
          <img
            src={project.data.heroImage || "/meta.png"}
            alt={project.data.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center">
          <p className="bg-white w-full pt-6 text-black text-2xl font-virgil text-center">
            {project.data.title}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
