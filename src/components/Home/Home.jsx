import image1 from "assets/image/01.png"
import image2 from "assets/image/02.png"
import image3 from "assets/image/03.png"
import image4 from "assets/image/04.png"
import image5 from "assets/image/text-1.png"
import image6 from "assets/image/text-2.png"
import image7 from "assets/image/1.jpg"
import image8 from "assets/image/3.png"
import image9 from "assets/image/4.png"
import image10 from "assets/image/10.jpg"
import image11 from "assets/image/12.png"
import image12 from "assets/image/13.png"
import image13 from "assets/image/21.jpg"
import image14 from "assets/image/20.png"
import image15 from "assets/image/21.png"
import Homeheader from './Homeheader/Homeheader';
import Myskill from './Myskill/Myskill';
import AnimatedFadeIn from '../Util/AnimatedFadeIn';
import Mygame from './Mygame/Mygame';
import Myanime from './Myanime/Myanime';
import Mylike from './Mylike/Mylike';
const Home = () => {

    const images = [
        { image1: image1, image2: image2, image3: image5 },
        { image1: image3, image2: image4, image3: image6 },
        { image1: image7, image2: image8, image3: image9 },
        { image1: image10, image2: image11, image3: image12 },
        { image1: image13, image2: image14, image3: image15 }
    ];
    return (
        <div className='bg-custom-bg w-full h-600 relative'>
            <Homeheader/>
            <div className='w-full bg-content-bg border-t-4 border-custom-text'>
                <AnimatedFadeIn>
                    <Myskill/>
                </AnimatedFadeIn>
                <AnimatedFadeIn>
                    <Mygame/>
                </AnimatedFadeIn>
                <AnimatedFadeIn>
                    <Myanime images={images}/>
                </AnimatedFadeIn>
                <AnimatedFadeIn>
                    <Mylike/>
                </AnimatedFadeIn>
            </div>
        </div>
    )
}

export default Home;