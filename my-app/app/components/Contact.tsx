
import { type ReactNode } from 'react'

//import { createTask, getTasks } from './Tickets'

import { getTasks, addTask , removeTask } from '../../lib/tasks'


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
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="flex justify-between mb-2">
                        <span>{task.title}</span>
                        <form action={() => removeTask(task.id)}>
                            <button type="submit" className="bg-red-500 text-white rounded px-2">
                                🗑
                            </button>
                        </form>
                    </li>
                ))}
            </ul>



        </section>
    )
}
