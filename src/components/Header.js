import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className={"bg-slate-200 flex justify-between px-10 py-2"}>
            <div className={"container"}>
                <h1> <Link to={"/"} className={"text-scale-500"}> CRUD redux</Link></h1>
            </div>
            <Link to={"/products/new"} className={"bg-blue-200 rounded-md p-2"}> Add product &#43;</Link>
        </nav>
    )
}
export default Header