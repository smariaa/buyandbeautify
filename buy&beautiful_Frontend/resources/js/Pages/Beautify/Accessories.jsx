import React from "react";
import { Link } from "@inertiajs/react";
import searchIcon from "../../../img/5.png";
import cartIcon from "../../../img/6.png";
import imggg1 from "../../../imggg/1.png"
import imggg2 from "../../../imggg/2.jpg"
import imggg3 from "../../../imggg/3.jpg"
import imggg4 from "../../../imggg/4.jpg"
import imggg5 from "../../../imggg/5.jpg"
import imggg6 from "../../../imggg/6.jpg"
import imggg7 from "../../../imggg/7.jpg"

const Welcome = () => {
    return (
        <div className="bg-pink-50 font-sans leading-normal tracking-normal flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-pink-500 text-white p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">ACCESSORIES</h1>
                    <div className="flex mt-auto mb-auto ms-auto">
                        <h4 className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer">
                            <img src={searchIcon} alt="Search Icon" className="h-5 w-5 hover:brightness-50" />
                        </h4>
                        <h4 className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer"
                            onClick={() => (window.location.href = "/beautify/cart")}>
                            <img src={cartIcon} alt="Cart Icon" className="h-7 w-7 hover:brightness-50" />
                        </h4>
                        <h4 className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer">
                            <Link
                                href={route('login')}
                            >
                                Log in
                            </Link></h4>
                        <h4 className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer">
                            <Link
                                href={route('register')}
                            >
                                Register
                            </Link></h4>
                        <h4 className="text-md mt-auto mb-auto ms-3 hover:text-pink-700 cursor-pointer"
                        onClick={() => (window.location.href = "/")}>Home</h4>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto p-6 space-y-12">
                {/* Unified Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {/* Product 1 */}
                    <div className="relative group">
                        <img src={imggg1} alt="Product 1" className="w-full rounded-lg shadow-md" />
                        <div className="text-center mt-3">
                            <p className="text-lg font-semibold">Product 1</p>
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

                    {/* Product 2 */}
                    <div className="relative group">
                        <img src={imggg2} alt="Product 2" className="w-full rounded-lg shadow-md" />
                        <div className="text-center mt-3">
                            <p className="text-lg font-semibold">Product 2</p>
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

                    {/* Product 3 */}
                    <div className="relative group">
                        <img src={imggg3} alt="Product 3" className="w-full rounded-lg shadow-md" />
                        <div className="text-center mt-3">
                            <p className="text-lg font-semibold">Product 3</p>
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

                    {/* Product 4 */}
                    <div className="relative group">
                        <img src={imggg4} alt="Product 4" className="w-full rounded-lg shadow-md" />
                        <div className="text-center mt-3">
                            <p className="text-lg font-semibold">Product 4</p>
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

                    {/* Product 5 */}
                    <div className="relative group">
                        <img src={imggg5} alt="Product 5" className="w-full rounded-lg shadow-md" />
                        <div className="text-center mt-3">
                            <p className="text-lg font-semibold">Product 5</p>
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

                    {/* Product 6 */}
                    <div className="relative group">
                        <img src={imggg6} alt="Product 6" className="w-full rounded-lg shadow-md" />
                        <div className="text-center mt-3">
                            <p className="text-lg font-semibold">Product 6</p>
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

                    {/* Product 7 */}
                    <div className="relative group">
                        <img src={imggg7} alt="Product 7" className="w-full rounded-lg shadow-md" />
                        <div className="text-center mt-3">
                            <p className="text-lg font-semibold">Product 7</p>
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
            </main>

            {/* Footer */}
            <footer className="bg-pink-500 text-white text-center p-4 mt-auto">
                <p>&copy; 2024 Developed by FM</p>
            </footer>
        </div>
    );
};

export default Welcome;
