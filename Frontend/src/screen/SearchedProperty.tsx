
import TopNavBar from "../MainpageComponents/TopNavBar"
import LetstakeATourText2 from "../MainpageComponents/Card"
import { useAppSelector } from "../Redux/Hooks";
import { useFilterPropertyMutation } from "../Redux/Slices/Auth";
import { useEffect } from "react";





const SearchedProperty = () => {

  const usersearcheddata = useAppSelector(state=>state.propertySearched)
  const [searchproperty,{data}] = useFilterPropertyMutation();


  useEffect(()=>{
    searchproperty(usersearcheddata);
  },[])


  return (
    <div>
      <TopNavBar/>

      <section className="maria-crist-text">
        <div className="group">
          <div className="our-properties"></div>
          <h1 className="our-featured-properties">Properties Result </h1>
        </div>
        <div className="our-agents-text">

          <LetstakeATourText2
            tribbleStoryHouseForRent= {data?.type}
            prop="35,000/"
            beds="5 Beds"
            baths="3 Baths"
            sqFt="3500 Sq Ft"
            propBackgroundImage="url('/frame-71591@3x.png')"
            propHeight="25px"
          />

        </div>
        <img className="maria-crist-text-child" alt="" src="/group-7113.svg" />
      </section>




    </div>
  )
}

export default SearchedProperty