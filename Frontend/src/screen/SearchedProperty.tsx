
import TopNavBar from "../MainpageComponents/TopNavBar"
import LetstakeATourText2 from "../MainpageComponents/Card"
import { useAppSelector } from "../Redux/Hooks";
import { useFilterPropertyMutation } from "../Redux/Slices/Auth";
import { useEffect } from "react";





const SearchedProperty = () => {
  


     const usersearcheddata =  useAppSelector(state=>state.propertySearched)
     console.log('this is dataaaa',usersearcheddata);

     const [searchprop,{data}] = useFilterPropertyMutation();

     useEffect(()=>{
       searchprop(usersearcheddata);
    },[])

  return (
    <div>
      <TopNavBar/>

      <section className="maria-crist-text">
        <div className="group">
          <div className="our-properties"></div>
          <h1 className="heading">Properties Result </h1>
        </div>
        <div className="our-agents-text">
          {data && data.map((item: any) => (
            <LetstakeATourText2
              key={item._id}
              type={item.type}
              price={item.price}
              location={item.location}
              Description={item.description}
              propBackgroundImage={`url('/frame-71591@3x.png')`}
              propHeight="25px"
            />
          ))}

        </div>
        <img className="maria-crist-text-child" alt="" src="/group-7113.svg" />
      </section>




    </div>
  )
}

export default SearchedProperty