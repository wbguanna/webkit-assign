// import { useEffect, useRef, useState } from 'react';

// const maxWidth = 4571;
// const viewWidth = 300;
// // const moveStraight = () => {
// // setInterval(()=>{
// // setMapX(mapX - 10);
// // })
// // };
// const distancePerTick = 100;
// const tick = 100;

// const MiniSlide = () => {
//   const [mapX, setMapX] = useState(0);
//   const [isStart, setIsStart] = useState(false);
//   const slide = useRef();

//   useEffect(() => {
//     if (!isStart) return;
//     if (mapX < maxWidth - viewWidth) return;
//     setTimeout(() => {
//       moveStraight();
//     }, tick);
//   }, [mapX, isStart]);

//   const moveStraight = () => {
//     if (slide.current.posX > maxWidth - viewWidth) {
//       // todo? : 화면을 멈추거나 다음으로 넘어가게 만들기?
//       setMapX(0); // 먼저 첫 화면으로
//       return;
//     }
//     slide.current.posX = mapX + distancePerTick + 'px';
//     console.log('moveStraight');
//   };

//   const toggleStart = (e) => {
//     e.preventDefault();
//     setIsStart(!isStart);
//   };

//   return (
//     <div className="header-bg">
//       <img src="images/img_headerBg.gif" alt="글자로 대신" ref={slide}></img>
//       <button onClick={toggleStart}>시작</button>
//     </div>
//   );
// };

// export default MiniSlide;

import { useEffect, useRef, useState } from 'react';

const maxWidth = 4571;
const viewWidth = 900;
const defaultPosX = -200;
const distancePerTick = 1;
const tick = 25;

const MiniSlide = () => {
  const [mapX, setMapX] = useState(defaultPosX);
  const [isStart, setIsStart] = useState(false);
  const slide = useRef();

  useEffect(() => {
    if (!isStart) return;

    if (mapX >= 100) {
      setIsStart(false);
      setMapX(0);
    }
    const timer = setTimeout(() => {
      setMapX((prevMapX) => prevMapX + distancePerTick);
    }, tick);

    return () => clearTimeout(timer); // cleanup을 통해 타이머 제거
  }, [mapX, isStart]);

  useEffect(() => {
    slide.current.style.transform = `translateX(-${mapX}%) scale(3)`;
  }, [mapX]);

  const toggleStart = (e) => {
    e.preventDefault();
    setIsStart(!isStart);
  };

  const reset = (e) => {
    e.preventDefault();
    setIsStart(false);
    setMapX(defaultPosX);
  };

  return (
    <div className="header-bg">
      <img src="images/_headerBG_extended.png" alt="글자로 대신" ref={slide} />
      <button onClick={toggleStart}>{isStart ? '멈춤' : '시작'}</button>
      <button onClick={reset}>초기화</button>
    </div>
  );
};

export default MiniSlide;
