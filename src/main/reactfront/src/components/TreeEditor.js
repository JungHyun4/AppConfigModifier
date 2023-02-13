import React, {useEffect, useState, useRef} from "react"
import '/Users/junghyun/IdeaProjects/hhhard/src/main/reactfront/src/App.css';
import yaml from "js-yaml";
import YAML from "yaml"
import JsYaml from "js-yaml";
import {head} from "axios";
import {map} from "react-bootstrap/ElementChildren";

const TreeEditor =  ({AppName ,  Content , Color}) => {

    // 필요한 데이터셋 구성
    const data = yaml.load(Content) // 원본데이터
    const final = JSON.parse(JSON.stringify(data))


    const topHeaders = Object.keys(data) // 최상단 헤더
    const interfaceHeaders = Object.keys(data["interface"]); // 인터페이스 헤더
    const scheduleHeaders = Object.keys(data["schedule"]); // 스케줄 헤더
    const [visible, SetVisible] = useState(false);
    const [Change, SetChange] = useState("a");
    const [Current, SetCurrent] = useState("");
    const [List,SetList] = useState(final);
    const [datadata,SetDataData] = useState(final);
    const component = new Map();



    const [c,SetC] = useState();
    const TreeModifier = (data, key) => {
        const headers = Object.keys(data)
        for (let i = 0 ; i < headers.length; i++){
            if (typeof data != "object"){
                component.set(key, data)
            }
            else if (Array.isArray(data)){
                component.set(key+i.toString(),data[i])
            }
            else if (data == null){
                console.log("null")
                component.set(key,"")
            }

            else{
                TreeModifier(data[headers[i]],headers[i])
            }
        }
    }
    const InterfaceMenu = () => {
        const list = interfaceHeaders.map((name) => {
                return <li key={name} className={"interface"}
                           onClick = {(e)=>{
                               component.clear();
                               SetCurrent(name)
                               const data1 = data["interface"]
                               TreeModifier(data1[name],name)
                               SetList(component)
                               Change =="a" ? SetChange("b") : SetChange("a")
                               console.log(List)

                           }
                           }
                >{"-" + name}</li>
            }
        )
        return (<ul>
            <li key={"interface"} onClick={ () => {
                console.log("인터페이스 상위메뉴 클릭됨")
                SetVisible(!visible)}}>interface</li>
            {visible && <ul>{list}</ul>}

        </ul>)
    }
    const Menu = (data) => {
        const topHeaderList = topHeaders.filter(head => head !== "interface" && head !== "schedule").map((name) => {
                return <li key={name} onClick={ () => {

                    component.clear();
                    SetCurrent(name)
                    const data1 = data["data"]
                    TreeModifier(data1[name],name)
                    console.log("일반메뉴 클릭됨")
                    SetList(component)
                    Change =="a" ? SetChange("b") : SetChange("a")
                }
                }>{name}</li>
            }
        )
        return (<ul>{topHeaderList}</ul>)
    }

    const ScheduleMenu = () => {
        return <ul><li key={"schedule"} onClick={() => {
            visible == true? SetVisible(!visible) : SetVisible(false) // interface 서브메뉴 접기
            console.log("스케쥴 메뉴 클릭됨")
        }}>schedule</li></ul>
    }
    const ScheduleView = () => {

    }

    const Finish = (info) => {
        // const real = JSON.parse(JSON.stringify(datadata))
        const arr = Array.from(info["info"]);

        console.log(arr)
        const a = arr.map((sub) => {
            if (Current == "alias"){
                return <li><label>{sub[0]}</label><input defaultValue={sub[1]} onChange={
                    (e) => {
                        const real = JSON.parse(JSON.stringify(datadata))
                        real[Current][sub[0].charAt(sub[0].length-1)*1] = e.target.value;
                        SetDataData(real)
                    }
                }/></li>
            }
            else if (Current in interfaceHeaders){
                console.log("info")
            }
            else{
                const nums = ["0","1","2","3","4","5","6","7","8","9"]
                if (sub[0].charAt(sub[0].length-1) in nums){ // list인 경우
                    return <li><label>{sub[0].substr(0,sub[0].length-1)}</label><input key={sub[0]} defaultValue={sub[1]} onChange={
                        (e) => {
                            const real = JSON.parse(JSON.stringify(datadata))
                            real[Current][sub[0].substr(0,sub[0].length-1)] = e.target.value
                            SetDataData(real)
                        }
                    }/></li>
                }
                else{
                    return <li><label>{sub[0]}</label><input defaultValue={sub[1]} onChange={
                        (e) => {
                            const real = JSON.parse(JSON.stringify(datadata))
                            real[Current][sub[0]] = e.target.value;
                            SetDataData(real)
                        }
                    }/></li>
                }
            }
        })
        return <ul>{a}</ul>
    }
    return (
        <div>
            <label style={ {color:Color}}  name="appName" className="AppName" >{AppName}</label>

            <div className="TreeContainer">
                <div className="left">
                    <Menu data={data}></Menu>
                    <InterfaceMenu></InterfaceMenu>
                    <ScheduleMenu ></ScheduleMenu>
                </div>

                <div className="right">
                    <div>
                        {<Finish info = {List}></Finish>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TreeEditor