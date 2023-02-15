import { useState } from 'react';

function Radio() {
    const [selectedOption, setSelectedOption] = useState('File');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="File"
                    checked={selectedOption === 'File'}
                    onChange={handleOptionChange}
                />
                File
            </label>
            <label>
                <input
                    type="radio"
                    value="Time"
                    checked={selectedOption === 'Time'}
                    onChange={handleOptionChange}
                />
                Time
            </label>

            {selectedOption === 'File' ? <File /> : <Time />}
        </div>
    );
}

function File() {
    const [selectedOption, setSelectedOption] = useState('True');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (
        <div>

            <div>
                <hr/>
                <label>path</label><input/>
            </div>
            <div>
                <label>includeold : </label><input type={"radio"} value={"True"} checked={selectedOption === 'True'} onChange={handleOptionChange}/> True
                <input type={"radio"} value={"False"} checked={selectedOption === 'False'} onChange={handleOptionChange}/> False
            </div>
        </div>

    )

}

function Time() {
    return (<div>
        <hr/>

        <label>Time</label><input/>
    </div>);
}

export default Radio

