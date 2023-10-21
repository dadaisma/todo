import Link from "next/link"

export default function NavBar() {
    
  return (
<div className=" ">

  <nav className='z-0  fixed inset-0 h-1 container mx-auto bg-slate-800  '>
  
        <div className="z-45 h-16 bg-slate-800 flex justify-between  ">
          <Link href='/'>
            <h3 className="hover:text-green-500 text-green-200 p-2">Panel de Tareas</h3>
           <p className="text-sm ml-2">Nextjs 13 CRUD with prisma & postgres</p> 
          </Link>
        
      <div className="flex justify-between items-center">
    
      <Link href='/about'>
        <p className="bg-teal-800 rounded-md p-1 text-xs mr-5  ">About</p>
      </Link>
      <Link href='/new'>
        <p className="bg-teal-800 rounded-md p-1 text-xs ">Añadir</p>
      </Link>
      </div>
      </div>
  </nav>
  </div>
  )
}
