import React from 'react'
import { prisma } from '@/libs/prisma'
import TaskCard from '@/components/TaskCard'

async function loadTask() {
//with prisma
const data = await prisma.task.findMany()
//with fetch
  //const res = await fetch('http://localhost:3000/api/task/')
//const data = await res.json()
//console.log(data)
return data
}

export const revalidate = 60;

const  HomePage = async () => {
  const tasks = await loadTask()
  return (
    <>
    <section className='container mx-auto'>
    
    <TaskCard tasks={tasks} key={tasks.id} />
    
       </section>
    </>
  ) 
}

export default HomePage