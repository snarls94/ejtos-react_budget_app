import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    return(
        <div className='alert alert-secondary' style={{ backgroundColor: '#d1e7dd' }}>
            <span style={{ backgroundColor: '#d1e7dd' }}>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)} style={{ backgroundColor: '#d1e7dd' }}>
                        <option defaultValue>Currency(£ Pound)</option>
                        <option value="$ Dollar" name="$ Dollar"> $ Dollar</option>
                        <option value="£ Pound" name="£ Pound">£ Pound</option>
                        <option value="€ Euro" name="€ Euro">€ Euro</option>
                        <option value="₹ Rupee" name="₹ Rupee">₹ Rupee</option>
                    </select>
            </span>
        </div>
    );
};

export default Currency;
