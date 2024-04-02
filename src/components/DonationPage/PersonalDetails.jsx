import React, { Fragment, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios';
const PersonalDetails = ({ donationAmount, paymentPlan, setDonationAmount }) => {
  const [success, setSuccess] = useState(null);

  // const [formData, setFormData] = useState({
  //   // identity: '',
  //   email: '',
  //   paymentPlan: paymentPlan,
  //   donationAmount: donationAmount
  // });

  // yup validation
  const validationSchema = yup.object({
    firstname: yup.string().min(3).required(),
    lastname: yup.string().min(3).required(),
    companyName: yup.string().min(2).required(),
    trustName: yup.string().min(2).required(),
    email: yup.string().email("Please enter a valid email").required()
  })

  // const  validationSchema = yup.object().shape({
  //   firstname: yup.string().min(3).when('identity', {
  //     is: 0, // Identity value for individual
  //     then: yup.string().required(),
  //   }),
  //   lastname: yup.string().min(3).when('identity', {
  //     is: 0,
  //     then: yup.string().required(),
  //   }),
  //   companyName: yup.string().min(2).when('identity', {
  //     is: 1,
  //     then: yup.string().required(),
  //   }),
  //   trustName: yup.string().min(2).when('identity', {
  //     is: 2,
  //     then: yup.string().required(),
  //   }),
  //   email: yup.string().email("Please enter a valid email").required()
  // })

  // Formik onSubmit
  const onSubmit = async (values) => {
    // alert(JSON.stringify(values));
    try{
      await axios.post('http://localhost:5000/api/submit', values);
      // await axios.post('http://localhost:5000/api/submit', {
      //   method: 'post',
      //   header: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(values)
      // })

      // Handle success
      setSuccess(Response.values.message);
    } catch (error) {
      console.log(error)
      // console.log("error")
    }
  };

  // Formik form submision
  const Formik = useFormik({
    initialValues: { 
      firstname: "", 
      lastname: "", 
      companyName: "", 
      trustName: "", 
      email: "", 
      paymentPlan: paymentPlan, 
      donationAmount: donationAmount,
      identity: 0 // Set the default value of identity here 
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  })


  useEffect(() => {
    Formik.setValues(prevValues => ({
      ...prevValues,
      paymentPlan: paymentPlan,
      donationAmount: donationAmount
    }));
  }, [donationAmount, paymentPlan]);

  // const onChangeHandler = (event) => {
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [event.target.name]: event.target.value
  //   }));
  // };




  const [identity, setIdentity] = useState(0); // Default to individual
  const handleIdentityChange = (event) => {
    setIdentity(parseInt(event.target.value));
  };



  return (
    <div className="flex flex-col px-4 lg:px-6 py-4 border-2 my-4 rounded-lg hover:shadow-md bg-white">
      <h2 className="text-center font-montreal font-bold border-b-2 lg:mx-28">Personal Details</h2>

<form className=" grid grid-cols-1" onSubmit={Formik.handleSubmit}>
      <label className="text-sm font-montreal text-gray-500">I am</label>
      <select
        className="rounded-lg text-lg shadow-md ps-4 py-1 text-slate-900 font-montreal text-center"
        id="identity"
        value={identity}
        onChange={handleIdentityChange}
      >
        <option value={0}>an Individual</option>
        <option value={1}>a company or organisation</option>
        <option value={2}>a foundation or trust</option>
      </select>

      {identity === 0 && (
        <Fragment>
          <label className="text-sm font-montreal text-gray-500">First Name</label>
          <input 
            type="text" 
            name="firstname" 
            id="firstname" 
            className ={`rounded-lg text-lg shadow-md text-center focus:outline-none py-1 text-slate-900 font-montreal ${ 
              Formik.touched.firstname && Formik.errors.firstname ? "border border-red-600" : ""
            }` }           
             // onChange={onChangeHandler}
            onChange={Formik.handleChange}
            value={Formik.values.firstname}
            onBlur={Formik.handleBlur}
          />
          {/* input error message for first name */}
          <p className= "text-xs text-red-600 text-center">{ Formik.touched.firstname && Formik.errors.firstname ? Formik.errors.firstname : ""}</p>


          <label className="text-sm font-montreal text-gray-500">Last Name</label>
          <input 
            type="text" 
            name="lastname" 
            id="lastname" 
            className ={`rounded-lg text-lg shadow-md text-center focus:outline-none py-1 text-slate-900 font-montreal ${ 
              Formik.touched.lastname && Formik.errors.lastname ? "border border-red-600" : ""
            }` } 
                        // onChange={onChangeHandler}
            onChange={Formik.handleChange}
            value={Formik.values.lastname}
            onBlur={Formik.handleBlur}
          />
          {/* input error message for last name */}
          <p className= "text-xs text-red-600 text-center">{ Formik.touched.lastname && Formik.errors.lastname ? Formik.errors.lastname : ""}</p>
        </Fragment>
      )}

      {identity === 1 && (
        <Fragment>
          <label className="text-sm font-montreal text-gray-500">Company/Organisation name:</label>
          <input 
            type="text" 
            name="companyName" 
            id="companyName" 
            className ={`rounded-lg text-lg shadow-md text-center focus:outline-none py-1 text-slate-900 font-montreal ${ 
              Formik.touched.companyName && Formik.errors.companyName ? "border border-red-600" : ""
            }` }           
            // onChange={onChangeHandler}
            onChange={Formik.handleChange}
            value={Formik.values.companyName}
            onBlur={Formik.handleBlur}
          />
          {/* input error message for first name */}
          <p className= "text-xs text-red-600 text-center">{ Formik.touched.companyName && Formik.errors.companyName ? Formik.errors.companyName : ""}</p>
        </Fragment>
      )}

      {identity === 2 && (
        <Fragment>
          <label className="text-sm font-montreal text-gray-500">Foundation/Trust name:</label>
          <input 
            type="text" 
            name="trustName" 
            id="trustName" 
            className ={`rounded-lg text-lg shadow-md text-center focus:outline-none py-1 text-slate-900 font-montreal ${ 
              Formik.touched.trustName && Formik.errors.trustName ? "border border-red-600" : ""
            }` } 
            // onChange={onChangeHandler}
            onChange={Formik.handleChange}
            value={Formik.values.trustName}
            onBlur={Formik.handleBlur}
          />
          {/* input error message for first name */}
          <p className= "text-xs text-red-600 text-center">{ Formik.touched.trustName && Formik.errors.trustName ? Formik.errors.trustName : ""}</p>
        </Fragment>
      )}

      <label className="text-sm font-montreal text-gray-500">Email</label>
      <input 
        type="email" 
        name="email" 
        id="email" 
        className ={`rounded-lg text-lg shadow-md text-center focus:outline-none py-1 text-slate-900 font-montreal ${ 
          Formik.touched.email && Formik.errors.email ? "border border-red-600" : ""
        }` }
        // onChange={onChangeHandler}
        onChange={Formik.handleChange}
        value={Formik.values.email}
        onBlur={Formik.handleBlur}
      />
      {/* input error message for email */}
      <p className=" text-xs text-red-600 text-center">{ Formik.touched.email && Formik.errors.email ? Formik.errors.email : "" }</p>

      <p className="text-xs font-montreal py-2 text-center sm:px-14">
        We process your personal data in accordance with our Company's{" "}
        <a href="#" className="text-red-600 border-b-2 hover:text-rose-500">
          Privacy Policy
        </a>
      </p>

      <button 
        type="submit" 
        className="bg-gray-900 text-white font-montreal font-bold text-sm mx-auto px-5 py-2 rounded-lg"
        // onClick={() => console.log(formData)}
      >
        {/* Conditionally render the donation button text based on monthly selection */}
        {paymentPlan === 'monthly' ? `DONATE $${donationAmount} Monthly` : `DONATE $${donationAmount}`}
      </button>
<p className="py-2 text-green-600 text-xs">{success ? success : ""}</p>

</form>
    </div>
  );
};
  
export default PersonalDetails;
