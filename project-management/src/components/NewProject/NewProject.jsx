import { useRef } from "react";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";

export default function NewProject({ onSave, onCancel }) {
  let title = useRef();
  let description = useRef();
  let dueDate = useRef();
  let modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-700 hover:text-stone-950"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-950 hover:text-stone-200"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea={true} />
        <Input type="date" ref={dueDate} label="duedate" />
      </div>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Error!</h2>
        <p className="text-stone-600 mb-4">Please check the entered details.</p>
        <p className="text-stone-600 mb-8">
          None of the input fields must be left empty while submitting!
        </p>
      </Modal>
    </div>
  );
}
