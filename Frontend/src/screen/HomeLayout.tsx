import TopNavBar from '../MainpageComponents/TopNavBar'
import { Outlet } from 'react-router-dom'
const HomeLayout = () => {
  return (
    <div>

        <TopNavBar/>
        <Outlet/>

    </div>
  )
}

export default HomeLayout