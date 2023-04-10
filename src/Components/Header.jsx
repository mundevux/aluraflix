import React from "react";
import logoAluraflix from "/src/assets/img/Logo_Aluraflix_by_MundevUx.png";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-midnight-950">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center md:justify-between md:items-center">
                <Link to="/">
                    <img src={logoAluraflix} alt="Logo Aluraflix" className="h-12"/>
                </Link>
                <div className=" hidden md:block">
                    <Button children={"Nuevo video"} />
                </div>
            </div>
        </header>
    );
}