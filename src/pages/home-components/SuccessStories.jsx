import CountUp from 'react-countup'
function SuccessStories() {
    return <div className="my-20 mx-auto">
        <div className="flex justify-center items-center flex-col md:flex-row gap-4">
            <div className="border border-gray-400 p-16 text-center ">
                <CountUp className="text-3xl font-bold" end={100} duration={2} />
                <h1 className="font-semibold text-xl">Current users</h1>
                <h1 className="font-semibold text-xl text-purple-400 animate-pulse">20+ registration in the last week</h1>
            </div>
            <div className="border border-gray-400 p-16 text-center ">
                <CountUp className="text-3xl font-bold" end={1000} duration={2} />
                <h1 className="font-semibold text-xl">Overall recipes</h1>
                <h1 className="font-semibold text-xl text-purple-400 animate-pulse">250+ recipes were added last week</h1>
            </div>
        </div>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='text-center text-2xl my-5 font-semibold'>Developer Information</h1>
            <div className="bg-slate-200 border border-slate-900 shadow-md px-2 py-5 md:px-16 md:py-14 flex flex-col items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nVVH72wUxa6TgIx9FgJDat-C-TZdaut_3AXcUHNRKQ&s" className="my-2 w-36 h-36 rounded-full" alt="" />
                <h1 className='text-xl font-bold mt-2'>Mir Kamrul Ahsan Asif</h1>
                <p className='text-xl font-bold mt-3'>Diploma in Computer Technology <span className="text-sm animate-pulse text-green-700">(running)</span></p>
                <h1 className='text-xl font-bold mt-2'>I do not have any professional experiences.</h1>
                <div className='flex justify-center items-center gap-3 mt-3'>
                    <p className='bg-gray-300 px-2 py-1 rounded-md'>JavaScript</p>
                    <p className='bg-gray-300 px-2 py-1 rounded-md'>React</p>
                    <p className='bg-gray-300 px-2 py-1 rounded-md'>ExpressJS</p>
                    <p className='bg-gray-300 px-2 py-1 rounded-md'>MongoDB</p>
                    <p className='bg-gray-300 px-2 py-1 rounded-md'>NodeJS</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <a className='text-gray-700 mt-3 bg-cyan-400 rounded-md px-2 py-1' href="https://portfolio-asif17.netlify.app/" target='_blank'>Portfolio</a>
                    <a className='text-gray-700 mt-3 bg-cyan-400 rounded-md px-2 py-1' href="https://github.com/mir-asif01" target='_blank'>Github</a>
                </div>
            </div>
        </div>
    </div>
}
export default SuccessStories