
import { useLoaderData } from 'react-router-dom';
import AppartmentCard from '../appartmentCard/appartmentCard';
import Banner from './Banner';

const Home = () => {
    const appartments = useLoaderData()
    console.log(appartments);
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-3 gap-6'>
          {
              appartments.map(appartment => <AppartmentCard appartment={appartment} key={appartment._id}></AppartmentCard>)
          }
        </div>
        </div>
    );
};

export default Home;