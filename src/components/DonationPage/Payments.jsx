import React, { useState } from "react";

const Payments = () => {
    const [showMpesaInput, setShowMpesaInput] = useState(false);
    const [showPaypalInput, setShowPaypalInput] = useState(false);

    const handlePaymentChange = (e) => {
        const selectedPaymentMethod = e.target.value;
        setShowMpesaInput(selectedPaymentMethod === "M-Pesa");
        setShowPaypalInput(selectedPaymentMethod === "PayPal");
    };

    return (
            <div className="px-4 lg:px-6 py-4 border-2 my-4 rounded-lg hover:shadow-md bg-white">
                <p className="text-center font-montreal font-bold border-b-2 lg:mx-28">Payment Method</p>

                <div className="flex justify-around">
                {/* M-Pesa */}
                <div className="">
                    <label className="cursor-pointer">
                        <input 
                            type="radio" 
                            name="payment"
                            value="M-Pesa"
                            className="appearance-none"
                            onChange={handlePaymentChange}
                        />
                        <img src="mpesa.png" alt="mpesa" className="w-36"/>
                    </label>
                </div>

                {/* PayPal */}
                <div className="">
                    <label className="cursor-pointer">
                        <input 
                            type="radio" 
                            name="payment"
                            value="PayPal"
                            className="appearance-none"
                            onChange={handlePaymentChange}
                        />
                        <img src="paypal.png" alt="paypal" className="w-40"/>
                    </label>
                </div>
            </div>
                    {showMpesaInput && (
                        <>
                            <label for="phoneInput" className="text-sm font-medium text-gray-900 ">Phone number:</label>
                            <div className="relative">
                                <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                                    </svg>
                                </div>
                                <input 
                                    type="tel" 
                                    id="phoneInput"  
                                    className="bg-gray-900 sm:bg-white border border-gray-300 text-white sm:text-gray-900 focus:ring-blue-500 sm:focus:ring-gray-900 focus:border-blue-500 sm:focus:border-gray-900 rounded-lg block w-full ps-10 p-2.5  placeholder-gray-400 mb-6" 
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                                    placeholder="123-456-7890" 
                                    required 
                                />
                            </div>
                        </>
                    )}
                    {showPaypalInput && (
                        <>
                            <label for="emailInput" className="text-sm font-medium text-gray-900">Your Email:</label>
                            <div className="relative mb-6">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                </svg>
                            </div>
                            <input 
                                type="email" 
                                id="emailInput" 
                                className="bg-gray-900 sm:bg-white border border-gray-300 text-white sm:text-gray-900 rounded-lg w-full ps-10 p-2.5" 
                                placeholder="name@flowbite.com"
                                required
                            />
                            </div>
                        </>
                    )}
            </div>
    );
};

export default Payments;
