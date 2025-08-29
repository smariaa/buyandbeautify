import searchIcon from "../../../img/5.png";
import imga from "../../../img/a.png";
import imgb from "../../../img/b.png";
import imgc from "../../../img/c.png";
import imgd from "../../../img/d.png";
import imge from "../../../img/e.png";
import React from "react";
import { Link } from "@inertiajs/react";
import cartIcon from "../../../img/6.png";


const Welcome = () => {
    return (
        <div className="bg-pink-50 font-sans leading-normal tracking-normal flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-pink-500 text-white p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">MAC</h1>
                    <div className="flex mt-auto mb-auto ms-auto">
                        <h4 className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer">
                            <img src={searchIcon} alt="Search Icon" className="h-5 w-5" />
                        </h4>
                        <h4 className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer"
                        onClick={() => (window.location.href = "/beautify/cart")}>
                            <img src={cartIcon} alt="Cart Icon" className="h-7 w-7" />
                        </h4>
                        <h4
                            className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer">
                            <Link
                                href={route('login')}
                            >
                                Log in
                            </Link>
                        </h4>
                        <h4
                            className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer">
                            <Link
                                href={route('register')}
                            >
                                Register
                            </Link>
                        </h4>
                        <h4 className="text-md mt-auto mb-auto ms-3 hover:text-pink-700 cursor-pointer"
                            onClick={() => (window.location.href = "/")}
                        >Home</h4>
                    </div>
                </div>
            </header>

            {/* Product Sections */}
            <main className="max-w-5xl mx-auto p-6 space-y-12">
                {/* Makeup Section */}
                <section>
                    <h2 className="text-3xl font-semibold text-pink-600 mb-6">Makeup</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        <div className="relative group">
                            <img src={imga} alt="Product 1" className="w-full rounded-lg shadow-md" />
                            <div className="text-center mt-3">
                                <p className="text-lg font-semibold">Combo Set 1</p>
                                <p className="text-gray-500 text-sm">BDT 0</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-white text-pink-500 px-4 py-2 rounded-md font-semibold hover:bg-pink-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 8m12-8l2 8m-6-8v2a2 2 0 01-2 2H7m10 0a2 2 0 002-2v-2M9 21h6" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        <div className="relative group">
                            <img src={imge} alt="Product 2" className="w-full rounded-lg shadow-md" />
                            <div className="text-center mt-3">
                                <p className="text-lg font-semibold">Combo Set 2</p>
                                <p className="text-gray-500 text-sm">BDT 0</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-white text-pink-500 px-4 py-2 rounded-md font-semibold hover:bg-pink-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 8m12-8l2 8m-6-8v2a2 2 0 01-2 2H7m10 0a2 2 0 002-2v-2M9 21h6" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skincare Section */}
                <section>
                    <h2 className="text-3xl font-semibold text-pink-600 mb-6">Skincare</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        <div className="relative group">
                            <img src={imgb} alt="Product 1" className="w-full rounded-lg shadow-md" />
                            <div className="text-center mt-3">
                                <p className="text-lg font-semibold">Moisturizer Gift Set</p>
                                <p className="text-gray-500 text-sm">BDT 0</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-white text-pink-500 px-4 py-2 rounded-md font-semibold hover:bg-pink-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 8m12-8l2 8m-6-8v2a2 2 0 01-2 2H7m10 0a2 2 0 002-2v-2M9 21h6" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Organic Treatment Section */}
                <section>
                    <h2 className="text-3xl font-semibold text-pink-600 mb-6">Organic Treatment</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        <div className="relative group">
                            <img src={imgc} alt="Product 1" className="w-full rounded-lg shadow-md" />
                            <div className="text-center mt-3">
                                <p className="text-lg font-semibold">Hair Mask</p>
                                <p className="text-gray-500 text-sm">BDT 0</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-white text-pink-500 px-4 py-2 rounded-md font-semibold hover:bg-pink-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 8m12-8l2 8m-6-8v2a2 2 0 01-2 2H7m10 0a2 2 0 002-2v-2M9 21h6" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accessories Section */}
                <section>
                    <h2 className="text-3xl font-semibold text-pink-600 mb-6">Accessories</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        <div className="relative group">
                            <img src={imgd} alt="Product 1" className="w-full rounded-lg shadow-md" />
                            <div className="text-center mt-3">
                                <p className="text-lg font-semibold">Hair Styling Set</p>
                                <p className="text-gray-500 text-sm">BDT 0</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-white text-pink-500 px-4 py-2 rounded-md font-semibold hover:bg-pink-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 8m12-8l2 8m-6-8v2a2 2 0 01-2 2H7m10 0a2 2 0 002-2v-2M9 21h6" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-pink-500 text-white text-center p-4 mt-auto">
                <p>&copy; 2024 Developed by FM</p>
            </footer>
        </div>
    );
};

export default Welcome;
