import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import { Routes, Route } from "react-router-dom";
import React from "react";
import axios from "axios";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {

    if (props.dialogsData.length===0) {
        axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/dialogsData").then(response => {
            props.setDialogs(response.data)
        })
    }

    let dialogsElements = props.dialogsData.map((dialog) => (
        <Dialog
            key={dialog.id}
            image={dialog.image}
            username={dialog.name}
            id={dialog.id}
        />
    ));
        return (
            <div className={style.Dialogs}>
                <div className={style.DialogItems}>{dialogsElements}</div>
                <div className={style.Messages}>
                    <Routes>
                        <Route
                            path="/1"
                            element={
                                <MessagesContainer/>
                            }
                        />
                    </Routes>
                </div>
            </div>
        );
}
export default Dialogs;
