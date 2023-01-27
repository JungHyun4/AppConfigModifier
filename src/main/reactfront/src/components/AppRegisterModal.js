import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function AppRegisterModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[AppName , SetAppName]= useState("")
    const[Email , SetEmail] = useState("")
    const[ManagerName ,SetManagerName ] = useState("")
    const[UserId, SetUserId] = useState("")
    const[UserName , SetUserName] = useState("")
    const[Config, SetConfig] = useState("")
    const Init = () => {
        SetAppName("");
        SetEmail("");
        SetManagerName("");
        SetUserId("");
        SetUserName("");
        SetConfig("");
    }
    return (
        <>
            <button variant="primary" onClick={handleShow}>
                Register
            </button>
            <Modal style={{background:"black"}} show={show} >
                <Modal.Header>
                    <Modal.Title>Config Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">app name</label>
                                <input onChange={(e)=>{SetAppName(e.target.value)
                                    console.log(e.target.value)}} type="text" className="form-control" name="app_name"/>
                                <label htmlFor="exampleFormControlInput1" className="form-label">manager Email</label>
                                <input onChange={(e)=>{SetEmail(e.target.value)}} type="email" className="form-control"/>
                                <label htmlFor="exampleFormControlInput1" className="form-label">manager name</label>
                                <input onChange={(e)=>{SetManagerName(e.target.value)}} type="text" className="form-control"/>
                                <label htmlFor="exampleFormControlInput1" className="form-label">user id</label>
                                <input onChange={(e)=>{SetUserId(e.target.value)}} type="text" className="form-control"/>
                                <label htmlFor="exampleFormControlInput1" className="form-label">user name</label>
                                <input onChange={(e)=>{SetUserName(e.target.value)}} type="text" className="form-control"/>
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">configuration</label>
                                <textarea onChange={(e)=>{SetConfig(e.target.value)}} className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{
                        if(AppName == ""){
                            alert("app name은 필수 입력항목입니다.")
                        }
                        else if (AppName.at(-1) != "l"){
                            alert("파일 형식을 확인해주세요.")
                        }
                        else {
                            axios.post("/db/config", {
                                "appN1ame": AppName,
                                "appPath": "/Users/junghyun/IdeaProjects/hhhard/src/main/java/com/example/hhhard/apps/" + AppName,
                                "managerEmail": Email,
                                "managerName": ManagerName,
                                "userId": UserId,
                                "userName": UserName,
                                "content": Config
                            })
                                .then((response) => console.log(response));
                                alert("등록되었습니다.");
                                Init();

                        }
                    }
                    }>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


// render(<Example />);


export default AppRegisterModal;