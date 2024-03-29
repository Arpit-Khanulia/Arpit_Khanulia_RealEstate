import { FunctionComponent } from "react";
import TopNavBar from "./TopNavBar";
import "./ContentFrame.css";
import { useAppSelector } from "../Redux/Hooks";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useAppDispatch } from "../Redux/Hooks";
import { propertysaved } from "../Redux/Slices/data";
import { searchValidationSchema } from "../Schemas";
import { useNavigate } from "react-router-dom";



interface initialValuestype  {


  pincode:string
  type:string

}
const initialValues:initialValuestype = {
  pincode:"",
  type:"",
}




const ContentFrame: FunctionComponent = () => {

  const navigate = useNavigate();
  
  const dispatch = useAppDispatch();

  const {values,handleBlur,handleChange,handleSubmit} =   useFormik({
    initialValues:initialValues,
    validationSchema:searchValidationSchema,
    onSubmit : async(values,action)=>{
      
      console.log(values);
      
       dispatch(propertysaved(values))
       navigate('/searchedproperty');

       action.resetForm();
       
    }
  })

  
  const data = useAppSelector(state=>state.saveUserAndToken.accessToken)
  return (
    <section className="content-frame">
      <div className="top-nav-bar-parent">
        <TopNavBar />
        <div className="privacy-policy-frame">
          <h1 className="find-your-dream1">Find Your Dream Home</h1>
          <form onSubmit={handleSubmit} className="email-subscription-frame">
            <h2 className="from-as-low">
              From as low as $10 per day with limited time offer discounts.
            </h2>
            <div className="search-area">


             <Link to='/allproperty' className="header-frame"> <button  >
                <div className="buy">Buy</div>
              </button> </Link>
              <Link className="header-frame1" to='/allproperty'><button>
                <div className="rent">Rent</div>
              </button></Link>
              {data && <Link to='/addproperty' className="header-frame2"> <button >
                <div className="sell">Sell</div>
              </button></Link>}
            </div>
            <div className="title-text">
              <div className="nav-links-group">
                <div className="line">
                  <input  name="pincode" value={values.pincode} onChange={handleChange} onBlur={handleBlur}
                    style={{ width: "100%" }}
                    className="entar-keyword"
                    placeholder="Location Pincode"
                    type="text"
                  />
                </div>

                  <select  name="type" value={values.type} onChange={handleChange} onBlur={handleBlur} className="property-type btnn line1" >Property Type
                    <option  >Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Flat">Flat</option>
                    <option value="Villa">Villa</option>
                    <option value="Land">Land</option>
                    <option value="Office-Space">Office Space</option>
                    <option value="Basement">Basement</option>
                  </select>

                <button className="line3">
                  <div className="search">Search</div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContentFrame;
