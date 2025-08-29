import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "@inertiajs/react";
import searchIcon from "../../../img/5.png";
import cartIcon from "../../../img/6.png";
import imgg1 from "../../../imgg/1.jpeg"
import imgg2 from "../../../imgg/2.jpeg"
import imgg8 from "../../../imgg/8.jpeg"
import imgg14 from "../../../imgg/14.jpeg"
import imgg15 from "../../../imgg/15.jpeg"
import imgg19 from "../../../imgg/19.jpeg"
import imgg20 from "../../../imgg/20.jpeg"

const Welcome = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetching products from the backend (Laravel API)
        fetch('/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);





    return (









        <div className="flex flex-col min-h-screen font-sans leading-normal tracking-normal bg-pink-50">
            {/* Header */}
            <header className="p-4 text-white bg-pink-500">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">MAKEUP</h1>
                    <div className="flex mt-auto mb-auto ms-auto">
                        <h4 className="px-3 mt-auto mb-auto cursor-pointer text-md ms-auto hover:text-pink-700">
                            <img src={searchIcon} alt="Search Icon" className="w-5 h-5 hover:brightness-50" />
                        </h4>
                        <h4 className="px-3 mt-auto mb-auto cursor-pointer text-md ms-auto hover:text-pink-700"
                            onClick={() => (window.location.href = "/beautify/cart")}>
                            <img src={cartIcon} alt="Cart Icon" className="h-7 w-7 hover:brightness-50" />
                        </h4>
                        <h4 className="px-3 mt-auto mb-auto cursor-pointer text-md ms-auto hover:text-pink-700">
                            <Link
                                href={route('login')}
                            >
                                Log in
                            </Link></h4>
                        <h4 className="px-3 mt-auto mb-auto cursor-pointer text-md ms-auto hover:text-pink-700">
                            <Link
                                href={route('register')}
                            >
                                Register
                            </Link></h4>
                        <h4 className="mt-auto mb-auto cursor-pointer text-md ms-3 hover:text-pink-700"
                            onClick={() => (window.location.href = "/")}>
                            Home</h4>
                    </div>
                </div>
            </header>
               Main Content
               <main className="max-w-5xl p-6 mx-auto space-y-12">
                {/* Unified Product Grid */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                    {products.map((product) => (
                        <div key={product.id} className="relative group">
                            <img src={product.image_url} alt={product.name} className="w-full rounded-lg shadow-md" />
                            <div className="mt-3 text-center">
                                <p className="text-lg font-semibold">{product.name}</p>
                                <p className="text-sm text-gray-500">BDT {product.price}</p>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                                <button className="px-4 py-2 font-semibold text-pink-500 bg-white rounded-md hover:bg-pink-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 8m12-8l2 8m-6-8v2a2 2 0 01-2 2H7m10 0a2 2 0 002-2v-2M9 21h6" />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>


            {/* Main Content */}
        
            {/* Footer */}
            <footer className="p-4 mt-auto text-center text-white bg-pink-500">
                <p>&copy; 2024 Developed by FM</p>
            </footer>
        </div>
    );
};

export default Welcome;
