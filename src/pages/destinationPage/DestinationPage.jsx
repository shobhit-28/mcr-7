import { useParams } from "react-router-dom"
import { data } from "../../data/data"
import { Card } from "../../components/card"
// import { Card } from "../../components/card"

export const DestinationPage = () => {
    const { destinationID } = useParams()

    const destId = destinationID.split('-')[0]
    const countryID = destinationID.split('-')[2]

    const destinationsData = data.continents.find(({ id }) => id === Number(countryID)).countries.find(({id}) => id === Number(destId)).destinations

    return (
        <div className="page">
            <p className="text-3xl font-medium text-center my-5">Top Countries in {data.continents.find(({ id }) => id === Number(countryID)).countries.find(({id}) => id === Number(destId)).name} for your next holiday</p>
            <div className="flex justify-evenly my-28 flex-wrap">
                {destinationsData.map(({ id, image, name }) => <div key={id} className="w-1/5" ><Card image={image} name={name} /></div>)}
            </div>
        </div>
    )
}
