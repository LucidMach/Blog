import { getTagColor } from "../utils/tagColors";

interface prop {
  project: any;
  index: number;
}

const ProjectCard: React.FC<prop> = ({ project, index }) => {
  const isSpecial = Boolean(project.data.isSpecial);
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
      className={`project-card group ${isSpecial ? "w-80 sm:w-96 md:w-[28rem]" : "w-64"} ${rotation} hover:rotate-0 transition-transform duration-300 ease-out flex-shrink-0 relative`}
      data-tags={project.data.tags?.join(',') || ""}
      data-special={isSpecial ? "true" : "false"}
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#000] shadow-inner opacity-80 z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
      </div>
      <a
        className={`block ${isSpecial ? "bg-[#818cf8] text-[#1a1a1a] border-[#6366f1]" : "bg-[#f1f1f1] text-[#1a1a1a] border-[#e5e5e5]"} cursor-pointer shadow-xl border p-4 pb-8 w-full`}
        href={project.data.demoUrl}
      >
        <div className={`relative w-full ${isSpecial ? "aspect-[16/10]" : "aspect-[3/4]"} overflow-hidden`}>
          <img
            src={project.data.heroImage || "/scratched-out.png"}
            alt={project.data.title}
            className="w-full h-full object-cover"
          />
          {project.data.tags && project.data.tags.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-col gap-1 items-end bg-transparent">
              {project.data.tags.map((tag: string, i: number) => {
                const bgColor = getTagColor(tag);
                return (
                  <span key={i} className="text-xs px-2 py-1 flex items-center justify-center rounded-sm text-[#0a0a0a] shadow-md border border-black/20 font-bold hover-wiggle cursor-pointer" style={{ backgroundColor: bgColor }}>
                    {tag}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-center">
          <p className={`${isSpecial ? "bg-[#818cf8] text-[#1a1a1a]" : "bg-[#f1f1f1] text-[#1a1a1a]"} w-full pt-6 text-2xl font-virgil text-center`}>
            {project.data.title}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
