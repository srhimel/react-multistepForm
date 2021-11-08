import React from 'react';

const PartOne = ({ setParts, handleChange, localData }) => {
    const handleNext = () => {
        setParts('part2')
    }
    return (
        <div>
            <input type="text" placeholder="name" name="name" onChange={handleChange} value={localData?.name || ''} />
            <button type="button" onClick={handleNext}>Next</button>
        </div>
    );
};

export default PartOne;