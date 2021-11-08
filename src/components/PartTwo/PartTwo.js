import React from 'react';

const PartTwo = ({ handleChange, setParts, localData }) => {
    const handlePrevious = () => {
        setParts('part1')
    }
    return (
        <div>
            <button type="button" onClick={handlePrevious}>Previous</button>
            <br />
            <br />
            <input autoFocus required type="email" placeholder="email" name="email" onChange={handleChange} value={localData?.email || ''} />
            <br />
            <br />
            <input type="submit" value="Submit" />
        </div>
    );
};

export default PartTwo;