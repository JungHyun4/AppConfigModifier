import '/Users/junghyun/IdeaProjects/hhhard/src/main/reactfront/src/App.css';
import React, { useState } from 'react';

function Schedule({ items , onItemChange}) {
    const [selectedItem, setSelectedItem] = useState(items[0]);

    const handleSelectedItemChange = (e) => {
        setSelectedItem(e.target.value);
        onItemChange(selectedItem);
    };

    return (
        <select value={selectedItem} onChange={handleSelectedItemChange}>
            {items.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
}

export default Schedule;