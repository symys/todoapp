import React from 'react'

function TaskCard({task, category}) {
  return (
    
    <div className="w-full lg:p-4 p-2 ml-2 rounded-xl shadow-md flex flex-row hover:bg-gradient-to-tl from-blue-500 to-purple-400 hover:bg-opacity-80 text-blue-800 text-opacity-80 hover:text-white cursor-pointer">
      <div className="basis-3/4 flex flex-col items-stretch">
        <h3 className="lg:text-lg text-sm self-start font-semibold tracking-wide pl-4 pt-2">
          {task}
        </h3>
      </div>
      <div className="basis-1/4 flex flex-col items-stretch pl-4 pr-4">
        <p className=" self-end lg:text-base text-xs pt-2">
          {category}
        </p>
      </div>
    </div>
  )
}

export default TaskCard