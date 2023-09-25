import React from 'react';
import "./AllHotels.css";
import useHotels from '../Hooks/useHotels';
import Hotel from '../Hotel/Hotel';

const AllHotels = () => {
    const [hotels, setHotels] = useHotels();
    // console.log(hotels);

    return (
        <section className='contaier'>
            <h3 className='text-secondary my-5'>Availabel Hotels ({hotels.length})</h3>
            <div className="card-group row g-5">
                {
                    hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
                }
            </div>
        </section>
    );
};

export default AllHotels;