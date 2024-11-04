import { useRef } from "react";
const Wifi = () => {
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
                <h1 className="text-4xl font-bold text-white pt-8">WIFI_AUTO_CONNECT</h1>
                <h2 ref={Ref1} className="text-2xl font-bold text-white pt-8">项目背景</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    📶校园网在每次电脑开机后需要重新链接校园网<br></br>
                    网络请求分配ip地址需要时间<br></br>
                    🤯麻烦在于每次开机后都需要手动打开浏览器后输入账号密码<br></br>
                </p>
                <h2 ref={Ref2} className="text-2xl font-bold text-white pt-8">功能安排</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    😆用户开机后即可自动链接校园网<br></br>
                    😴不修改注册表,不修改系统文件<br></br>
                    🔐安全性高,不会对系统造成影响<br></br>
                </p>
                <h2 ref={Ref3} className="text-2xl font-bold text-white pt-8">实现概要</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    📎此软件靠python库subprocess&&tkinter实现安装/卸载/文件放置<br></br>
                    🕷重点:<br></br>
                    🕷爬虫的基础三次重试request网络请求分配IP<br></br>
                    📃请求失败后,询问用户是否启动chrome浏览器,自动输入账号密码登录(操作大约1s)<br></br>
                </p>
                <h2 ref={Ref4} className="text-2xl font-bold text-white pt-8">项目声明</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    🐧软件下载加QQ群:<a target="_blank" className="text-blue-500 hover:text-blue-300" href="https://qm.qq.com/cgi-bin/qm/qr?k=SGQV2WrnSJI9S_evNSgOaqTuGbLIzSsR&jump_from=webapi&authKey=ZriQbfid8yHV5bIgwlKZl6QjMGaXhcatKRt8b5GCUCIqGt0/O9TNzdYue+llccUc">企鹅</a><br></br>
                    🦾软件下载github链接:<a className="text-blue-500 hover:text-blue-300" href="https://github.com/WildFox404/AUST-WifiAutoConnect" target="_blank">GitHub</a>
                    📎此软件只适用于windows系统<br></br>
                    📁该软件会默认在C:\Users\用户名\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup下创建一个快捷方式<br></br>
                    📁其余文件在安装时会询问用户
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

export default Wifi;