import React from 'react';
import "./Hotels.css";
import useHotels from '../Hooks/useHotels';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotels, setHotels] = useHotels();
    // console.log(hotels);


    return (
        <section>
            <div class="card-group">
                hotels
                {
                    hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
                }
            </div>
        </section>
    );
};

export default Hotels;