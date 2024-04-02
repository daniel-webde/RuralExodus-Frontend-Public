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
      <p className="text-center font-montreal font-bold border-b-2 lg:mx-28">
        Payment Method
      </p>

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
            {/* <img src="mpesa.png" alt="mpesa" className="w-36"/> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 48 48"
            >
              <path
                fill="#aed580"
                d="M31.003,7.001l-0.001-5.5c0-0.828,0.672-1.5,1.5-1.5	c0.828,0,1.5,0.672,1.5,1.5v5.5H31.003z"
              ></path>
              <path
                fill="#aed580"
                d="M14.964,47.999h18.073c0.533,0,0.965-0.432,0.965-0.965V4.964c0-0.533-0.432-0.965-0.965-0.965	H14.964c-0.533,0-0.965,0.432-0.965,0.965v42.07C13.999,47.567,14.431,47.999,14.964,47.999z"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M17.739,29.001h12.524c0.962,0,1.741-0.78,1.741-1.741V10.743	c0-0.962-0.78-1.741-1.741-1.741H17.739c-0.962,0-1.741,0.78-1.741,1.741V27.26C15.997,28.222,16.777,29.001,17.739,29.001z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#9b2310"
                fill-rule="evenodd"
                d="M12.001,22.001	c3.643-0.7,5.865-2.448,7-5c1.135,2.552,3.357,4.3,7,5H12.001z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#e60023"
                fill-rule="evenodd"
                d="M12.001,22.001	c4.273,0.867,6.476,1,11,1c5.076,0,11.712-1.939,14-6l-9-4C24.039,18.139,21.863,22.001,12.001,22.001z"
                clip-rule="evenodd"
              ></path>
            </svg>
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
            {/* <img src="paypal.png" alt="paypal" className="w-40"/> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="70"
              height="70"
              viewBox="0 0 48 48"
            >
              <path
                fill="#1565C0"
                d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"
              ></path>
              <path
                fill="#039BE5"
                d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z"
              ></path>
              <path
                fill="#283593"
                d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z"
              ></path>
            </svg>
          </label>
        </div>
      </div>
      {showMpesaInput && (
        <>
          <label
            for="phoneInput"
            className="text-sm font-medium text-gray-900 "
          >
            Phone number:
          </label>
          <div className="relative">
            <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
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
          <label for="emailInput" className="text-sm font-medium text-gray-900">
            Your Email:
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
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
