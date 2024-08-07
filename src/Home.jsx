import Create from "./components/Create"
import Header from "./components/Header"
import TaskList from "./components/TaskList"

export default function Home() {

    return (
        <>
        <div className="flex flex-col h-full bg-gradient-to-b to-sky-200 from-slate-200">
        {/* <Header/>
         */}
          {/* <div className=" flex w-full justify-center shadow-md h-14 mb-8 sticky"> */}
            <h1 className="font-extrabold text-slate-600 text-7xl mt-12 pt-12">
                to do list
            </h1>
        {/* </div> */}
            <div className="content w-full flex flex-col justify-center px-24">
            <Create/>
                <div className="flex grid-cols-3 gap-12 mx-4 mt-8 justify-around">
                <TaskList/>
                </div>
            </div>
        </div>
        </>
    )
}

