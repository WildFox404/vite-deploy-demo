import { useRef } from "react";

const Electron = () => {
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);
    const Ref3 = useRef(null);

    const scrollToH2 = ({ targetRef }) => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full h-full bg-black flex flex-nowrap flex-row">
            <div className="relative bg-menu-bg basis-5/6 h-full p-8 overflow-y-auto">
                <h1 className="text-4xl font-bold text-white pt-8">AUST_COURSE_APP</h1>
                <h2 ref={Ref1} className="text-2xl font-bold text-white pt-8">项目背景</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    🤯安徽理工大学校组织青年传媒委员会<br></br>
                    🤔1发现信息通知和更新出现不及时/完成后未留痕迹/无法了解到最新通知<br></br>
                    比如公众号要摄影照片,摄影把照片导卡后,通知看不到(因为事挺多的,真有可能会漏),所以开发这个软件
                    😫2还有资源公开,资源合并<br></br>
                    就像git的同个分支,小明优先提交了,但是小红后提交,这时候就需要合并的情况<br></br>
                    工作留痕也能更好考核,便于管理<br></br>
                    🤥3同时可以方便各个部门的工作,例如人员值班表的算法生成/摄影视频的导出删除/通知发布/资源管理/人员管理等/...<br></br>
                    例如人员的增减,有的地方需要统计人数,有的地方需要统计人员名单,有人的记录更新,有人记录没更新,导致信息错误
                </p>
                <h2 ref={Ref2} className="text-2xl font-bold text-white pt-8">功能安排</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    1.用户登录🧔(采用学校的api➡️稳定安全)<br></br>
                    2.各个部门的分区<br></br>
                    3.各个部分管理者信息通知和人员之间通信,拉群📋<br></br>
                    4.人员的管理权限💯<br></br>
                    5.综办人员管理📋<br></br>
                    6.综办值班安排生成⏱︎<br></br>
                    7.摄影视频的导出/删除<br></br>
                    8.各个部门的资源管理/互通⌛<br></br>
                </p>
                <h2 ref={Ref3} className="text-2xl font-bold text-white pt-8">软件计划</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    👨‍💻这是一个大工程,正在制作中<br></br>
                    框架整体采用electron+vue3+gin<br></br>
                    功能实现🤔美化前端🤯性能优化😂头疼吧😂
                </p>
            </div>
            <div className="relative bg-menu-bg basis-1/6 p-4 border-l-2 border-white h-full overflow-y-auto flex flex-col items-start">
                <button onClick={() => scrollToH2({ targetRef: Ref1 })} className="hover:text-blue-300 hover:scale-110">项目背景</button>
                <button onClick={() => scrollToH2({ targetRef: Ref2 })} className="hover:text-blue-300 hover:scale-110">功能安排</button>
                <button onClick={() => scrollToH2({ targetRef: Ref3 })} className="hover:text-blue-300 hover:scale-110">软件计划</button>
            </div>
        </div>
    )
}

export default Electron;