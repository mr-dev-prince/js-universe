// import { useEffect, useRef, useState } from "react";
// import { FaSpinner } from "react-icons/fa";

// const Home = () => {
//   // useState
//   // const [loading, setLoading] = useState(false);
//   // const [data, setData] = useState(null);

//   // useRef -> Reference

//   // usage -> animation
//   const parentRef = useRef();

//   // console.log("this is ref--> ", parentRef.current.classList);

//   // const handleClick = () => {
//   //   const child = document.createElement("p");
//   //   child.innerText = "Prince";

//   //   parentRef.current.appendChild(child);
//   // };

//   const handleClick = () => {
//     const classArr = parentRef.current.classList
//     classArr.remove("right-24")
//     classArr.add("left-24")

//   };

//   // useCallback -> cache results so that you don't have to calculate everytime
//   // useMemo -> 

//   // const fetchData = async () => {
//   //   console.log("This function was called");
//   //   setLoading((prev) => !prev);
//   //   setTimeout(() => {
//   //     setData({
//   //       name: "Prince",
//   //       college: "Ies colleg of technology",
//   //     });
//   //     setLoading(false);
//   //   }, 1000);
//   // };

//   // useEffect
//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   // if (loading) {
//   //   return (
//   //     <div className="h-screen flex justify-center items-center">
//   //       <FaSpinner size={24} className="animate-spin" />
//   //     </div>
//   //   );
//   // }

//   return (
//     <div className="bg-blue-400 h-screen flex flex-col justify-center items-center gap-4">
//       <button
//         onClick={handleClick}
//         className="bg-white p-3 rounded-xl cursor-pointer"
//       >
//         Click to add Name
//       </button>

//       <div ref={parentRef} className="border h-[200px] w-[400px] absolute top-36 right-24">
//         <p>This is parent div</p>
//       </div>
//     </div>
//   );
// };

// export default Home;
