import React, {useState} from "react"
import '/Users/junghyun/IdeaProjects/hhhard/src/main/reactfront/src/App.css';
import yaml from "js-yaml";


const TreeEditor =  ({AppName ,  Content , Color}) =>{

    const [arrow , Setarrow] = useState("▶");
    const [current, SetCurrent] = useState("");

    const data = yaml.load(Content);
    const headers = Object.keys(data);


    const sample = () => {
        const HeaderList = headers.map((header) => <li onClick={()=>{

            if(typeof data[header] == "object"){
                SetCurrent(current + JSON.stringify(data[header]))
            }
            else{
                SetCurrent("asd")
            }
            SetCurrent(JSON.stringify(data[header]))

        }}>{header}<a onClick={ () => {Setarrow("▼")} }> {arrow}</a></li>);

        return (<ul>{HeaderList}</ul>)
    }
    const s = sample(data);

    return (
        <div>
            <input style={ {color:Color}}  name="appName" className="AppName" readOnly={true} defaultValue={AppName}></input>

            <div className="TreeContainer">

                <div className="left">
                    {s}
                </div>

                <div className="right">
                    <text>{current}</text>
                </div>
            </div>
        </div>
    )
}
const sample = (data) => {
    const headers = Object.keys(data);
    const HeaderList = headers.map((header) => <li>{header}</li>);

    return (<ul>{HeaderList}</ul>)
}



function printTree(data){
    try {
        const keys = Object.keys(data)

        for (let i = 0; i < keys.length; i++) {
            if (isLeaf(data[keys[i]])) {
                console.log(keys[i].toString() + "  " + data[keys[i]].toString())
            } else {
                console.log(keys[i])
                printTree(data[keys[i]])
            }
        }
    }
    catch (e) {
        console.log(e)
    }


}
function isLeaf(data){
    if(typeof data == "object"){
        return false;
    }
    else{
        return true;
    }
}



export default TreeEditor