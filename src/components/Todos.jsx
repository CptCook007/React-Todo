import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
function Todos({ todo, removeTodoFromListOnClick, editTodoFromListOnClick }) {
  const { id, name, description } = todo;
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);
  let headingClassName = "inline-flex font-bold text-orange-500 text-3xl";
  if (isCompleted) {
    headingClassName =
      "inline-flex font-semibold text-green-700 text-3xl line-through decoration-black";
  }
  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  return (
    <>
      <div className="text-white flex justify-between  h-28 mb-8 px-5 py-4 bg-white w-3/4 border-gray-50 border rounded-lg shadow dark:border-orange-500 dark:bg-gray-700">
        {isEditing ? (
          // Editing mode
          <>
            <div className="flex flex-col">
              Task
              <input
                onChange={(event) => setEditedName(event.target.value)}
                className="inline-flex bg-transparent font-bold text-orange-500 text-3xl w-2/3"
                value={editedName}
                type="text"
              ></input>
            </div>
            <div className="flex flex-col">
              Description
              <input
                onChange={(event) => setEditedDescription(event.target.value)}
                className="inline-flex bg-transparent"
                value={editedDescription}
                type="text"
              ></input>
            </div>
          </>
        ) : (
          // Display mode
          <div>
            <span>
              <input
                className="inline-flex me-5"
                onChange={() => setIsCompleted((completed) => !completed)}
                type="checkbox"
              ></input>
            </span>
            <h3 className={headingClassName}>{name}</h3>
            {!isCompleted && (
              <>
                <p className="ms-10">{description}</p>
              </>
            )}
            {isCompleted && (
              <>
                <p className="ms-10">Completed</p>
              </>
            )}
          </div>
        )}
        <div className="flex justify-evenly gap-7">
          <button
            className="bg-transparent transition-colors rounded-full text-sm text-white hover:text-lime-500 hover:border-transparent"
            onClick={() => {
              if (isEditing && editedName !== "") {
                editTodoFromListOnClick(editedName, editedDescription, id);
              }
              toggleEdit();
            }}
          >
            {isEditing ? "Save" : <FaEdit />}
          </button>
          <button
            className="bg-transparent transition-colors rounded-full text-sm text-white hover:text-red-500 hover:border-transparent"
            onClick={() => {
              removeTodoFromListOnClick(id);
            }}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
}
export default Todos;
