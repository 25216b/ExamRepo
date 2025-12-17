import { type ReactNode } from 'react'

type CVEntryProps = {
  sectionName:string
  title: string
  company: string
  date: string
  children?: ReactNode
}

export default function CVEntry(props: CVEntryProps) {
  return (
    <section className="max-w-[1000px] mx-auto p-[20px] my-[40px] p-[30px] bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
      <div className="mb-8 pl-5 border-l-[3px] border-[#667eea]">

        <h2 className="text-[#667eea] mb-5 text-2xl border-b-4 border-[#667eea] pb-2">{props.sectionName}</h2>
        <h3 className="text-black font-bold text-lg mb-[5px]">
          {props.title},  {props.company}

        </h3>
        <p className="text-[#666] italic mb-[10px]">({props.date})</p>
        <p>{props.children}</p>

      </div>
    </section>
  )
}

