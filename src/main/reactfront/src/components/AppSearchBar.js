import React from "react";
import '/Users/junghyun/IdeaProjects/hhhard/src/main/reactfront/src/App.css';
import axios from "axios";
import jsYaml, {JSON_SCHEMA} from "js-yaml";
import {Button} from "react-bootstrap";

const AppSearchBar = ({ AppName , SetAppName , Content , SetContent}) => {
    return(
        <div>
            <>
                <input  onChange={(e)=> {
                    SetAppName(e.target.value)}}/>
                <button type={"button"} onClick={()=>{
                    axios
                        .get('/db/'+ AppName)
                        .then((response) => {
                            SetContent(response.data)
                            const yaml = require('js-yaml')
                            const data = yaml.load(response.data)
                            const keys = Object.keys(data);
                            console.log(Object.keys(data[keys[0]]))
                        })
                        .catch(function (error) {
                            console.log(error)
                            alert("파일을 찾을 수 없습니다")
                            // window.location.reload()
                        })
                }}>Search</button>
            </>
        </div>
    )
}
function makeTree(object, result){
    const head = Object.keys(object)

}


function jsonSpliter(object, result){
    Object.keys(object).map(function (key) {
        if(typeof object[key] === 'object'){
            result[key] = "parent"
            console.log("parent node" + key)
            jsonSpliter(object[key], result);
        }
        else
        {
            result[key] = object[key];
            console.log("terminal node")
        }
    });
    return result;
}



// function loadConfig(appname){
//     return(
//         axios
//             .get('/db/'+ appname)
//             .then((response) => {console.log((response.data))})
//     );
// }

// onClick={()=>{
//     axios
//         .get('/db/'+ AppName)
//         .then((response) => {
//             SetContent(response.data)
//             let value = response.data.split("\n")
//
//             for(var i=0; i<value.length; i++){
//                 value[i].split(":")
//             }
//             console.log(value)
//             for(var i=0; i<value.length; i++){
//                 value[i] = value[i].slice(0,-1)
//             }
//             const value_new = value.map(x => x.split(":"))
//             console.log(value_new)
//         })
// }}
export default AppSearchBar;


