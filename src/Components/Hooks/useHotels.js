import { useEffect, useState } from "react";

const useHotels = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch("hotel-booking.json")
            .then(res => res.json())
            .then(data => setHotels(data));
    }, []);

    return [hotels, setHotels];
};
export default useHotels;