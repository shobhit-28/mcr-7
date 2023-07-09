import { useNavigate } from "react-router-dom"
import { Card } from "../../components/card"
import { data } from "../../data/data"

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="page">
            <p className="text-5xl font-medium text-center my-10">Welcome to Trip Advisor</p>
            <p className="text-3xl font-medium text-center my-5 text-indigo-500">Top Continents for your next holiday</p>
            <div className="flex justify-evenly my-28">
                {data.continents.map(({ id, image, name }) => <div key={id} className="w-1/4" onClick={() => navigate(`/country/${id}`)}><Card image={image} name={name} /></div>)}
            </div>
        </div>
    )
}
