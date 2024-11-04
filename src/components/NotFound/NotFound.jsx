import { useEffect, useRef, useState } from 'react';
import {useDispatch,useSelector } from 'react-redux'
import { change } from '../../stores/styleSlice';
import Logo from 'assets/logo.png';
import LogoTextDark from 'assets/logoTextDark.png';
import LogoTextLight from 'assets/logoTextLight.png';
function NotFound() {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.style.value);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'i am lazydog';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function getRandomBrightColor() {
      const h = Math.random() * 360;
      const s = 100;
      const l = Math.random() * 20 + 30; // 30% 到 50% 的亮度
      return `hsl(${h}, ${s}%, ${l}%)`;
    }

    function draw() {
      // 根据当前主题设置背景颜色
      ctx.fillStyle = isDarkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Segoe UI", Arial, sans-serif`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillStyle = getRandomBrightColor();
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    // 初始化背景
    ctx.fillStyle = isDarkMode ? 'black' : 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, [isDarkMode]);  // 添加 isDarkMode 作为依赖项

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
      
      {/* 主题切换按钮 */}
      <button 
        onClick={()=>{dispatch(change())}} 
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px',
          borderRadius: '50%',
          border: 'none',
          background: isDarkMode ? '#fff' : '#333',
          color: isDarkMode ? '#333' : '#fff',
          cursor: 'pointer'
        }}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      {/* 其余的内容保持不变 */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1
      }}>
        <img src={Logo} alt="Logo" style={{maxWidth: '20%' }} />
        <img src={isDarkMode?LogoTextLight:LogoTextDark} alt="Logo Text" style={{ maxWidth: '50%' }} />
        <div style={{ display: 'flex', gap: '20px',marginTop: '20px'}}>
          <a href="https://github.com/WildFox404" target="_blank" rel="noopener noreferrer" style={{
            padding: '10px 20px',
            backgroundColor: '#44ffcc',
            color: '#000',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            GitHub
          </a>
          <a href="/home" style={{
            padding: '10px 20px',
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            border: '2px solid #000',  // 添加黑色边框
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',  // 可选: 添加轻微阴影效果
            transition: 'all 0.3s ease'  // 可选: 添加过渡效果
          }}>
            Get Started
          </a>
        </div>
      </div>
      
      {/* GitHub 角标 */}
      <a href="https://github.com/WildFox404" className="github-corner" style={{position: 'absolute', zIndex: 999}} aria-label="View source on GitHub">
        <svg width="80" height="80" viewBox="0 0 250 250" style={{fill:'#44ffcc', color:'#fff', position: 'absolute', top: 0, border: 0, left: 0, transform: 'scale(-1, 1)'}} aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin: '130px 106px'}} className="octo-arm"></path>
          <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
        </svg>
      </a>
      <style>{`
        .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}
        @keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}
        @media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
      `}</style>
    </div>
  );
}

export default NotFound;