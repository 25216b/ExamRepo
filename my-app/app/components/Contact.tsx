
import { type ReactNode } from 'react'

//import { createTask, getTasks } from './Tickets'

import { getTasks, addTask, removeTask } from '../../lib/tasks'


export default async function Contacts() {
    const tasks = await getTasks()
    return (
        <section className="relative max-w-[1000px] mx-auto my-[40px] p-[30px] bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">

            {/* + Button */}
            <form action={addTask}>
                <label>
                    New task: <input name="title" />
                </label>
                <button
                    className="absolute top-4 right-4 bg-[#667eea] text-white w-8 h-8 rounded-full
                   flex items-center justify-center text-xl font-bold
                   hover:bg-[#5566d4] transition cursor-pointer"
                >
                    +
                </button>
            </form>
            <ul className="mt-4">
                {tasks.map((task) => (
                    <li key={task.id} className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded">
                        <span>{task.title}</span>
                        <form action={removeTask.bind(null, task.id)}>
                            <button
                                className="text-red-500 hover:text-red-700 text-xl transition"
                                title="Supprimer"
                            >
                                🗑️
                            </button>
                        </form>
                    </li>
                ))}
            </ul>



        </section>
    )
}
