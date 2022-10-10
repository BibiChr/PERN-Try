import React, {useEffect, useState} from 'react';
import RestaurantFinder from "../api/RestaurantFinder";
import {getAllRestaurants} from "../api/RestaurantService";

const RestaurantList = () => {
    
    const [restaurants, setRestaurants] = useState([]);
    
    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const response = await getAllRestaurants();
        //         console.log(response);
        //     } catch { }
        // };
        //
        // fetchData();
        
        // const getIt = async () => {
        //     getAllRestaurants().then(
        //         restaurants => {
        //             console.log(restaurants);
        //         }
        //     )
        // }
        // getIt();
        
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                console.log(response);
            } catch { }
        };

        fetchData();
    }, []);
    
    return (
        <div className="list-group">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Restaurant</th>
                    <th>Location</th>
                    <th>Price Range</th>
                    <th>Rating</th>
                    <th>
                        <button className="btn btn-secondary">Edit</button>
                    </th>
                    <th>
                        <button className="btn btn-danger">delete</button>
                    </th>
                </tr>
                </tbody>
            </table>
        </div>
    )
};


export default RestaurantList;