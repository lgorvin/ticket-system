import React from "react";
import Select from "react-select";

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");
  const [assignedByVal, setAssignedByVal] = React.useState("");
  const [priorityVal, setPriorityVal] = React.useState("");

  const options = [
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
  ];

  const HandleChange = (obj) => {
    setPriorityVal(obj.value);
    console.log(obj.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value && !assignedByVal && !priorityVal) return;
    addTodo(value, assignedByVal, priorityVal);
    setValue("");
    setAssignedByVal("");
    setPriorityVal("");
  };

  return (
    <div className="grid md:grid-cols-3">
      <form
        className="md:mt-48 mt-40 flex justify-center duration-200"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="px-6 py-2 xl:px-28 text-center rounded-md duration-200"
          placeholder="Describe the issue..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <form
        className="lg:mt-48 md:mt-48 mt-4 flex justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="px-6 py-2 xl:px-28 text-center rounded-md duration-200"
          placeholder="Email"
          value={assignedByVal}
          onChange={(e) => setAssignedByVal(e.target.value)}
        />
      </form>
      <form
        className="lg:mt-48 md:mt-48 mt-4 flex justify-center"
        onSubmit={handleSubmit}
      >
        <Select
          className=" text-black"
          //defaultValue={options[2]}
          //value={priorityVal}

          selectedValue={priorityVal}
          onChange={(option) => HandleChange(option)}
          options={options}
          placeholder="Choose Priority"
          height="30px"
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
        {/* <input
          type="text"
          className="px-6 py-2 xl:px-28 text-center rounded-md duration-200"
          placeholder="Priority: Low, Medium, High"
          value={priorityVal}
          onChange={(e) => setPriorityVal(e.target.value)}
        /> */}
        <button className="bg-red-500 ml-7 rounded-md px-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
