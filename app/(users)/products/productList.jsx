"use client";
import { useSearchParams } from "next/navigation";

const productList = () => {
    const searchParams = useSearchParams();
    const pages = searchParams.get("page");
    const category = searchParams.get("category");
    console.log("inside ", pages, category);

  return <><h1>Clinet - {category}</h1></>
}

export default productList;
