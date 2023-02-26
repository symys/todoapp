import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "./taskSlice";
import { useRef } from "react";
import todoImg from "./todopage.png";
import TaskCard from "./TaskCard";
import { getAuth, signOut } from "firebase/auth";
import app from "./firebase";
import { useNavigate } from "react-router-dom";


let keyCounter = 0;
const CATEGORIES = ["All", "Do First", "Schedule", "Delegate", "Don't Do"];
const CategoryDescription = [
  "All",
  "First focus on important tasks to be done the same day.",
  "Important, but not-so-urgent stuff should be scheduled.",
  "What’s urgent, but less important, delegate to others.",
  "What’s neither urgent nor important, don’t do at all.",
];

function TodoPage() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [selectedCategory, setCategory] = useState("All");
  const [itemCategory, handleCategoryChange] = useState("DO FIRST");

  const textVal = useRef();

  const taskState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // const toggleClass = "bg-blue-500";

  function handleSubmit(e) {
    e.preventDefault();
    const inputVal = textVal.current.value;
    const inputCategory = itemCategory;
    const newTask = { task: inputVal, category: inputCategory };
    dispatch(addTask(newTask));
    textVal.current.value = "";
    handleCategoryChange("Do First");
  }

  function handleCategory(event) {
    const handledCategory = event.target.value;
    handleCategoryChange(handledCategory);
  }

const logout = () => {
  signOut(auth).then(() => {
    navigate("/")
  }).catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error)
  });
}

  const filteredTasks =
    selectedCategory === "All"
      ? taskState.tasks
      : taskState.tasks.filter((task) => task.category === selectedCategory);
  return (
    <div className="flex flex-col w-full lg:pr-0 pr-4 bg-gradient-to-tl from-green-300 to-purple-400 font-rubik tracking-wide">
       <div className="self-end flex pt-2 pr-6 pb-2">
          <button
          onClick={logout}
          className=" text-sm text-white rounded-xl box-border lg:p-3 p-2 transition-all duration-250 bg-[#ff8500] hover:bg-[#fca016] lg:text-base text-sm lg:m-1 lg:w-24 w-16"
        >Log out</button>
        </div>
      <div className="flex lg:flex-row flex-col lg:items-start items-center ">
        <div className="flex flex-col font-secular lg:ml-28 ml-8 ">
          {/* <div className="flex self-end pr-20 mt-10">
          <button
            onClick={() => dispatch(toggleMode(taskState.nightMode))}
            className={
              "text-sm text-white w-32 rounded-xl box-border p-1 transition-all duration-250  text-sm uppercase " +
              (taskState.nightMode ? null : toggleClass)
            }
          >
            {taskState.nightMode ? "Night Mode" : "Day Mode"}
          </button>
        </div> */}

          <div className=" flex lg:flex-row flex-col ml-[-0.3em]">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                ref={textVal}
                className="bg-gray-50 bg-opacity-80 text-gray-700 placeholder-gray-500 lg:placeholder:text-base placeholder:text-xs uppercase font-semibold text-sm rounded-xl focus:ring-gray-100 tracking-wide focus:border-gray-100 lg:w-[28.2em] w-[10em] p-2 lg:h-10 h-8"
                placeholder="Write New Task"
              />

              <select
                value={itemCategory}
                onChange={handleCategory}
                className="lg:w-[8em] w-[6em] lg:h-10 h-8 pl-2 pr-2 pt-1 pb-1 ml-1 text-gray-500 text-opacity-80 bg-white bg-opacity-80 rounded-xl lg:text-base text-sm shadow-sm outline-none appearance-none font-semibold"
              >
                {CATEGORIES.map((category) => {
                  if (category !== "All")
                    return (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    );
                  return null;
                })}
              </select>

              <input
                type="submit"
                value="ADD TASK"
                className="text-blue-800 text-opacity-80 lg:w-32 w-20 lg:text-base text-xs lg:h-10 h-8 rounded-xl p-2 transition-all duration-250 bg-white bg-opacity-80 hover:bg-gradient-to-tl from-blue-500 to-purple-400 hover:text-white uppercase tracking-wide ml-1 font-semibold"
              />
            </form>
          </div>

          <div className="flex flex-row gap-1 mt-4 flex-wrap">
            {CATEGORIES.map((category, index) => {
              return (
                <button
                  title={CategoryDescription[index]}
                  value={category}
                  onClick={(e) => setCategory(e.target.value)}
                  key={`${category}${index}`}
                  className="lg:text-sm text-xs text-purple-600 md:w-32 w-[5em] rounded-xl box-border p-2 transition-all duration-250 bg-white bg-opacity-70 hover:bg-gradient-to-tl from-blue-500 to-purple-400 hover:text-gray-200 lg:uppercase font-semibold lg:tracking-wide"
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col lg:w-[41em] sm:w-[30em] w-[20em] self-center mt-1 flex flex-col bg-white bg-opacity-70 h-[28em] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md uppercase scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 overflow-y-auto">
            <div className="mt-4">
              {filteredTasks.map((task) => {
                return (
                  <div
                    key={`${task.task}+${(keyCounter += 1)}`}
                    className="flex flex-row w-full"
                  >
                    <TaskCard task={task.task} category={task.category} />
                    <div
                      className="basis-1/6 ml-1 mr-2 w-full p-4 shadow-md flex flex-row hover:bg-red-500 hover:bg-opacity-40 text-red-400 hover:text-white cursor-pointer rounded-xl"
                      onClick={() =>
                        dispatch(deleteTask(`${task.category}${task.task}`))
                      }
                    >
                      <button className="lg:pl-6 pl-1 lg:pt-2 pt-1 font-bold lg:text-xl text-base">
                        X
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-1/2 lg:w-0 w-96 lg:pl-10 lg:pr-10 sm:pl-20 sm:pr-20 pl-12 pr-12 h-screen w-screen ">
          <img src={todoImg} alt="todoImage" className="lg:pt-16" />
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
