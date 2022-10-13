import React from "react";
import Select from "react-select";

function Todo({ todo, index, completeTodo, removeTodo }) {
  //console.log(completeTodo);
  const options = [
    { value: "Luca / 2nd Line", label: "Luca - 2nd Line" },
    { value: "Jenny / 3rd Line", label: "Jenny - 3rd Line" },
    { value: "Chris / 1st Line", label: "Chris - 1st Line" },
  ];
  function priorityColor() {
    if (todo.priority === "Low") {
      return "bg-green-400 text-center rounded-md text-black mb-4";
    } else if (todo.priority === "Medium") {
      return "bg-orange-400 text-center rounded-md text-black mb-4";
    } else if (todo.priority === "High") {
      return "bg-red-400 text-center rounded-md text-black mb-4";
    }
  }
  const [assigned, setAssigned] = React.useState("");
  const HandleChange = (obj) => {
    setAssigned(obj.value);
    console.log(obj.value);
  };
  return (
    <div className="mt-4 ">
      <div className="bgColor1 border-b-[1px] py-4 rounded-lg  shadow-md shadow-slate-700 mx-4 lg:mx-20 grid grid-cols-5 grid-rows-none gap-2">
        <div className="flex h-full items-center lg:mt-[-50px]">
          <button
            className={
              todo.isCompleted
                ? "w-[25px] h-[25px] ml-[36px] lg:ml-[52px] lg:w-[50px] lg:h-[50px]  lg:mt-[110px] bgGradient rounded-full border-2 border-white"
                : "w-[25px] h-[25px] ml-[36px] lg:ml-[52px] lg:w-[50px] lg:h-[50px] hover:bg-emerald-300 lg:mt-[110px] rounded-full border-white border-2"
            }
            onClick={() => completeTodo(index)}
          >
            {todo.isCompleted ? (
              <svg
                className="ml-[5px] lg:ml-[17px] lg:scale-[3]"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="9"
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  stroke-width="2"
                  d="M1 4.304L3.696 7l6-6"
                />
              </svg>
            ) : (
              <div></div>
            )}
          </button>
        </div>
        <div
          className="col-span-3 text-white lg:text-2xl duration-200"
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "",
            color: todo.isCompleted ? "gray" : "",
          }}
        >
          <p className="mt-5">
            <span className="text-red-300 font-bold"> Ticket Raised: </span>
            {todo.text}{" "}
            <span className="text-slate-400 ">{todo.assignedBy}</span>
          </p>
          <p className="mt-5 mb-5">
            Ticket Assigned To - {assigned}
            <Select
              className="mt-3 text-black"
              //defaultValue={options[2]}
              selectedValue={assigned}
              onChange={(option) => HandleChange(option)}
              options={options}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  primary25: "lightblue",
                  primary: "darkblue",
                  neutral0: "white",
                  neutral5: "red",
                  neutral10: "red",
                },
              })}
            />
          </p>
          <p className={priorityColor()}>{todo.priority} Priority</p>
          <div className="float-right mr-[-50px] md:mr-[-85px] scale-[2] h-full items-center duration-300">
            <button onClick={() => removeTodo(index)}>
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path
                  fill="#494C6B"
                  fill-rule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
