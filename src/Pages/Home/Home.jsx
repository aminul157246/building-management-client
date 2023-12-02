
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const appartment = useLoaderData()
    console.log(appartment);
    return (
        <div>
          
        </div>
    );
};

export default Home;