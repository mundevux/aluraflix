import React from "react";
import banner from "/src/assets/img/banner.png";

export default function Banner() {
    return (
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <img src={banner} alt="Banner" className="w-full" />
        </div>
    );
}