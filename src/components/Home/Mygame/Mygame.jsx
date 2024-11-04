import PNG1 from "../../../assets/game1.webp"
import PNG2 from "../../../assets/game2.jpg"
import PNG3 from "../../../assets/test1.png"
import PNG4 from "../../../assets/game3.webp"
import PNG5 from "../../../assets/game3.jpg"
const Mygame = () => {
    return (
        <div className='w-full mt-[220px] px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-4' style={{opacity:1,transform: 'none'}}>
            <div className="w-full h-fit lg:flex gap-4 xl:gap-6">
                <div className="bg-custom-bg white-shadow relative w-full lg:w-1/3 gap-4 flex flex-col p-6 rounded-3xl">
                    <div className="text-2xl xl:text-2xl 2xl:text-3xl z-10 drop-shadow-sm whitespace-nowrap">
                        <span className="text-orange-500 font-bold">
                            Games
                        </span>{" "}
                        I made in GameJam
                    </div>
                    <div className="font-sans rounded-xl relative overflow-hidden min-w-[200px]">
                        <div className="w-auto h-full">
                            <div className="w-auto h-full" style={{transform: "none"}}>
                                <img src={PNG1} alt="">
                                </img>
                            </div>
                        </div>
                    </div>
                    <div className="font-sans rounded-xl relative overflow-hidden min-w-[200px]">
                        <div className="w-auto h-full">
                            <div className="w-auto h-full" style={{transform: "none"}}>
                                <img src={PNG3} alt="">
                                </img>
                            </div>
                        </div>
                    </div>
                    <div className="font-sans rounded-xl relative overflow-hidden min-w-[200px]">
                        <div className="w-auto h-full">
                            <div className="w-auto h-full" style={{transform: "none"}}>
                                <img src={PNG5} alt="">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full lg:2/3 flex flex-col gap-4 xl:gap-6 mt-6 xl:mt-0">
                    <div className="bg-custom-bg white-shadow relative p-6 rounded-3xl h-fit">
                        <div className="drop-shadow-sm text-2xl xl:text-4xl whitespace-nowrap mb-4">
                            <span className="text-orange-500 font-bold">Games</span>
                            I made in Companies
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 justify-between">
                            <div className="h-fit basis-1/2 font-sans rounded-xl relative overflow-hidden min-w-[200px]">
                                <div className="w-auto h-full">
                                    <div className="w-auto h-full" style={{transform:"none"}}>
                                        <img src={PNG2} alt="" className="w-auto m-auto object-cover"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="h-fit basis-1/2 font-sans rounded-xl relative overflow-hidden min-w-[200px]">
                                <div className="w-auto h-full">
                                    <div className="w-auto h-full" style={{transform:"none"}}>
                                        <img src={PNG4} alt="" className="w-auto m-auto object-cover"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-custom-bg white-shadow flex-1 h-full justify-center items-center rounded-3xl hidden lg:flex">
                        <div className="lg:text-6xl xl:text-8xl h-fit font-semibold text-orange-400">
                            Game
                            <span className="text-gray-50">+</span>
                            Code
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mygame;