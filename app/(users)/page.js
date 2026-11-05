"use client";
import "../globals.css";
const Home = () => {
  return (
    <>
      <h1 className="font-roboto">Welcome to the Next.js World!</h1>
      <button
        className="bg-amber-400 text-black p-5 cursor-pointer"
        onClick={() => alert("Hii")}
      >
        Click Me
      </button>
    </>
  );
};

export default Home;
