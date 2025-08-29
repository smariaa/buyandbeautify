import img4 from "../../img//4.png";
import searchIcon from "../../img//5.png";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import { Link } from "@inertiajs/react";
import React from "react";
import cartIcon from "../../img/6.png";

const Welcome = () => {
    return (
        <div className="bg-pink-50 font-sans leading-normal tracking-normal flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-pink-500 text-white p-6">
                <div className="flex">
                    <h1 className="text-4xl font-bold">Welcome to buy&beautify!</h1>
                    <div className="flex mt-auto mb-auto ms-auto">
                        <div className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer">
                            <img src={searchIcon} alt="Search Icon" className="h-5 w-5 hover:brightness-50" />
                        </div>
                        <div className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer"
                            onClick={() => (window.location.href = "/beautify/cart")}>
                            <img src={cartIcon} alt="Cart Icon" className="h-7 w-7 hover:brightness-50" />
                        </div>
                        <div className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer">
                            <Link
                                href={route('login')}
                            >
                                Log in
                            </Link>
                        </div>
                        <div className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer">
                            <Link
                                href={route('register')}
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-pink-300 p-4 shadow-md">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

                    {/* Makeup */}
                    <div className="relative group">
                        <div
                            className="bg-pink-200 text-pink-900 font-semibold py-4 px-6 rounded shadow-lg hover:bg-pink-300 text-center cursor-pointer"
                            onClick={() => (window.location.href = "/beautify/makeup")}
                        >
                            Makeup
                        </div>
                        <div className="sidebar absolute hidden group-hover:block top-full left-0 w-full bg-white p-4 shadow-md z-10">
                            <h3 className="text-lg font-bold text-pink-600 mb-4">Categories</h3>
                            <ul className="space-y-4">
                                <li><a onClick={() => (window.location.href = "/beautify/eyes")} className="text-pink-500 hover:underline cursor-pointer">Eyes</a></li>
                                <li><a onClick={() => (window.location.href = "/beautify/face")} className="text-pink-500 hover:underline cursor-pointer">Face</a></li>
                                <li><a onClick={() => (window.location.href = "/beautify/lips")} className="text-pink-500 hover:underline cursor-pointer">Lips</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Skincare */}
                    <div>
                        <a
                            onClick={() => (window.location.href = "/beautify/skincare")}
                            className="bg-pink-200 text-pink-900 font-semibold py-4 px-6 rounded shadow-lg hover:bg-pink-300 text-center block cursor-pointer"
                        >
                            Skincare
                        </a>
                    </div>

                    {/* Organic Treatment */}
                    <div>
                        <a
                            onClick={() => (window.location.href = "/beautify/organictreatment")}
                            className="bg-pink-200 text-pink-900 font-semibold py-4 px-6 rounded shadow-lg hover:bg-pink-300 text-center block cursor-pointer"
                        >
                            Organic Treatment
                        </a>
                    </div>

                    {/* Accessories */}
                    <div>
                        <a
                            onClick={() => (window.location.href = "/beautify/accessories")}
                            className="bg-pink-200 text-pink-900 font-semibold py-4 px-6 rounded shadow-lg hover:bg-pink-300 text-center block cursor-pointer"
                        >
                            Accessories
                        </a>
                    </div>

                </div>
            </nav>

            {/* Brands Section */}
            <section className="max-w-6xl mx-auto p-6">
                <h2 className="text-3xl font-semibold text-pink-600 mt-12 mb-6">
                    Explore Our Brands
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {/* Fentybeauty */}
                    <div className="relative brand-container">
                        <div
                            onClick={() => (window.location.href = "/beautify/fentybeauty")}
                            className="bg-pink-200 text-pink-900 font-semibold py-4 px-6 rounded shadow-lg hover:bg-pink-300 text-center cursor-pointer"
                        >
                            <img src={img1} alt="Fenty Beauty" className="cursor-pointer" />
                        </div>
                    </div>

                    {/* Nars */}
                    <div className="relative brand-container">
                        <div
                            onClick={() => (window.location.href = "/beautify/nars")}
                            className="bg-pink-200 text-pink-900 font-semibold py-4 px-6 rounded shadow-lg hover:bg-pink-300 text-center cursor-pointer"
                        >
                            <img src={img2} alt="Nars" className="cursor-pointer" />
                        </div>
                    </div>

                    {/* Mac */}
                    <div className="relative brand-container">
                        <div
                            onClick={() => (window.location.href = "/beautify/mac")}
                            className="bg-pink-200 text-pink-900 font-semibold py-4 px-6 rounded shadow-lg hover:bg-pink-300 text-center cursor-pointer"
                        >
                            <img src={img3} alt="Mac" className="cursor-pointer" />
                        </div>
                    </div>

                    {/* Maybelline */}
                    <div className="relative brand-container">
                        <div
                            onClick={() => (window.location.href = "/beautify/maybelline")}
                            className="bg-pink-200 text-pink-900 font-semibold py-4 px-6 rounded shadow-lg hover:bg-pink-300 text-center cursor-pointer"
                        >
                            <img src={img4} alt="Maybelline" className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us */}
            <section className="max-w-6xl mx-auto p-6 mt-12 mb-8">
                <h2 className="text-3xl font-semibold text-pink-600 mb-4">About Us</h2>
                <p className="text-gray-700 text-lg">
                    "buy&beautify" a modernized beauty store for every existing generation! We bring you the best in makeup, skincare, organic treatments, and accessories from top brands to elevate your beauty routine.
                </p>
            </section>

            {/* Footer */}
            <footer className="bg-pink-500 text-white text-center p-4 mt-auto">
                <p>&copy; 2024 Developed by FM</p>
            </footer>
        </div>
    );
};

export default Welcome;
