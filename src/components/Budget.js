import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {

    const { budget, currency, dispatch, total } = useContext(AppContext);

    const [cost, setCost] = useState(0);

    const handleBudget = (e) => {
        e.preventDefault();
        if(cost < total) {
            alert("The value cannot be less than the total spent so far  £"+total);
            return;
        }else if(cost >= 20000){
            alert("The value cannot exceed 20000");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: cost,
        });
    }

    return(
        <div className="alert alert-secondary">
            <form onSubmit={handleBudget}>
                <label>Budget:{currency}</label>
                <input
                    required='required'
                    step='10'
                    type='number'
                    defaultValue={budget}
                    id='budget'
                    onChange = {(event) => setCost(event.target.value)}
                    />
            </form>
        </div>
    )
};

export default Budget;
