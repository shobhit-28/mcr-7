import { useParams } from "react-router-dom"
import { data } from "../../data/data"
// import { Card } from "../../components/card"
// import { Card } from "../../components/card"

export const DetailPage = () => {
    const { details } = useParams()

    const destId = details.split('-')[0]
    const countryID = details.split('-')[1]
    const detailID = details.split('-')[2]


    const destinationDetail = data.continents.find(({ id }) => id === Number(countryID)).countries.find(({id}) => id === Number(destId)).destinations.find(({id}) => id === Number(detailID) )

    console.log(destinationDetail)

    return (
        <div className="page">
            <p className="text-4xl font-medium text-center py-8">{destinationDetail.name}</p>
            <div className="flex items-center pt-10">
                <div className="w-2/5 mx-4">
                    <img src={destinationDetail.image} alt="" />
                </div>
                <div className="text-xl w-3/5">
                    <p className="flex items-start"><span className="mr-3 text-indigo-500 text-2xl">{`Description: `}</span>{destinationDetail.description}</p>
                    <p className="flex items-start"><span className="mr-3 text-indigo-500 text-2xl">{`Ratings: `}</span>{destinationDetail.ratings}</p>
                    <p className="flex items-start"><span className="mr-3 text-indigo-500 text-2xl">{`Reviews: `}</span>{destinationDetail.reviews}</p>
                    <p className="flex items-start"><span className="mr-3 text-indigo-500 text-2xl">{`Location: `}</span>{destinationDetail.location}</p>
                    <p className="flex items-start"><span className="mr-3 text-indigo-500 text-2xl">{`Opening Hours: `}</span>{destinationDetail.openingHours}</p>
                    <p className="flex items-start"><span className="mr-3 text-indigo-500 text-2xl">{`Ticket Price: `}</span>{destinationDetail.ticketPrice}</p>
                    <a href={destinationDetail.website} className="text-pink-500 my-4 p-2 inline-block border-2 border-pink-500 rounded-xl" target="_blank" rel="noreferrer">Website</a>
                </div>
            </div>
        </div>
    )
}