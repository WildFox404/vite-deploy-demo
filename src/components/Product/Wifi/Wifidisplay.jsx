import install from '../../../assets/wifi/install.png'
import complete from '../../../assets/wifi/complete.png'

const Wifidisplay = () => {

    return (
        <div className="w-full h-full bg-black flex flex-nowrap flex-row">
            <div className="relative bg-menu-bg basis-5/6 h-full p-8 overflow-y-auto">
                <div className='flex gap-4 flex-warp lg:flex-nowrap'>
                    <div className='flex-1 font-sans accent-white white-shadow rounded-xl relative overflow-hidden  '>
                        <div className="flex flex-col items-center">
                            <h1 className="text-sm font-bold">安装界面</h1>
                            <img src={install} alt="Your Image" className="mt-4 " />
                        </div>
                    </div>
                    <div className='flex-1 font-sans accent-white white-shadow rounded-xl relative overflow-hidden  '>
                        <div className="flex flex-col items-center">
                            <h1 className="text-sm font-bold">完成界面</h1>
                            <img src={complete} alt="Your Image" className="mt-4 " />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-menu-bg basis-1/6 p-4 border-l-2 border-white h-full overflow-y-auto flex flex-col items-start">
                {/* <button onClick={() => scrollToH2({ targetRef: Ref1 })} className="hover:text-blue-300 hover:scale-110">项目背景</button>
                <button onClick={() => scrollToH2({ targetRef: Ref2 })} className="hover:text-blue-300 hover:scale-110">项目声明</button> */}
            </div>
        </div>
    )
}

export default Wifidisplay;