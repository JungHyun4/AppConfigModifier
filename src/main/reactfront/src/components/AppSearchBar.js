import React from "react";
import '/Users/junghyun/IdeaProjects/hhhard/src/main/reactfront/src/App.css';
import axios from "axios";
import jsYaml, {JSON_SCHEMA} from "js-yaml";
import {Button} from "react-bootstrap";
import {type} from "@testing-library/user-event/dist/type";

const AppSearchBar = ({ AppName , SetAppName , Content , SetContent}) => {
    return(
        <div>
            <>
                <input  onChange={(e)=> {
                    SetAppName(e.target.value)
                }}/>
                <button type={"button"} onClick={()=>{
                    axios
                        .get('/db/'+ AppName)
                        .then((response) => {
                            SetContent(response.data)
                            const yaml = require('js-yaml')
                            const data = yaml.load(response.data)
                            const keys = Object.keys(data);
                            console.log(data[keys[0]])
                            printTree(data)

                        })
                }}>Search</button>
            </>
        </div>
    )
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



export default AppSearchBar;