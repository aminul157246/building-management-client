

import { useQuery } from "@tanstack/react-query";

const Apartment = () => {


    const {isPending,data : appartments } = useQuery({
        queryKey : ['users'], 
        queryFn : async () => {
            const res = await fetch(`https://building-management-server-alpha.vercel.app/appartment`)
            return res.json()
        }
    })


    if(isPending){
        return <div className="flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }



    return (
        <div  className="">
            {
                appartments.map(agree => <div key={agree._id}>

                    

                        <div className="card w-1/2 mx-auto bg-base-100 shadow-xl mt-6">
                            <div className="card-body">
                                <h2 className="card-title">Appartment No : {agree.apartmentNo}</h2>
                                <p>Block Name : {agree.blockName}</p>
                                <p>Floor No : {agree.floorNo}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline">Details</button>
                                </div>
                            </div>
                        </div>

                </div>)
            }
        </div>
    );
};

export default Apartment;