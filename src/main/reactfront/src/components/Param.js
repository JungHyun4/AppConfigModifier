import { useState } from 'react';

function Param({ initialKeyValues }) {
    const [keyValues, setKeyValues] = useState(initialKeyValues);

    const handleAddKeyValue = () => {
        const newKeyValue = { id: Date.now(), key: '', value: '' };
        setKeyValues([...keyValues, newKeyValue]);
    };

    const handleRemoveKeyValue = (id) => {
        const filteredKeyValues = keyValues.filter((kv) => kv.id !== id);
        setKeyValues(filteredKeyValues);
    };

    const handleInputChange = (id, event) => {
        const { name, value } = event.target;
        const newKeyValues = keyValues.map((kv) => {
            if (kv.id === id) {
                return { ...kv, [name]: value };
            }
            return kv;
        });
        setKeyValues(newKeyValues);
    };

    return (
        <div>
            <button onClick={handleAddKeyValue}>Add Key-Value</button>

            {keyValues.map((kv) => (
                <div key={kv.id}>
                    <label>
                        Key:
                        <input
                            type="text"
                            name="key"
                            value={kv.key}
                            onChange={(e) => handleInputChange(kv.id, e)}
                        />
                    </label>
                    <label>
                        Value:
                        <input
                            type="text"
                            name="value"
                            value={kv.value}
                            onChange={(e) => handleInputChange(kv.id, e)}
                        />
                    </label>
                    <button onClick={()=>{;}}>Save</button>
                    <button onClick={() => handleRemoveKeyValue(kv.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Param;
