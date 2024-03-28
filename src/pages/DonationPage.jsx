import { useState } from "react"
import Donation from "../components/DonationPage/Donation"
import Payments from "../components/DonationPage/Payments";
import PersonalDetails from "../components/DonationPage/PersonalDetails";
import DonationPageFooter from "../components/DonationPage/DonationPageFooter";

const DonationPage = () => {
    const [paymentPlan, setPaymentPlan] = useState('once');
    const [donationAmount, setDonationAmount] = useState(0);
    const [customAmount, setCustomAmount] = useState('');
  
    const handleDonationChange = (amount) => {
      setDonationAmount(amount);
    };

    const handlePaymentPlanChange = (plan) => {
        setPaymentPlan(plan);
      };

      const handleAmountChange = (amount) => {
        // setDonationAmount(amount);
        setCustomAmount('');
        handleDonationChange(amount); // Call the function to update the donation amount
      };

      const handleCustomAmountChange = (event) => {
        const amount = parseInt(event.target.value);
        // setDonationAmount(amount);
        setCustomAmount(event.target.value);
        handleDonationChange(amount); // Call the function to update the donation amount
      };

  return (
    <div className=" bg-gray-50">
        <img src="rural_exosus_programme_cover.png" alt="" className="object-cover  w-full lg:h-44"/>

        <div className="grid lg:grid-cols-2 px-2 py-2 lg:py-4">
            <div className="lg:ml-14 lg:px-10">
                {/* Donation Type and Amount*/}
                <Donation 
                    paymentPlan={paymentPlan}
                    donationAmount={donationAmount}
                    customAmount={customAmount}
                    handleAmountChange={handleAmountChange}
                    handleCustomAmountChange={handleCustomAmountChange}
                    handleDonationChange={handleDonationChange}
                    handlePaymentPlanChange={handlePaymentPlanChange}

                />

                {/* Payment Options */}
                <Payments />                

                {/* Personal Details */}
                <PersonalDetails  
                                donationAmount={donationAmount} 
                                paymentPlan={paymentPlan} 
                />
            </div>


            <div className="lg:pr-24">
                <img src="Location.png" alt="" className="rounded-lg border-2 border-gray-200" />
                <p className="text-center text-5xl font-montreal font-bold mt-5 border-b-4 border-gray-900 text-gray-400 rounded">
                    Overview
                </p>
                <p className="font-montreal py-4 tracking-wider">
                    We seeks to provide Opportunities by improving the quality of life for the Women and the Youths in rural areas in Kenya through their empowerment and participation in economic and democratic Processes as well as in community and civic affairs. 
                </p>
                <p className="font-montreal py-4 tracking-wider">
                    We also advocates for Creation of a supportive social, cultural and economic Environment that will empower the youth to be active actors in national Development.
                </p>
            </div>
        </div>

        {/* Footer */}
        <DonationPageFooter />
    </div>
  )
}

export default DonationPage;