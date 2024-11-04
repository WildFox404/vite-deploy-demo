import {useEffect, useRef} from "react";
import AnimatedFadeIn from "../../Util/AnimatedFadeIn";
import Logo from '../../../assets/logo.png'; // 确保导入你的 logo 图片
import LogoTextLight from '../../../assets/LogoTextLight.png'; // 确保导入你的 logo 文本图片
const Homeheader = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null); // 添加对父容器的引用

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // 设置 canvas 尺寸
    function setCanvasSize() {
      canvas.width = containerRef.current.clientWidth;
      canvas.height = containerRef.current.clientHeight;
    }

    // 创建星星
    const stars = [];
    function createStars() {
      for (let i = 0; i < 300; i++) {  // 增加星星数量
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,  // 稍微增加星星大小
          speed: Math.random() * 0.3 + 0.1  // 稍微加度
        });
      }
    }

    // 绘制和更新星星
    function drawStars() {
      // 设置黑色背景
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 绘制星星
      ctx.fillStyle = 'white';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // 更新位置
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
        }
      });
    }

    // 动画循环
    function animate() {
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    }

    // 初始化
    setCanvasSize();
    createStars();
    animate();

    // 窗口大小改变时重置 canvas 尺寸
    window.addEventListener('resize', setCanvasSize);

    // 清理数
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);

    };
  }, []);
    return (
        <div ref={containerRef} className="min-h-[450px] flex justify-center items-center">
          
          <div className="absolute flex flex-col items-center justify-center text-center"> {/* 使用绝对定位将其放置在画布上方 */}
            <AnimatedFadeIn>
              <img src={Logo} alt="Logo" className="h-28" /> {/* 设置 logo 高度 */}
            </AnimatedFadeIn>
            <AnimatedFadeIn>
              <img src={LogoTextLight} alt="Logo Text" className="h-14 mt-2" /> {/* 设置 logo 文本高度，并添加上边距 */}
            </AnimatedFadeIn>
          </div>
          <canvas ref={canvasRef}></canvas>

        </div>
    )
}

export default Homeheader;