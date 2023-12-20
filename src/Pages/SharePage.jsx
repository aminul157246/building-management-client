import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const handleFacebookShare = () => {
 
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https://building-management-a5b4a.web.app/`
    window.open(facebookUrl, "popup", "width=500", "height=500", 'left=500', "top=300")
}

const handleTwitterShare = () => {

    const twitterUrl = `https://twitter.com/share?url=https://building-management-a5b4a.web.app/`
    window.open(twitterUrl, "popup", "width=500", "height=500", 'left=500', "top=300")
}

const handleWhatsappShare = () => {
    const whatsappUrl = `https://wa.me/whatsappphonenumber/?text=https://building-management-a5b4a.web.app/`
    window.open(whatsappUrl, "popup", "width=500", "height=500", 'left=500', "top=300")

}




const SharePage = () => {
    return (
        <div>
            <h1 className="text-xl font-bold text-center mb-4">---Share with---</h1>
           <div className="flex gap-4  items-center justify-center mb-8">
            <div><button onClick={()=>handleFacebookShare()} className="btn "> <FaFacebook className="text-3xl mt-4"></FaFacebook></button></div>
            <div><button onClick={()=>handleWhatsappShare()} className="btn "> <FaWhatsapp className="text-3xl mt-4"></FaWhatsapp></button></div>
            
            <div><button onClick={()=>handleTwitterShare()} className="btn "> <CiTwitter  className="text-3xl mt-4"></CiTwitter></button></div>
           </div>
        </div>
    );
};

export default SharePage;