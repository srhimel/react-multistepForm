import React from 'react';

const PartTwo = ({ handleChange, setParts, localdata }) => {
    const handlePrevious = () => {
        setParts('part1')
    }
    return (
        <div>
            <button type="button" onClick={handlePrevious}>Previous</button>
            <br />
            <br />
            <input type="email" placeholder="email" name="email" onChange={handleChange} value={localdata.email || ''} />
            <br />
            <br />
            <input type="submit" value="Submit" />
        </div>
    );
};

export default PartTwo;