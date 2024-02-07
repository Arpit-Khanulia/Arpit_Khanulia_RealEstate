import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginScreen from "./screen/LoginScreen"
import RegisterScreen from "./screen/RegisterScreen"
import RealEstateWebsite from "./screen/RealEstateWebsite"



const App = () => {


  return (
    <BrowserRouter>

      <Routes>
          <Route path="/login"  element={<LoginScreen/> } />
          <Route path="/register"  element={<RegisterScreen/> } />
          <Route path="/" element={<RealEstateWebsite />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App