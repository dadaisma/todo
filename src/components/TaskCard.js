"use client"
import { useRouter } from 'next/navigation'


const TaskCard = ({tasks}) => {
   const router = useRouter()
  return (
    <div className="z-50 grid grid-cols-2 gap-2 sm:grid-cols-4 mt-20">
   {tasks.length === 0 ? (
  <div>No hay Tareas pendientes, finalmente un poco de tiempo libre!!!</div>
) : (
  tasks.map((task) => (
    <div
      key={task.id}
      className='bg-slate-900 hover:bg-slate-700 p-3'
      onClick={() => {
        router.push('/tasks/edit/' + task.id);
      }}
    >
     
      <p className='text-xs font-bold text-center'>Hacer:</p>
      <li className='text-2xl font bold  overflow-hidden whitespace-pre-line break-words'>{task.title}</li>
      <p className='text-xs font-bold mr-3 text-center'>Que?</p>
      <p className='italic ml-8 overflow-hidden whitespace-pre-line break-words' >{task.description}</p>
      <p className='text-xs flex justify-end mt-4'>{new Date(task.createdAt).toISOString().split('T')[0]}</p>
      </div>
   ))
   )}
     </div>
  )
}

export default TaskCard