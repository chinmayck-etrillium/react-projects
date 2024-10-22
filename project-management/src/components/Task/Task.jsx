import { useRef, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Task() {
  const task = useRef();
  const description = useRef();
  const [tasks, setTasks] = useState({
    tasks: [],
  });

  const addTask = () => {
    console.log(tasks);
    setTasks((prev) => ({
      ...prev,
      tasks: [
        ...prev.tasks,
        { task: task.current.value, description: description.current.value },
      ],
    }));
  };
  return (
    <>
      <h1>Tasks</h1>
      <Input label={"Task"} textArea={false} ref={task} />
      <Input label={"Description"} textArea={true} ref={description} />
      <Button buttonText={"Add"} onClick={addTask}></Button>
      <br />
      {tasks.tasks.length > 0 ? (
        <div>
          {tasks.tasks.map((task) => (
            <div className="m-4">
              <h2 className="text-xl font-bold text-stone-800 mb-1 uppercase">{task.task}</h2>
              <p className="text-lg text-stone-600 mb-2">{task.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}
