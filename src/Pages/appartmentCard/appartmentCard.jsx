import { useContext } from "react";
import { AuthContext } from "../../AuthProvieder/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AppartmentCard = ({ appartment }) => {

    const { img, floorNo, blockName,  apartmentNo, _id } = appartment;


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

            axios.post('https://building-management-server-abldegp2t-aminul-islams-projects.vercel.app/appartment/agreement', agreeItem)
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
                    <h2 className="card-title">Appartment No : {apartmentNo}</h2>
                    <p>Block : {blockName}</p>
                    <p>Floor No : {floorNo}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleAgreement} className="btn btn-outline">Agreement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppartmentCard;