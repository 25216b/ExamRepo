export default function SectionId(){

    return (
    <section className="max-w-[1000px] mx-auto p-[20px] my-[40px] p-[30px] bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
            <h2>About Me</h2>
            <div className="flex items-center gap-[30px] flex-wrap">
                <div className="w-[200px] h-[200px] rounded-full bg-[#667eea] flex items-center justify-center text-white text-[4rem] flex-shrink-0">JD</div>
                <div className="flex-1 min-w-[250px]">
                    <p>Hello! I'm a passionate web developer who loves creating beautiful websites. I enjoy learning new
                        technologies and solving problems with code.</p>
                    <p>When I'm not coding, I like reading, playing games, and drinking coffee.</p>
                </div>
            </div>
        </section>
    )
}