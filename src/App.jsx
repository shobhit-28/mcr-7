import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/homePage/homePage"
import { CountryPage } from "./pages/countryPage/CountryPage"
import { DestinationPage } from "./pages/destinationPage/DestinationPage"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryID" element = {<CountryPage />} />
        <Route path="/destination/:destinationID" element={<DestinationPage />} />
      </Routes>
    </div>
  )
}

export default App
