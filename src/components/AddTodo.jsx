import React from "react";
function AddTodo({
  addTodoToListOnClick,
  name,
  description,
  setName,
  setDescription,
}) {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-3xl p-10 text-white bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
          <div className="flex justify-evenly">
            <div className="flex flex-col">
              <input
                className="shadow  border rounded py-2 px-3 font-medium text-orange-400 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                type="text"
                placeholder="Task"
                value={name}
                onChange={(event) => setName(event.target.value)}
              ></input>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                className="shadow appearance-none border rounded py-2 px-3 font-medium text-orange-400 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                id="description"
                placeholder="Task description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></input>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-transparent hover:bg-orange-600 text-orange-400 hover:text-white transition-colors border-orange-500 hover:border-transparent rounded-full w-10 font-bold text-xl"
                onClick={() => {
                  addTodoToListOnClick(name, description);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
