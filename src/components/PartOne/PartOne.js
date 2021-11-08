import React from 'react';

const PartOne = ({ setParts, handleChange, localData }) => {
    const handleNext = () => {
        setParts('part2')
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setParts('part2')
        }
    }
    return (
        <div>
            <input autoFocus type="text" required placeholder="name" name="name" onKeyPress={handleKeyPress} onChange={handleChange} value={localData?.name || ''} />
            <button type="button" onClick={handleNext}>Next</button>
        </div>
    );
};

export default PartOne;