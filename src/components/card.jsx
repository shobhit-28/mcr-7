/* eslint-disable react/prop-types */
import { ImLocation } from "react-icons/im"

export const Card = ({ image, name }) => {
    return (<div className="w-full overflow-hidden rounded-2xl cursor-pointer relative">
        <img src={image} alt="" />
        <p className="absolute z-10 bottom-2 left-2 flex items-center bg-color p-2 rounded-3xl"><ImLocation />{name}</p>
    </div>)
}