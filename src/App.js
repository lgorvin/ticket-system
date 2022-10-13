import React from "react";
// import img1 from "./assets/images/bg-mobile-dark.jpg";
// import img2 from "./assets/images/bg-desktop-dark.jpg";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Screen Flickering",
      isCompleted: false,
      assignedBy: "jacob@work.com",
      priority: "Low",
    },
    {
      text: "I need to convert a file to PDF",
      isCompleted: false,
      assignedBy: "ben@work.com",
      priority: "Medium",
    },
    {
      text: "Internet keeps dipping in and out",
      isCompleted: false,
      assignedBy: "lucy@work.com",
      priority: "High",
    },
    {
      text: "Need new mouse",
      isCompleted: false,
      assignedBy: "richard@work.com",
      priority: "High",
    },
  ]);

  const addTodo = (text, assignedBy, priority) => {
    const newTodos = [...todos, { text, assignedBy, priority }];
    console.log(newTodos);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  let completedCounter = 0;
  let lowCounter = 0;
  let mediumCounter = 0;
  let highCounter = 0;
  let completedLowCounter = 0;
  let completedMediumCounter = 0;
  let completedHighCounter = 0;

  function completedNum() {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].isCompleted) {
        completedCounter++;
      }
    }
    return completedCounter;
  }

  function lowNum() {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].priority === "Low") {
        lowCounter++;
      }
    }
    return lowCounter;
  }

  function completedLow() {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].priority === "Low" && todos[i].isCompleted) {
        completedLowCounter++;
      }
    }
    return completedLowCounter;
  }

  function mediumNum() {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].priority === "Medium") {
        mediumCounter++;
      }
    }
    return mediumCounter;
  }

  function completedMedium() {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].priority === "Medium" && todos[i].isCompleted) {
        completedMediumCounter++;
      }
    }
    return completedMediumCounter;
  }

  function highNum() {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].priority === "High") {
        highCounter++;
      }
    }
    return highCounter;
  }

  function completedHigh() {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].priority === "High" && todos[i].isCompleted) {
        completedHighCounter++;
      }
    }
    return completedHighCounter;
  }

  return (
    <div className="">
      <div className="flex justify-center">
        <h1 className="text-white absolute underline mt-16 lg:mt-20 text-4xl md:text-5xl lg:text-7xl font-bold duration-200">
          Ticket System
        </h1>

        {/* <img alt="img1" className="lg:hidden" src={img1} />
        <img alt="img2" className="hidden lg:block" src={img2} /> */}
      </div>
      <h1 className="text-white text-center lg:text-left ml-4 lg:ml-20 lg:mt-20 mt-28 duration-200">
        <span className="font-bold text-xl">
          Total Tickets Completed: {completedNum()}/{todos.length}
        </span>{" "}
        <br />
        <span className="text-green-400">Low</span> priority Tickets:{" "}
        {completedLow()}/{lowNum()} <br />
        <span className="text-orange-400">Medium</span> priority Tickets:{" "}
        {completedMedium()}/{mediumNum()} <br />
        <span className="text-red-400">High</span> priority Tickets:{" "}
        {completedHigh()}/{highNum()}
      </h1>
      <h2 className="text-white text-center mt-10 font-bold text-xl mb-[-20px] lg:mt-20 lg:text-3xl lg:mb-[-200px]">
        Add a ticket
      </h2>
      <div className="mt-[-130px] mb-6 lg:mt-[40px]">
        <TodoForm addTodo={addTodo} />
      </div>

      <div className="grid lg:grid-cols-2">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
