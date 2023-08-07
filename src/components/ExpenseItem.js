import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';



const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleIncreaseExpense = () => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: {
                name: props.name,
                cost: 10
            }
        })
    }

    const handleDecreaseExpense = () => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: {
                name: props.name,
                cost: 10
            }
        })
    }

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.name
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><AddCircleOutlineIcon style={{ color: "green"}} onClick={handleIncreaseExpense}></AddCircleOutlineIcon></td>
            <td><RemoveCircleOutlineOutlinedIcon style={{ color: "red"}} onClick={handleDecreaseExpense}></RemoveCircleOutlineOutlinedIcon></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
