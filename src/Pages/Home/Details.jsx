
import { useQuery } from '@tanstack/react-query';
import Detail from './Detail';
const Details = () => {

    


    const {isPending,data : details } = useQuery({
        queryKey : ['detail'], 
        queryFn : async () => {
            const res = await fetch(`https://building-management-server-alpha.vercel.app/details`)
            return res.json();
        }
    })


    if(isPending){
        return <div className="flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }




    return (
      
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                details.map(detail => <Detail key={detail._id} detail={detail}></Detail> )
            }
           </div>

    );
};

export default Details;