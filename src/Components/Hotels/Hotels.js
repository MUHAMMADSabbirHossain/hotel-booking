import React from 'react';
import "./Hotels.css";
import useHotels from '../Hooks/useHotels';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotels, setHotels] = useHotels();
    // console.log(hotels);


    return (
        <section className='contaier'>
            <h3 className='text-secondary'>Pupuler Hotels</h3>
            <div class="card-group row gx-5">
                {
                    hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
                }
            </div>
        </section>
    );
};

export default Hotels;