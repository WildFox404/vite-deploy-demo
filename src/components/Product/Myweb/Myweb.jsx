import { useRef } from "react";
const Myweb = () => {
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);

    const scrollToH2 = ({ targetRef }) => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full h-full bg-black flex flex-nowrap flex-row">
            <div className="relative bg-menu-bg basis-5/6 h-full p-8 overflow-y-auto">
                <h1 className="text-4xl font-bold text-white pt-8">MY_WEB</h1>
                <h2 className="text-2xl font-bold text-white pt-8">项目背景</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    📶此项目也就是当前网页<br></br>
                    👤一个程序员总不能没有个人博客吧<br></br>
                    🤯前端基础也不是很难(不过有很多特性)可以用其他方式解决的bug那就叫特性😆<br></br>
                </p>
                <h2 className="text-2xl font-bold text-white pt-8">实现概要</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    📎此软件技术栈:react+redux+tailwindcss+react-router+ant-design+vite<br></br>
                    📌redux状态管理真好用<br></br>
                    🔰个人其实不太喜欢用第三方组件,和其他框架交互有点头疼<br></br>
                    📚tailwindcss替代了css和scss➡️管理起来真的很方便,同时css样式更方便了(不用分屏,不混乱,打包后大小更小)<br></br>
                    🌎︎react-router不用多说,v6版本真的很好用<br></br>
                    👌vite热更新<br></br>
                    前端框架和工具真的很多,选择适合自己的才是最重要的
                </p>
            </div>
            <div className="relative bg-menu-bg basis-1/6 p-4 border-l-2 border-white h-full overflow-y-auto flex flex-col items-start">
                <button onClick={() => scrollToH2({ targetRef: Ref1 })} className="hover:text-blue-300 hover:scale-110">项目背景</button>
                <button onClick={() => scrollToH2({ targetRef: Ref2 })} className="hover:text-blue-300 hover:scale-110">实现概要</button>
            </div>
        </div>
    )
}

export default Myweb;