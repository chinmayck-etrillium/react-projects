import Button from "../Button/Button";

export default function ProjectSidebar({
  onStartAddingProjects,
  addedProjects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Projects
        </h2>
        <div>
          <Button
            buttonText={"+ Add Project"}
            onClick={onStartAddingProjects}
          ></Button>
        </div>
        {addedProjects.projects && (
          <ul className="mt-2">
            {addedProjects.projects.map((project) => {
              let cssClasses =
                "w-full text-left p-1 uppercase text-m font-semibold hover:text-stone-50 hover:bg-stone-800";
              if (project.id === selectedProjectId) {
                cssClasses += " bg-stone-800 text-stone-200";
              } else {
                cssClasses += " text-stone-400";
              }
              return (
                <li key={project.id}>
                  <button
                    className={cssClasses}
                    onClick={() => onSelectProject(project.id)}
                  >
                    {project.title}
        
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </aside>
    </>
  );
}
