import React from "react";
import '/Users/junghyun/IdeaProjects/hhhard/src/main/reactfront/src/App.css';
import axios from "axios";
import DropDown from "./DropDown";

import jsYaml, {JSON_SCHEMA} from "js-yaml";
import {Button} from "react-bootstrap";
import {type} from "@testing-library/user-event/dist/type";

const AppSearchBar = ({ AppName , SetAppName , Content , SetContent}) => {
    return(
        <div>
            <>
                <DropDown SetAppName = {SetAppName} SetContent={SetContent} AppName={AppName}></DropDown>
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