import React from 'react';
import "./Hotels.css";
import useHotels from '../Hooks/useHotels';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotels, setHotels] = useHotels();
    // console.log(hotels);

    const homeHotels = hotels.filter(hotel => hotel.id < 7);
    console.log(homeHotels);
    return (
        <section className='contaier'>
            <h3 className='text-secondary'>Pupuler Booking Hotels</h3>
            <div className="card-group row gx-5">
                {
                    homeHotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
                }
            </div>
        </section>
    );
};

export default Hotels;