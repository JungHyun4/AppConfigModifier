import React, {useState} from "react"
import '/Users/junghyun/IdeaProjects/hhhard/src/main/reactfront/src/App.css';
import yaml from "js-yaml";



let t = "";

const TreeEditor =  ({AppName ,  Content , Color}) =>{



    const [arrow , Setarrow] = useState(true);
    const [current, SetCurrent] = useState([]);

    const data = yaml.load(Content);
    const headers = Object.keys(data);


    const sample = () => {
        const HeaderList = headers.map((header) => <li onClick={()=>{

            if(typeof data[header] == "object"){
                SetCurrent(data[header])
            }
            else{
                SetCurrent("asd")
            }
            SetCurrent()
            console.log(printTree(data[header]))


        }}>{header}<a onClick={ () => {

           arrow? Setarrow(false):Setarrow(true)} }> {arrow? ">" : "v"}</a></li>);

        return (<ul>{HeaderList}</ul>)
    }
    const s = sample(data);

    return (
        <div>
            <label style={ {color:Color}}  name="appName" className="AppName" >{AppName}</label>

            <div className="TreeContainer">

                <div className="left">
                    {s}
                </div>

                <div className="right">
                    <div>{current}</div>
                </div>
            </div>
        </div>
    )
}





function printTree(data){
    try {
        const keys = Object.keys(data)
        for (let i = 0; i < keys.length; i++) {
            if (isLeaf(data[keys[i]])) {
                console.log(t+ keys[i]+ "  " + data[keys[i]])
            } else {
                console.log( keys[i])
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