import React from 'react'
import { FaRegCircle } from 'react-icons/fa'
import { todo } from '../Data'

const TodoList = () => {
  return (
    <div className='flex flex-col mt-2 gap-2 '>
    {/* list itself */}
   {todo.map((list) => (
     <div key={list.id} className='w-full flex justify-start font-semibold text-dash items-center gap-4 border border-gray-400 p-4  rounded-tl-[10px] rounded-br-[10px] rounded-r-[10px]'>
     {/* icon */}
     <FaRegCircle size={20} className='text-bblue'/>
     <h1>{list.title}</h1>

   </div>
   ))}

  </div>
  )
}

export default TodoList
