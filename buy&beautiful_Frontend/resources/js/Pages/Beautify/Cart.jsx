import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import searchIcon from "../../../img/5.png";
import logo from "../../../img/logo.png";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]); // Initially empty cart

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <div className="bg-pink-50 font-sans min-h-screen">

            {/* Header */}
            <header className="bg-pink-500 text-white p-6">
                <div className="flex">
                    <h1 className="text-4xl font-bold">Carty CART!</h1>
                    <div className="flex mt-auto mb-auto ms-auto">
                        <div className="text-md mt-auto mb-auto ms-auto px-3 hover:text-pink-700 cursor-pointer">
                            <img src={searchIcon} alt="Search Icon" className="h-5 w-5 hover:brightness-50" />
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

            {/* Cart Items */}
            <main className="max-w-5xl mx-auto p-6">
                {cartItems.length > 0 ? (
                    <>
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center bg-white shadow-md rounded-lg p-4"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-20 w-20 rounded-md"
                                    />
                                    <div className="flex-1 px-4">
                                        <h2 className="text-lg font-semibold">
                                            {item.name}
                                        </h2>
                                        <p className="text-gray-600">
                                            Price: BDT {item.price}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="px-2">
                                            Quantity: {item.quantity}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold mb-4">
                                Order Summary
                            </h2>
                            <div className="flex justify-between">
                                <span>Total</span>
                                <span className="font-bold">
                                    BDT {calculateTotal()}
                                </span>
                            </div>
                            <button className="w-full mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600">
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-12">
                        <h2 className="text-lg font-semibold text-gray-700">
                            Your cart is empty.
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Browse products and add them to your cart!
                        </p>
                        <Link
                            onClick={() => (window.location.href = "/")}
                            className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-pink-500 text-white text-center p-4 mt-auto">
                <p>&copy; 2024 Developed by FM</p>
            </footer>
        </div>
    );
};

export default CartPage;
