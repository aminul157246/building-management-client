import { useLoaderData } from "react-router-dom";

const Apartment = () => {

    const appartments = useLoaderData()
    console.log(appartments);
    return (
        <div>
            {
                appartments.map(agree => <div key={agree._id}>
                     <div className="flex gap-6">
            <img style={{borderRadius : '0 200px 200px 200px'}} className="w-[120px] " src={agree.img} alt="" />
            <div>
                <h3 className="text-xl uppercase">{agree.blockName} ---------</h3>
                <p>{agree.floorNo}</p>
            </div>
            <p className="text-yellow-500">{agree.apartmentNo}</p>
        </div>
                </div>)
            }
        </div>
    );
};

export default Apartment;