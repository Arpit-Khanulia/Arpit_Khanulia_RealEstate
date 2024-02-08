import { useFormik } from "formik";
import { useEffect } from "react";
import { propertyValidationSchema } from "../Schemas";
import { useAddPropertyMutation } from "../Redux/Slices/Auth";
import TopNavBar from "../MainpageComponents/TopNavBar";


const userId = localStorage.getItem('userid') || '';
const userEmail = localStorage.getItem('useremail') || '';

console.log('this is id',userId);

const AddProperty = () => {

  
  
  interface initialValuestype  {
  
  
    uid: string;
    sellerEmail: string;
    location: string;
    type: string;
    price: number|string;
    photoPath: string;
    sell: boolean|string;
    rent: boolean|string;
    pincode: string;
    description: string;
  
  
  }
  const initialValues:initialValuestype = {
    uid: userId,
    sellerEmail:userEmail,
    location: "",
    type: "",
    price: "",
    photoPath: "",
    sell: "1",
    rent: "0",
    pincode: "",
    description: ""
  }
  
  const [newproperty,{isError,isSuccess}] = useAddPropertyMutation();


  useEffect(()=>{
    
    if(isError){
      alert('Error : Property not added')
    }
  
    if(isSuccess){
      alert('Success : Property added');
  }
},[isSuccess,isError]);



  const {values,errors,touched,handleBlur,handleChange,handleSubmit} =   useFormik({
    initialValues:initialValues,
    validationSchema:propertyValidationSchema,
    onSubmit : async(values,action)=>{

       console.log('these are the values get ',values);
       await newproperty(values)
       action.resetForm();
       
    }
  })

  console.log(errors);
  
  return (
    <>
    <TopNavBar/>
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://sme.icicilombard.com/assetsSME/images/propertyInsurance-blog2.png"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">

        <form onSubmit={handleSubmit} >

          <select name="type" value={values.type} onChange={handleChange} onBlur={handleBlur} className="select select-bordered w-full max-w-xs">
            <option disabled >Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
            <option value="Villa">Villa</option>
            <option value="Land">Land</option>
            <option value="Office-Space">Office Space</option>
            <option value="Basement">Basement</option>

          </select>
          <input name="location" value={values.location} onChange={handleChange} onBlur={handleBlur} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Property Location" />
          <div className="text-red-500 text-xs mt-1">
            {errors.location && touched.location ? <p>{errors.location}</p> : null}
          </div>
          <input name="price" value={values.price} onChange={handleChange} onBlur={handleBlur} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Price" />
          <div className="text-red-500 text-xs mt-1">
            {errors.price && touched.price ? <p>{errors.price}</p> : null}
          </div>
          <input name="pincode" value={values.pincode} onChange={handleChange} onBlur={handleBlur} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Pincode" />
          <div className="text-red-500 text-xs mt-1">
            {errors.pincode && touched.pincode ? <p>{errors.pincode}</p> : null}
          </div>
          <textarea name="description" value={values.description} onChange={handleChange} onBlur={handleBlur} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"  placeholder="description" />
          <div className="text-red-500 text-xs mt-1">
            {errors.description && touched.description ? <p>{errors.description}</p> : null}
          </div>
            
            <div className="mt-4 flex justify-between font-semibold text-sm">

            </div>
            <div className="text-center md:text-left">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Sell Property</button>
            </div>

        </form>
      </div>
    </section>
    </>
  );
};

export default AddProperty;
