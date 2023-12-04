
import AppartmentCard from '../appartmentCard/appartmentCard';
import Banner from './Banner';
import Details from './Details';
import Map from './Map/Map';
import PerfectHome from './PerfectHome';
import { useState } from 'react';
import './home-pagination.css'
import { useEffect } from 'react';

const Home = () => {


    const [appartments, setAppartments] = useState([])



    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const numberPerPages = Math.ceil(appartments.length / itemsPerPage)
    

     // const pages = [...Array(numberPerPages).keys()]
    // console.log('pages',pages);

    const pages = []
    for(let i = 0 ; i<numberPerPages ; i++){
        pages.push(i)
    }
    console.log('pages',pages);



    useEffect(() => {
        fetch(`https://building-management-server-alpha.vercel.app/appartment?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setAppartments(data))

    }, [currentPage, itemsPerPage])
    console.log(appartments);



    const handleItemPerPage = e => {
        const val = e.target.value;
        const number = parseInt(val)
        setItemsPerPage(number)
        setCurrentPage(0)

    }

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }



    return (
        <div>
            <Banner></Banner>
            <Details></Details>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appartments.map(appartment => <AppartmentCard appartment={appartment} key={appartment._id}></AppartmentCard>)
                }
            </div>

            <div className='pagination '>
                <p>{currentPage}</p>
                <button onClick={handlePrev}>prev</button>
                {
                    pages.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? 'selected' : undefined}
                        key={page}>{page}
                    </button>)
                }
                <button onClick={handleNext}>Next</button>
                <select
                    value={itemsPerPage}
                    onChange={handleItemPerPage}
                    name="" id="">
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                </select>
            </div>
            <PerfectHome></PerfectHome>
            <Map></Map>
        </div>
    );
};

export default Home;