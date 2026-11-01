import Link from "next/link";

const About = async () =>{
    return (
        <>
        <h1>Welcome in About Page.</h1>
        <button>
            <Link href="/">Back To Home Page</Link>
        </button>
        </>
    );
};

export default About;