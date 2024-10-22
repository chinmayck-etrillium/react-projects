import { useState } from "react";
import DefaultRightPane from "./components/DefaultRightPane/DefaultRightPane";
import NewProject from "./components/NewProject/NewProject";
import ProjectSidebar from "./components/ProjectSidebar/ProjectSidebar";
import SelectedProject from "./components/SelectedProject/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddingProject = () => {
    setProjectState((prevState) => ({ ...prevState, selectedProjectId: null }));
  };

  const addProjects = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }));
  };

  const handleCancelClick = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleSelectProject = (id) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  };

  const handleDelete = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id != prevState.selectedProjectId
      ),
    }));
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDelete} />
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProject onSave={addProjects} onCancel={handleCancelClick} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <DefaultRightPane onStartAddingProjects={handleStartAddingProject} />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddingProjects={handleStartAddingProject}
        addedProjects={projectState}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
