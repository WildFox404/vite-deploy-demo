
import { useState, useEffect,useRef} from 'react';

const Myanime = (props) => {
    const { images } = props;
    const [isHovered, setIsHovered] = useState(false);
    const [displayData, setDisplayData] = useState([]);
    let banner = useRef();

    const handleHover = () => {
      setIsHovered(!isHovered);
      console.log("handleHover被启动了"+isHovered);
    };

    useEffect(()=>{
        let timer;
        let count = 0;
        
        if (!isHovered) {
            timer = setInterval(() => {
                // 添加新元素到列表末尾
                const newImage = images[count];
                count++;
                if(count>=images.length){
                    count = 0;
                }
                setDisplayData(prevData => {
                    const newData = [...prevData, newImage];
                    return newData.slice(1); // 移除开头的元素
                });
                console.log(banner.current.style)
            }, 2000); // 每隔2秒更新一次
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    },[isHovered])

    useEffect(()=>{
        //初始化让displayData先拥有一部分内容
        let newData = [];
        let i = 0;
        while (newData.length < 9) {
            const image = images[i % images.length];
            newData.push(image);
            i++;
        }
        setDisplayData(newData);

        return () => {
        };
    },[]);

    return (
        <div className='w-full mt-[220px] px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-4 overflow-x-hidden' style={{opacity:1,transform: 'none'}} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className='flex gap-4 flex-warp overflow-hidden transition-all' ref={banner}>
                {displayData.map((item,index) => (
                    <div key={index} className='group flex-1 font-sans rounded-xl relative min-w-[200px] max-w-[300px] '>
                        <div className='shadow-md px-4 py-8 w-full h-full relative top-0 left-0 transition-all group-hover:custom-3d-rotate'>
                            <img src={item.image1} alt=""></img>
                        </div>
                        <div className="px-4 py-8 w-full h-full absolute top-0 left-0 z-10 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-4 group-hover:scale-100">
                            <img src={item.image2} alt=""></img>
                        </div>
                        <div className="px-4 py-8 w-full h-full absolute top-0 left-0 z-20 transition-all group-hover:-translate-y-8 group-hover:scale-110">
                            <img src={item.image3} alt=""></img>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Myanime;