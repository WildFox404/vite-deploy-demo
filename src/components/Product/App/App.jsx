import { useRef } from "react";
const Austapp = () => {
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);
    const Ref3 = useRef(null);
    const Ref4 = useRef(null);

    const scrollToH2 = ({ targetRef }) => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full h-full bg-black flex flex-nowrap flex-row">
            <div className="relative bg-menu-bg basis-5/6 h-full p-8 overflow-y-auto">
                <h1 className="text-4xl font-bold text-white pt-8">AUST_COURSE_APP</h1>
                <h2 ref={Ref1} className="text-2xl font-bold text-white pt-8">项目背景</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    🤯大约在2023年,安徽理工大学微信小程序理工微助因涉及用户信息,停止运行<br></br>
                    🤔遂打算开发一款APP提供学生查询课表和其他辅助功能APP<br></br>
                    🤔由于设备限制<br></br>
                    🤔采用原生安卓开发APP
                </p>
                <h2 ref={Ref2} className="text-2xl font-bold text-white pt-8">功能安排</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    1.用户登录🧔<br></br>
                    2.课表查询/添加/删除📈<br></br>
                    3.成绩查询💯<br></br>
                    4.考试查询📋<br></br>
                    5.校历查询⏱︎<br></br>
                    6.培养方案查询📋<br></br>
                    7.空闲教室查询⌛<br></br>
                    8.校园充电桩查询⌛<br></br>
                    9.智慧团建🈸<br></br>
                    10.第二课堂🛂<br></br>
                    11.学工系统🈸<br></br>
                    12.校园网一键登录🏃‍♂<br></br>
                    13.教务系统📋<br></br>
                </p>
                <h2 ref={Ref3} className="text-2xl font-bold text-white pt-8">实现概要</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    👨‍💻原生安卓开发<br></br>
                    👩🏻‍💻安卓自定义组件/动画设置/图表制作(canvas)<br></br>
                    👨🏼‍💻基础xml编写/需求分析/功能实现<br></br>
                    好像没有啥东西🤔接口都是爬出来的🤯分析一下返回数据,然后写个请求,再写个解析,最后写个展示😂
                </p>
                <h2 ref={Ref4} className="text-2xl font-bold text-white pt-8">项目声明</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    🐧APP下载请加QQ群:<a target="_blank" className="text-blue-500 hover:text-blue-300" href="https://qm.qq.com/cgi-bin/qm/qr?k=SGQV2WrnSJI9S_evNSgOaqTuGbLIzSsR&jump_from=webapi&authKey=ZriQbfid8yHV5bIgwlKZl6QjMGaXhcatKRt8b5GCUCIqGt0/O9TNzdYue+llccUc">企鹅</a><br></br>
                    🦾软件下载github链接:<a className="text-blue-500 hover:text-blue-300" href="https://github.com/WildFox404/AUST-APP" target="_blank">GitHub</a>
                    🔐因项目代码公开,为防止下载他人修改后软件,导致信息泄露,请下载指定链接软件<br></br>
                    🧃只能安卓/伪鸿蒙系统使用<br></br>
                    🔐APP接口全部采用爬虫逆向分析接口<br></br>
                    🔐请放心使用
                </p>
            </div>
            <div className="relative bg-menu-bg basis-1/6 p-4 border-l-2 border-white h-full overflow-y-auto flex flex-col items-start">
                <button onClick={() => scrollToH2({ targetRef: Ref1 })} className="hover:text-blue-300 hover:scale-110">项目背景</button>
                <button onClick={() => scrollToH2({ targetRef: Ref2 })} className="hover:text-blue-300 hover:scale-110">功能安排</button>
                <button onClick={() => scrollToH2({ targetRef: Ref3 })} className="hover:text-blue-300 hover:scale-110">实现概要</button>
                <button onClick={() => scrollToH2({ targetRef: Ref4 })} className="hover:text-blue-300 hover:scale-110">项目声明</button>
            </div>
        </div>
    )
}

export default Austapp;