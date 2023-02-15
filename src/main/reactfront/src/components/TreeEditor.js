import React, {useEffect, useState, useRef} from "react"
import '/Users/junghyun/IdeaProjects/hhhard/src/main/reactfront/src/App.css';
import yaml from "js-yaml";
import axios from "axios";
import Schedule from "./Schedule";
import Radio from "./Radio";
import Param from "./Param";

const TreeEditor =  ({AppName ,  Content , Color}) => {

    // 필요한 데이터셋 구성
    const data = yaml.load(Content) // 원본데이터
    const final = JSON.parse(JSON.stringify(data))
    const yam = require('js-yaml')

    const topHeaders = Object.keys(data) // 최상단 헤더
    const interfaceHeaders = Object.keys(data["interface"]); // 인터페이스 헤더
    const scheduleHeaders = Object.keys(data["schedule"]); // 스케줄 헤더
    const [visible, SetVisible] = useState(false);
    const [Change, SetChange] = useState("S");
    const [Current, SetCurrent] = useState("");

    const [List, SetList] = useState(final);
    const [datadata, SetDataData] = useState(final);
    const component = new Map();

    const keys = Object.keys(datadata["schedule"]["OrderCollect1"]["params"])
    const size = Object.keys(datadata["schedule"]["OrderCollect1"]["params"]).length
    const a = Object.keys(datadata["schedule"])
    const arrr = [];

    for (let i = 0; i < size; i++) {
        arrr.push({id:i,key:keys[i],value:datadata["schedule"]["OrderCollect1"]["params"][keys[i]]})
}

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
                               Change == "S" ? SetChange("NO") : SetChange("NO")
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
                    Change == "S" ? SetChange("NO") : SetChange("NO")
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
            Change == "NO" ? SetChange("S") : SetChange("S")

        }}>schedule</li></ul>
    }
    // function Schedule1(items) {
    //     const [selectedItem, setSelectedItem] = useState(items[0]);
    //
    //     const handleSelectedItemChange = (e) => {
    //         setSelectedItem(e.target.value);
    //     };
    //
    //     return (
    //         <select value={selectedItem} onChange={handleSelectedItemChange}>
    //             {items.map((item) => (
    //                 <option key={item} value={item}>
    //                     {item}
    //                 </option>
    //             ))}
    //         </select>
    //     );
    // }
    const ScheduleView = () => {
        const [selectedSchedule,setSelectedSchedule] = useState("")
        const [selectedService,setSelectedService] = useState("")

        const handleChildStateChange = (newState) => {
            setSelectedSchedule(newState);
            console.log(newState)
            console.log(selectedSchedule)
        };
        const handleChildStateChange1 = (newState) => {
            setSelectedService(newState);
            console.log(newState)
        };

        return(
            <div>
                <div>
                    <label>스케줄 명</label><Schedule items={scheduleHeaders} ></Schedule>
                </div>
                <div>
                    <label>서비스 명</label><Schedule items={interfaceHeaders} ></Schedule>
                </div>
                <hr/>
                <div>
                    <Param initialKeyValues={arrr}></Param>
                </div>
                <div>
                    <label>타입</label><Radio></Radio>
                </div>

            </div>

        )
    }
    const SaveBtn = () => {
        return <button onClick={
            (e)=>{
                const Sending_data= yaml.dump(datadata)
                axios.post("/db/" + AppName,{"appName":AppName , "content":Sending_data})
                    .then((response) => console.log(response));
                alert("저장되었습니다.")
            }
        }
        >저장</button>

    }


    const Finish = (info) => {

        const arr = Array.from(info["info"]);
        const a = arr.map((sub) => {

            if (Current == "alias"){
                return <li><label>{sub[0]}</label><input defaultValue={sub[1]} onChange={
                    (e) => {
                        const real = JSON.parse(JSON.stringify(datadata))
                        real[Current][sub[0].charAt(sub[0].length-1) * 1] = e.target.value;
                        SetDataData(real)
                    }
                }/></li>
            }
            else if (interfaceHeaders.includes(Current)){
                return <li><label>{sub[0]}</label><input defaultValue={sub[1]} onChange={
                    (e) => {
                        const real = JSON.parse(JSON.stringify(datadata))
                        // deep copy를 위함..
                        real["interface"][Current][sub[0]] = e.target.value;
                        SetDataData(real)
                    }
                }/></li>
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
                    <SaveBtn></SaveBtn>
                </div>

                <div className="right">
                    <div>
                        {Change == "NO"? <Finish info = {List}></Finish> : <ScheduleView/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TreeEditor