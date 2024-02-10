import React from "react";
import "./global.css";

const Todo = ({
  id,
  title,
  description,
  mongoID,
  complete,
  deleteTodo,
  CompleteTodo,
}) => {
  return (
    <tr className="bg-white border-b text-zinc-900 dark:border-gray-300 hover:bg-gray-50 text-xs">
      <th
        scope="row"
        className="px-6 py-4 text-xl text-zinc-900 whitespace-nowrap "
      >
        {id + 1}
      </th>

      <td
        className={`description px-6 py-3 text-lg ${
          complete ? "line-through" : ""
        }`}
      >
        {title}
      </td>

      <td
        className={`title  px-6 py-3 text-lg ${complete ? "line-through" : ""}`}
      >
        {description}
      </td>

      <td className="px-6 py-4 text-lg">
        {complete ? "Completed" : "Pending"}
      </td>

      {/* Delete and Complete Button  */}

      <td className="px-6 py-4 flex gap-3">
        <button
          className="delete py-2 px-4 text-white rounded-md bg-red-600 focus:outline-none hover:bg-red-700"
          onClick={() => deleteTodo(mongoID)}
        >
          Delete
        </button>
        {complete ? (
          ""
        ) : (
          <button
            className="complete py-2 px-4 text-white rounded-md bg-green-500 focus:outline-none hover:bg-green-600 "
            onClick={() => CompleteTodo(mongoID)}
          >
            Done
          </button>
        )}
      </td>
    </tr>
  );
};

export default Todo;
