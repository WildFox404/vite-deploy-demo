import Image from "assets/game/gamewantopen.webp"
import { useRef } from "react";

const Gamewantopen = () => {
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);

    const scrollToH2 = ({ targetRef }) => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full h-full bg-black flex flex-nowrap flex-row">
            <div className="relative bg-menu-bg basis-5/6 h-full p-8 overflow-y-auto">
                <h1 className="text-4xl font-bold text-white">GAME_RAIN</h1>
                <h2 ref={Ref1} className="text-2xl font-bold text-white pt-8">项目背景</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    📶大二跟b站up一起做了个名为《想开了》的游戏<br></br>
                    自己挺摸鱼的,主要贡献在关卡设计<br></br>
                    毕竟玩过许多游戏:奥日,蔚蓝,空洞<br></br>
                </p>
                <img src={Image} alt="" className="w-3/5"></img>
                <h2 ref={Ref2} className="text-2xl font-bold text-white pt-8">项目声明</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    📁多的不说了,之间跳转链接看看项目吧➡️<a target="_blank" className="text-blue-500 hover:text-blue-300" href="https://www.gcores.com/games/126707">机核链接</a>
                </p>
            </div>
            <div className="relative bg-menu-bg basis-1/6 p-4 border-l-2 border-white h-full overflow-y-auto flex flex-col items-start">
                <button onClick={() => scrollToH2({ targetRef: Ref1 })} className="hover:text-blue-300 hover:scale-110">项目背景</button>
                <button onClick={() => scrollToH2({ targetRef: Ref2 })} className="hover:text-blue-300 hover:scale-110">项目声明</button>
            </div>
        </div>
    )
}

export default Gamewantopen;