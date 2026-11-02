"use client";
const clientcomp = () =>{
    return(
        <>
        <h1>Client Comp</h1>
        <button
        className="bg-amber-400 text-black p-5 cursor-pointer"
        onClick={()=> alert("Hii")}
        >Click Me</button>
        </>
    )
}

export default clientcomp();