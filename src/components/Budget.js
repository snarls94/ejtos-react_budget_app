import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {budget, dispatch} = useContext(AppContext);
    const handleBudgetChange = (e) => {
        if (e.target.value <= 20000) {
            dispatch({ type: 'SET_BUDGET', payload: parseInt(e.target.value) });
        } else {
            alert('Budget cannot exceed 20,000');
        }
    };
    return(
        <div className = 'alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" min="0" max="20000" step="10" value={budget} onChange={handleBudgetChange}/>
        </div>
    );
};
export default Budget;
