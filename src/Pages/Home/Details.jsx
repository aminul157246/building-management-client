
import { useState } from 'react';
import { useEffect } from 'react';
import Detail from './Detail';
const Details = () => {

    const [details, setDetails] = useState([])
    useEffect(()=> {
        fetch('https://building-management-server-abldegp2t-aminul-islams-projects.vercel.app/appartment/details')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])

    console.log('details',details);



    return (
      
           <div className='grid grid-cols-4 gap-5'>
            {
                details.map(detail => <Detail key={detail._id} detail={detail}></Detail> )
            }
           </div>

    );
};

export default Details;