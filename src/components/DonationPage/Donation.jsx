import { useState } from "react"

const Donation = ( { paymentPlan, 
                      setPaymentPlan, 
                      donationAmount, 
                      setDonationAmount, 

                      customAmount,
                      handleAmountChange,
                      handleCustomAmountChange,

                      handleDonationChange, 
                      handlePaymentPlanChange 
                    } ) => {


  return (
    <div className="grid grid-cols-4 gap-2 px-4 lg:px-6 py-4 border-2 rounded-lg hover:shadow-md bg-white">
              <p className="col-span-4 text-center font-montreal font-bold border-b-2 lg:mx-28">Donate to R.E.P.</p>

                <label className={`col-span-2 cursor-pointer 
                                  ${
                                    paymentPlan === 'once' ? 'bg-gray-900' : 'bg-gray-300'
                                  } 
                                  transition-colors duration-300 rounded-lg py-2 font-montreal text-white font-bold text-center text-lg mb-2`}>
                    <input 
                        type="radio" 
                        value="once" 
                        checked={paymentPlan === 'once'}
                        onChange={() => handlePaymentPlanChange('once')}
                        className="appearance-none" 
                    />
                    <span>Once</span>
                </label>

                <label className={`col-span-2 cursor-pointer 
                                  ${
                                    paymentPlan === 'monthly' ? 'bg-gray-900' : 'bg-gray-300'
                                  } 
                                  transition-colors duration-300 rounded-lg py-2 font-montreal text-white font-bold text-center text-lg mb-2`}>
                    <input 
                        type="radio" 
                        value="monthly" 
                        checked={paymentPlan === 'monthly'}
                        onChange={() => handlePaymentPlanChange('monthly')}
                        className="appearance-none" 
                    />
                    <span>Monthly</span>
                </label>
            
              {/* Donation amount options */}
              <label className={`col-span-1 py-2 px-2 rounded-lg focus:outline-none 
                                ${donationAmount === 10 ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500'}
                                transition-colors duration-300 font-montreal font-bold cursor-pointer text-center`}
              >
                <input 
                  type="radio" 
                  value={10} 
                  checked={donationAmount === 10}
                  onChange={() => handleAmountChange(10)}
                  className="appearance-none" 
                />
                <span>$10</span>
              </label>

              <label className={`col-span-1 py-2 px-2 rounded-lg focus:outline-none 
                                ${donationAmount === 20 ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500'}
                                transition-colors duration-300 font-montreal font-bold cursor-pointer text-center`
              }>
                <input 
                    type="radio" 
                    value={20} 
                    checked={donationAmount === 20}
                    onChange={() => handleAmountChange(20)}
                    className="appearance-none" 
                />
                <span>$20</span>
              </label>
              <label className={`col-span-1 py-2 px-2 rounded-lg focus:outline-none 
                                ${donationAmount === 50 ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500'}
                                transition-colors duration-300 font-montreal font-bold cursor-pointer text-center`
              }>
                <input 
                    type="radio" 
                    value={50} 
                    checked={donationAmount === 50}
                    onChange={() => handleAmountChange(50)}
                    className="appearance-none" 
                />
                <span>$50</span>
              </label>
              {/* Custom amount option */}
              <label className={`col-span-1 py-2 px-2 rounded-lg focus:outline-none 
                                ${customAmount === donationAmount.toString() ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}
                                transition-colors duration-300 font-montreal text-white font-bold cursor-pointer overflow-hidden`
              }>
                <input
                  type="number"
                  min="11"
                  className=" bg-transparent outline-none appearance-none ps-2.5 lg:ps-4"
                  placeholder="Other"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </label>
              <p className='text-sm font-montreal font-bold text-center text-gray-400 col-span-4'>Your support can make a difference.</p>

    </div>
  )
}

export default Donation;