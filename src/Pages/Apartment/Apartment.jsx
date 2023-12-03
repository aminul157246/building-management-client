import { useLoaderData } from "react-router-dom";

const Apartment = () => {

    const appartments = useLoaderData()
    console.log(appartments);
    return (
        <div >
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