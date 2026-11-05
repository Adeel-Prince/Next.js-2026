import style from "./service.module.css";

export const metadata = {
  title: "Service Page",
  description: "This is my service page",
  authors: [{ name: "Adeel Ahmad" }, { name: "Adii's Tech" }],
  keywords: ["nextjs", "reactjs", "fullstack"],
};
const Services = () => {
  return <h1 className={style.common_heading}>Welcome to Services Page.</h1>;
};

export default Services;
