import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Remaining = () => {
    const { currency, remaining } = useContext(AppContext);
    const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};
export default Remaining;


// sample codes
// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext'; 
// const Remaining = () => {
//     const { expenses, budget } = useContext(AppContext);
//     const totalExpenses = expenses.reduce((total, item) => {
//         return (total = total + item.cost);
//     }, 0);
//     const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
//     return (
//         <div className={`alert ${alertType}`}>
//             <span>Remaining: £{budget - totalExpenses}</span>
//         </div>
//     );
// };
// export default Remaining;