import React from 'react';
import "./Home.css";
import Hotels from '../Hotels/Hotels';
import Header from '../Header/Header';


const Home = () => {


    return (
        <div>
            home


            {/* header section */}
            <Header></Header>


            <Hotels></Hotels>
        </div>
    );
};

export default Home;