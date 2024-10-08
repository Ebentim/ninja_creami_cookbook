// import useTimer from "../hooks/useTime.jsx";
//
// export const Timer = () => {
//     const time = useTimer()
//     const formatTime = (time) => {
//         const seconds = Math.floor((time / 1000) % 60);
//         const minutes = Math.floor((time / (1000 * 60)) % 60);
//         const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
//
//         return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//     };
//
//     return (
//         <div>
//             <span>{formatTime(time)}</span>
//         </div>
//     );
// }
