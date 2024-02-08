
import TopNavBar from "../MainpageComponents/TopNavBar"
import LetstakeATourText2 from "../MainpageComponents/Card"
import { useGetPropertiesQuery } from "../Redux/Slices/Auth";





const AllProperty = () => {

  const {data} = useGetPropertiesQuery();


  return (
    <div>
      <TopNavBar/>

      <section className="maria-crist-text">
        <div className="group">
          <div className="our-properties"></div>
          <h1 >Browse Properties</h1>
        </div>
        <div className="our-agents-text">

          {data && data.map((property) => (
            <LetstakeATourText2
              key={property._id}
              location = {property.location}
              type={property.type}
              price={`${property.price}/`}
              Description={`${property.description}`}
              propBackgroundImage=""
              propHeight="25px"
            />
          ))}


        </div>
        <img className="maria-crist-text-child" alt="" src="/group-7113.svg" />
      </section>




    </div>
  )
}

export default AllProperty