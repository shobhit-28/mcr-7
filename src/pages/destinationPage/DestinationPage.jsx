import { useParams } from "react-router-dom"
import { data } from "../../data/data"
// import { Card } from "../../components/card"

export const DestinationPage = () => {
    const { destinationID } = useParams()

    const countryData = data.continents.find(({ id }) => id === Number(destinationID)).countries
    console.log(countryData)

    return (
        <div className="page">
            {/* <p className="text-3xl font-medium text-center my-5">Top Countries in {data.continents.find(({ id }) => id === Number(countryID)).name} for your next holiday</p>
            <div className="flex justify-evenly my-28">
                {countryData.map(({ id, image, name }) => <div key={id} className="w-1/4" ><Card image={image} name={name} /></div>)}
            </div> */}
        </div>
    )
}
