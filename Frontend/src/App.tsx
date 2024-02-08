import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginScreen from "./screen/LoginScreen"
import RegisterScreen from "./screen/RegisterScreen"
import RealEstateWebsite from "./screen/RealEstateWebsite"
import AddProperty from "./screen/AddProperty"



const App = () => {


  return (
    <BrowserRouter>

      <Routes>
          <Route path="/login"  element={<LoginScreen/> } />
          <Route path="/register"  element={<RegisterScreen/> } />
          <Route path="/" element={<RealEstateWebsite />} />
          <Route path="/addproperty" element={<AddProperty />} />

      </Routes>
    
    </BrowserRouter>
  )
}

export default App