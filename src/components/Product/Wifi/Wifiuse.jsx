import { useRef } from "react";

const Wifiuse = () => {
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);
    const Ref3 = useRef(null);

    const scrollToH2 = ({ targetRef }) => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full h-full bg-black flex flex-nowrap flex-row">
            <div className="relative bg-menu-bg basis-5/6 h-full p-8 overflow-y-auto">
                <h1 className="text-4xl font-bold text-white pt-8">WIFI_AUTO_CONNECT</h1>
                <h2 ref={Ref1} className="text-2xl font-bold text-white pt-8">安装说明</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    📁在非C盘创建一个文件夹(记住这个文件夹的路径)<br></br>
                    📁安装包➡️选择路径➡️刚刚创建的文件夹下<br></br>
                    🔑账号➡️校园网账号<br></br>
                    ㊙️密码➡️校园网密码<br></br>
                    🏠运营商➡️根据自己情况选择<br></br>
                    😸安装之后电脑开机后,即可自动链接上校园网
                </p>
                <h2 ref={Ref2} className="text-2xl font-bold text-white pt-8">额外声明</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    🚨如果不小心输入错误<br></br>
                    😇解决方法1:可以启动uninstall.exe➡️卸载文件➡️再次安装此软件<br></br>
                    😇解决方法2:找到安装路径下的config.txt➡️在其中修改你的账号密码/运营商:(联通,电信,移动)➡️保存txt<br></br>
                </p>
                <h2 ref={Ref3} className="text-2xl font-bold text-white pt-8">文件放置声明</h2>
                <p className="text-lg text-white pt-8 font-normal">
                    🥰程序放置在电脑启动文件夹中<br></br>
                    🕳C:\Users\用户名\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup<br></br>
                    ⬆️打开方式:<br></br>
                    😯win+r➡️打开运行窗口➡️输入shell:startup➡️确定即可打开
                </p>
            </div>
            <div className="relative bg-menu-bg basis-1/6 p-4 border-l-2 border-white h-full overflow-y-auto flex flex-col items-start">
                <button onClick={() => scrollToH2({ targetRef: Ref1 })} className="hover:text-blue-300 hover:scale-110">安装说明</button>
                <button onClick={() => scrollToH2({ targetRef: Ref2 })} className="hover:text-blue-300 hover:scale-110">额外声明</button>
                <button onClick={() => scrollToH2({ targetRef: Ref3 })} className="hover:text-blue-300 hover:scale-110">文件放置声明</button>
            </div>
        </div>
    )
}

export default Wifiuse;