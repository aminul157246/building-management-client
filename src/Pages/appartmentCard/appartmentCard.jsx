import { useContext } from "react";
import { AuthContext } from "../../AuthProvieder/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AppartmentCard = ({ appartment }) => {

    const { img, floorNo, blockName, Block, apartmentNo, _id } = appartment;


    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleAgreement = agree => {
        if (user && user.email) {
            console.log(user.email, agree);
            const agreeItem = {
                agreeId: _id,
                email: user.email,
                floorNo, blockName, apartmentNo,img
            }

            axios.post('http://localhost:5000/agreement', agreeItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    toast('agreement success...')
                }
            })




        }
        else {
            Swal.fire({
                title: "Please log in before agreement",
                text: "You should log in",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, logged in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="h-[350px]" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{floorNo}</h2>
                    <p>{blockName}</p>
                    <p>{Block}</p>
                    <p>{apartmentNo}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAgreement} className="btn btn-primary">Agreement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppartmentCard;