import React from 'react';
import "./Hotel.css";

const Hotel = ({ hotel }) => {
    const { name, img } = hotel;
    // console.log(hotel);
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 mx-auto '>
            <div class="card mx-auto" style={{ width: " 18rem" }}>
                <img src={img} class="card-img-top" alt="..." height="300px" style={{ objectFit: "cover" }} />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Hotel Detail</a>
                </div>
            </div >
        </div>
    );
};

export default Hotel;