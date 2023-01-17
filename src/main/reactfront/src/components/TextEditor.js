import React, {ReactElement, useState} from "react";
import '/Users/junghyun/IdeaProjects/hhhard/src/main/reactfront/src/App.css';
import axios from "axios";


const TextEditor = ({AppName,Content,SetContent,Color}) => {
    return(
        <form onSubmit={(e)=> {
            axios.post("/db/" + AppName,{"appName":AppName , "content":Content})
                .then((response) => console.log(response));
            alert("저장되었습니다.")
            // window.location.reload();
        }}>
            <input style={ {color:Color}}  name="appName" className="AppName" readOnly={true} defaultValue={AppName}></input>
            <textarea className="TextBox" name="content" defaultValue={Content} onChange={(e)=>{
                SetContent(e.target.value)}}></textarea>
            <button type="submit" className="submitBtn">저장하기</button>
        </form>
    )
}



export default TextEditor;