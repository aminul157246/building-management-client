import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import img1 from '../../assets/pexels-adrien-olichon-2387674.jpg'
import img2 from '../../assets/pexels-joanne-adela-2873639.jpg'
import img3 from '../../assets/istockphoto-1165384568-612x612.jpg'
import img4 from '../../assets/pexels-photomix-company-565324.jpg'

const Banner = () => {
    return (
        <div className="my-12">

            <Carousel className="text-center">
                <div>
                    <img  src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;