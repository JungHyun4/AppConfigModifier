import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";


const ModeSelector = () => {
    return (
    <div className="mode">
        <button className="text-mode">Text Mode</button><button className="tree-mode">Tree Mode</button>
    </div>
    )
}


export default ModeSelector