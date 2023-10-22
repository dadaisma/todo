"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function NewPage({params}) {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

useEffect(()=>{
 if(params.id){
  fetch(`/api/task/${params.id}`)
  .then(res => res.json())
  .then(data => {
    setTitle(data.title)
    setDescription(data.description)
  // console.log(data);
  })
 }


},[])

const handleSubmit = async (e) => {
  e.preventDefault();

  if (params.id) {
    try {
      const res = await fetch(`/api/task/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      resetTarea();
      // You can choose to handle the response data here, if needed.
      // const data = await res.json();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  } else {
    try {
      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      resetTarea();
      // You can choose to handle the response data here, if needed.
      // const data = await res.json();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  }

  // After the request is completed, trigger a refresh and navigate to the desired page.
  setTimeout(async () => {
  await router.refresh();
  await router.push('/');
}, 3000);
};

  const eliminarTarea = async () => {
    try {
      await fetch(`/api/task/${params.id}`, {
        method: "DELETE",
      });
  
      // After the DELETE request is completed, trigger a refresh and navigate to the desired page.
      await router.refresh();
      await router.push('/');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const resetTarea = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-slate-700 p-6 sm:p-10 w-full md:w-1/2 lg:w-1/3 rounded-lg">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="font-semibold text-sm">
            Titulo
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="border border-gray-400 p-2 mb-4 w-full text-black rounded-lg"
            placeholder="Titulo de la tarea"
            required
          />
          <label htmlFor="description" className="font-semibold text-sm">
            Descripcion
          </label>
          <textarea
            rows="3"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="border border-gray-400 p-2 mb-4 w-full text-black rounded-lg"
            placeholder="Describe tu tarea"
          ></textarea>
          <div className="flex justify-between">
          <button className={`${
  params.id ? "bg-orange-800 hover:bg-orange-500" : "bg-teal-800 hover:bg-teal-500"
} text-white font-bold rounded-lg p-2 w-1/2 sm:w-auto`}>{params.id ? "Conferma Edit" : "Crear"}
            </button>
       {!params.id && ( 
            <button
            type="button"
              onClick={resetTarea}
              className="bg-blue-800 hover:bg-blue-500 text-white font-bold rounded-lg p-2 w-1/2 sm:w-auto"
            >
              Limpiar
            </button>
            )}
               {params.id && ( 
            <button
              onClick={eliminarTarea}
              type="button"
              className="bg-red-800 hover:bg-red-500 text-white font-bold rounded-lg p-2 w-1/2 sm:w-auto"
            >
              Eliminar
            </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
