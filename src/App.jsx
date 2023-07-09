import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/homePage/homePage"
import { CountryPage } from "./pages/countryPage/CountryPage"
import { DestinationPage } from "./pages/destinationPage/DestinationPage"
import { DetailPage } from "./pages/detailPage/DetailPage"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryID" element = {<CountryPage />} />
        <Route path="/destination/:destinationID" element={<DestinationPage />} />
        <Route path="/detail/:details" element={<DetailPage />} />
      </Routes>
    </div>
  )
}

export default App
