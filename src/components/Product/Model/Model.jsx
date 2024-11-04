import webp1 from "../../../assets/model/1.webp"
import webp2 from "../../../assets/model/2.webp"
import webp3 from "../../../assets/model/3.webp"
import webp4 from "../../../assets/model/4.webp"
import webp5 from "../../../assets/model/5.webp"
import webp6 from "../../../assets/model/6.webp"
import webp7 from "../../../assets/model/7.jpg"
import webp8 from "../../../assets/model/8.jpg"
import webp9 from "../../../assets/model/9.jpg"
import webp10 from "../../../assets/model/10.jpg"

import video1 from "../../../assets/model/video/1.mp4"
import video2 from "../../../assets/model/video/2.mp4"
import video3 from "../../../assets/model/video/3.mp4"
import video4 from "../../../assets/model/video/4.mp4"
import video5 from "../../../assets/model/video/5.mp4"
import video6 from "../../../assets/model/video/6.mp4"

const Model = () => {

    return (
        <div className="bg-menu-bg m-8">
            <h1 className="text-4xl font-bold text-white pt-8">3d_MODEL</h1>
            <h2 className="text-2xl font-bold text-white pt-8">背景</h2>
            <p className="text-lg text-white pt-8 font-normal">
                📶大一在试错,尝试了各种各样的方向:摄影/剪辑/建模/编程
                总结下来可以说是摄影烧钱
                剪辑建模要求配置高
                编程是物质条件中最容易满足的,二手华为板子＋蓝牙键盘＋蓝牙鼠标≈1000米
                termux＋ubuntu(zsh)+git即可实现在平板上写代码和同步文件
                现在反而用来无聊刷leetcode用了<br></br>
                <br></br>
                建模是blender软件
            </p>
            <h2 className="text-2xl font-bold text-white pt-8 ">三维视频作品</h2>
            <div className='flex gap-4 flex-warp lg:flex-nowrap mt-6'>
                <div className='flex-1 font-sans flex-col accent-white rounded-xl relative overflow-hidden items-center '>
                    <video src={video2} controls className="mt-4 white-shadow" />
                    <video src={video3} controls className="mt-4 white-shadow" />
                    <video src={video5} controls className="mt-4 white-shadow" />
                </div>
                <div className='flex-1 font-sans flex-col accent-white rounded-xl relative overflow-hidden items-center '>
                    <video src={video1} controls className="mt-4 white-shadow" />
                    <video src={video4} controls className="mt-4 white-shadow" />
                    <video src={video6} controls className="mt-4 white-shadow" />
                </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white pt-8 ">作品</h2>
            <div className='flex gap-4 flex-warp lg:flex-nowrap mt-6'>
                <div className='flex-1 font-sans flex-col accent-white rounded-xl relative overflow-hidden items-center '>
                    <img src={webp1} alt="Your Image" className="mt-4  white-shadow" />
                    <img src={webp5} alt="Your Image" className="mt-4  white-shadow" />
                    <img src={webp9} alt="Your Image" className="mt-4  white-shadow" />
                </div>
                <div className='flex-1 font-sans flex-col accent-white rounded-xl relative overflow-hidden items-center '>
                    <img src={webp2} alt="Your Image" className="mt-4  white-shadow" />
                    <img src={webp6} alt="Your Image" className="mt-4  white-shadow" />
                    <img src={webp10} alt="Your Image" className="mt-4  white-shadow" />
                </div>
                <div className='flex-1 font-sans flex-col accent-white rounded-xl relative overflow-hidden items-center '>
                    <img src={webp3} alt="Your Image" className="mt-4  white-shadow" />
                    <img src={webp7} alt="Your Image" className="mt-4  white-shadow" />
                </div>
                <div className='flex-1 font-sans flex-col accent-white rounded-xl relative overflow-hidden items-center '>
                    <img src={webp4} alt="Your Image" className="mt-4  white-shadow" />
                    <img src={webp8} alt="Your Image" className="mt-4  white-shadow" />
                </div>
            </div>
        </div>
    )
}

export default Model;