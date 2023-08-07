import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Department</th>
                    <th>Allocated Budget</th>
                    <th>Increase by 10</th>
                    <th>Decrease by 10</th>
                    <th>Delete</th>
                </tr>
            </thead>    
            <tbody>
                {expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} name={expense.name} cost={expense.cost}/>
                })}
            </tbody>
        </table>
    );

};

export default ExpenseList;
