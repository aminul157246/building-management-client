
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
const SingleDetail = () => {


    const { id } = useParams()
    console.log(id);



    const { isPending, data: det } = useQuery({
        queryKey: ['detail'],
        queryFn: async () => {
            const res = await fetch(`https://building-management-server-alpha.vercel.app/details/${id}`)
            return res.json();
        }
    })


    if (isPending) {
        return <div className="flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }





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