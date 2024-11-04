import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector } from 'react-redux'
import { change } from '../../stores/styleSlice';
import Logo from '../../assets/logo.png';
import LogoTextDark from '../../assets/logoTextDark.png';
import LogoTextLight from '../../assets/logoTextLight.png';
import LogoTextBlue from '../../assets/LogoTextBlue.png';
import Arrow from '../../assets/arrow.svg';
import List from '../../assets/list.svg'
import { Outlet } from 'react-router-dom'; // 导入Outlet
const NavbarLinks = [
    {
        id: 1,
        title: "首页",
        Link:"/home",
    },
    {
        id: 2,
        title: "产品",
        Link: "/product",
    },
    {
        id: 3,
        title: "关于",
        Link: "/about",
    }
]

const Navbar = () => {
    const [logoText, setLogoText] = useState(LogoTextLight);

    const dispatch = useDispatch();
    const isDarkMode = useSelector(state => state.style.value);

    

    return (
        <div className='relative flex flex-col'>
            <div className=' sticky top-0 shadow w-full bg-custom-bg px-8 py-3 z-20 border-b-2 border-custom-text'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center '>
                        <img src={List} alt="Logo" className='h-8 mr-2 md:hidden'/>
                        <img src={Logo} alt="Logo" className='h-10 mr-2'/>
                        <img src={logoText} alt="Logo Text" className='h-4 mr-4' 
                            onMouseEnter={() => setLogoText(LogoTextBlue)}
                            onMouseLeave={() => setLogoText(LogoTextLight)}/>
                        <div>
                            <ul className='hidden md:flex space-x-4 '>
                                {NavbarLinks.map((link) => (
                                    <li key={link.id} className="text-custom-text text-xl sm: md:text-lg lg:text-xl hover:text-blue-600">
                                        <a href={link.Link}>{link.title}</a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button className='relative px-4 py-1 text-xl text-custom-text mr-3 hover:text-blue-600'> {/* 添加hover:bg-blue-200类以改变背景颜色 */}
                            GitHub
                            <img src={Arrow} alt="" className='absolute right-1 top-1/3 transform -translate-y-1/2 h-4 ml-2' /> {/* 添加hover:bg-blue-200类以改变背景颜色 */}
                        </button>
                        <button 
                            onClick={()=>{dispatch(change())}} 
                            className={`px-4 py-1 text-xl mr-3 rounded-full ${isDarkMode ? 'bg-white text-white' : 'bg-black text-black'} hover:${isDarkMode ? 'bg-gray-200' : 'bg-gray-500'}`} 
                        >
                            {isDarkMode ? '☀️' : '🌙'} {/* 根据主题状态切换图标 */}
                        </button>
                        <button className='border-2 text-custom-text border-blue-400 px-4 py-1 rounded-md hover:bg-blue-400 hover:text-white'>
                            登录
                        </button>
                    </div>
                </div>
            </div>
            <div className='relative w-full h-full z-10 flex ' style={{flex:1}}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Navbar;
