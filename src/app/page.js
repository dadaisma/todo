import React from 'react'
import { prisma } from '@/libs/prisma'
import TaskCard from '@/components/TaskCard'

//async function loadTask() {
//with prisma
//return await prisma.task.findMany()
//with fetch
// const res = await 
//fetch("https://todo-dadaisma.vercel.app/api/task/")
//const data = await res.json()
//console.log(data)
//return data
//}

export const revalidate = 10;

const  HomePage = async () => {
  const tasks = await prisma.task.findMany()
  return (
    <>
    <section className='container mx-auto'>
    
    <TaskCard tasks={tasks} key={tasks.id} />
    
       </section>
    </> 
  ) 
}

export default HomePage