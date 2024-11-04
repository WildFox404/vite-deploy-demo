import login from "../../../assets/app/login.jpg"
import charge from "../../../assets/app/charge.jpg"
import course from "../../../assets/app/course.jpg"
import empty from "../../../assets/app/empty.jpg"
import emptyclassroom from "../../../assets/app/emptyclassroom.jpg"
import grade from "../../../assets/app/grade.jpg"
import map from "../../../assets/app/map.jpg"
import my from "../../../assets/app/my.jpg"
import peiyang from "../../../assets/app/peiyang.jpg"
import plan from "../../../assets/app/plan.jpg"
import secondclass from "../../../assets/app/secondclass.jpg"
import service from "../../../assets/app/service.jpg"
import test from "../../../assets/app/test.jpg"
import wifi from "../../../assets/app/wifi.jpg"
import xiudu from "../../../assets/app/xiudu.jpg"
import xuegong from "../../../assets/app/xuegong.jpg"
import zhifu from "../../../assets/app/zhifu.jpg"
import xiaoli from "../../../assets/app/xiaoli.jpg"
const Austappdisplay = () => {


    return (

        <div className="w-full h-full bg-black flex flex-nowrap flex-row">
            <div className="relative bg-menu-bg basis-5/6 h-full p-8 overflow-y-auto">
                <div className="bg-menu-bg flex flex-wrap">
                    <div className='flex gap-4 flex-warp lg:flex-nowrap'>
                        <div className='flex-1 font-sans accent-white gap-4 relative overflow-hidden flex-col '>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">登录界面</h1>
                                <img src={login} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">充电桩界面</h1>
                                <img src={charge} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">我的界面</h1>
                                <img src={my} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">服务界面</h1>
                                <img src={service} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">学期支付</h1>
                                <img src={zhifu} alt="Your Image" className="mt-4 " />
                            </div>
                        </div>
                        <div className='flex-1 font-sans accent-white gap-4 relative overflow-hidden flex-col '>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">课程界面</h1>
                                <img src={course} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">空教室界面</h1>
                                <img src={empty} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">培养计划界面</h1>
                                <img src={peiyang} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">校园网</h1>
                                <img src={wifi} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">校历</h1>
                                <img src={xiaoli} alt="Your Image" className="mt-4 " />
                            </div>
                        </div>
                        <div className='flex-1 font-sans accent-white gap-4 relative overflow-hidden flex-col '>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">成绩界面</h1>
                                <img src={grade} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">空教室界面</h1>
                                <img src={emptyclassroom} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">计划完成界面</h1>
                                <img src={plan} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">修读详情</h1>
                                <img src={xiudu} alt="Your Image" className="mt-4 " />
                            </div>
                        </div>
                        <div className='flex-1 font-sans accent-white gap-4 relative overflow-hidden flex-col '>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">考试安排界面</h1>
                                <img src={test} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">校园地图</h1>
                                <img src={map} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">第二课堂</h1>
                                <img src={secondclass} alt="Your Image" className="mt-4 " />
                            </div>
                            <div className="flex flex-col items-center white-shadow mt-4">
                                <h1 className="text-sm font-bold">学工系统</h1>
                                <img src={xuegong} alt="Your Image" className="mt-4 " />
                            </div>
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

export default Austappdisplay;