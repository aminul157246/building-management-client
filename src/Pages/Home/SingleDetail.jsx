import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
const SingleDetail = () => {

    const [det, setDet] = useState([])
    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        fetch(`https://building-management-server-abldegp2t-aminul-islams-projects.vercel.app/appartment/details/${id}`)
            .then(res => res.json())
            .then(data => setDet(data))
    }, [id])


    console.log(det);
    const { location, img, appartmentName, details } = det;





    return (
        <div className="card card-compact w-1/2 mx-auto bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex items-center justify-center">
                    <  FaLocationDot className="text-2xl" />
                    <p> {location}</p>
                </div>
                <h2 className="card-title">{appartmentName}</h2>
                <p>{details}</p>

            </div>
        </div>
    );
};

export default SingleDetail;