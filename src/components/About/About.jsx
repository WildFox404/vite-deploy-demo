import qqImage from "assets/qqImage.jpg"
import wechatImage from "assets/wechatImage.jpg"

const heightStyle = {
    height: `calc(100vh - 65.6px)`,
};
const About = () => {

    return (
        <div className="w-full h-full flex bg-content-bg flex-nowrap flex-row ">
            <div className="flex-1 relative flex items-center justify-center flex-row" style={heightStyle}>
                <div className="flex flex-col items-center justify-center basis-1/2 max-w-[300px]">
                    <img src={qqImage} alt=""></img>
                </div>
                <div className="flex flex-col items-center justify-center basis-1/2 max-w-[300px]">
                    <img src={wechatImage} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default About;