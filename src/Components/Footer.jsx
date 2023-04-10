import React from "react";
import logoAluraflix from "/src/assets/img/Logo_Aluraflix_by_MundevUx.png";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className=" bg-cerulean-700 md:bg-midnight-950 py-4">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center md:justify-between md:items-center">
                <Link to="/">
                    <img src={logoAluraflix} alt="Logo Aluraflix" className="h-12 hidden md:block"/>
                </Link>
                <div className="w-full md:w-auto">
                    <Button children={"Nuevo video"} />
                </div>
            </div>
        </footer>
    );
}