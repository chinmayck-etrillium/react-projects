import noProjectImg from "../../assets/no-projects.png";
import Button from "../Button/Button";

export default function DefaultRightPane({ onStartAddingProjects }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImg}
        alt="No project image"
      />
      <h2 className="text-xl font-bold text-stone-500 my-15">
        No Projects Selected
      </h2>
      <p className="text-stone-400 mb-3 ">
        Select a project or create a new one to get started!
      </p>
      <p className="mt-7">
        <Button
          buttonText={"Create a project"}
          onClick={onStartAddingProjects}
        />
      </p>
    </div>
  );
}
