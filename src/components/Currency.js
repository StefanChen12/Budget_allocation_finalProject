import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Select from 'react-select';
import { components } from 'react-select';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    
    const handleCurrencyChange = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
    }

    // customize the single value component, after the user selects a currency, add a label "currency:" before the value
    const CustomSingleValue = ({ children, ...props }) => {
        return (
          <components.SingleValue {...props}>
            {`currency: ${children}`}
          </components.SingleValue>
        );
      };

    const options = [
        { value: '$', label: '$ Dollar' },
        { value: '£', label: '£ Pound' },
        { value: '€', label: '€ Euro' },
        { value: '₹', label: '₹ Ruppee' }
    ];

    const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "#92e399" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
        ...styles,
        backgroundColor: isFocused ? "333333" : "#92e399",
        color: "#333333"
        };
    }
    };
      
    return (
        <div className="col-sm">
            <Select 
                className='col-sm'
                styles={colourStyles} 
                components={{ SingleValue: CustomSingleValue }} 
                options={options} 
                onChange={(values) => handleCurrencyChange(values.value)}
            />
        </div>
    );
};

export default Currency;