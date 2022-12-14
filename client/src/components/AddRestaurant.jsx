import React from 'react';

const AddRestaurant = () => (
    <div className="mb-4">
        <form>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control"/>
                </div>
                <div>
                    <div className="col">
                        <input className="form-control" type="text" placeholder="location"/>
                    </div>
                </div>
                <div>
                    <div className="col">
                        <select className="custom-select my-1 mr-sm-2">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary">Add</button>
            </div>
        </form>
    
    </div>
);


export default AddRestaurant;