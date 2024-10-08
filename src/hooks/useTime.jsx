// import { useState, useEffect } from 'react';
//
// const useTimer = (initialTime) => {
//     const [time, setTime] = useState(initialTime);
//
//     useEffect(() => {
//         if (time <= 0) return;
//
//         const timerId = setInterval(() => {
//             setTime(prevTime => prevTime - 1000); // Decrease by 1000 ms (1 second)
//         }, 1000);
//
//         return () => clearInterval(timerId); // Cleanup on unmount
//     }, [time]);
//
//     return time
// };
//
// export default useTimer;
