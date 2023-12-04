import { Link } from "react-router-dom";


const Detail = ({detail}) => {

    
    const {img, appartmentName, _id} = detail;
   


    return (
        <div className="   hover:opacity-80 my-12">
        <figure><img className="h-[220px] w-full p-6"  src={img} alt="car!"/></figure>
        <h1 className='text-xl text-center font-bold'>{appartmentName}</h1>
        
          <div className="card-actions justify-center ">
            <Link to={`/details/${_id}`} className="bg-white  px-4 py-1 -mt-20 rounded-lg text-black">see more</Link>
          </div>
        </div>
    );
};

export default Detail;