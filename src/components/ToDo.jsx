import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import moment from "moment";
import axios from "axios";
import { baseURL } from "../utils/constant";

const ToDo = ({ text, id, status, createdAt, updatedAt, setUpdateUI, setShowPopup, setPopupContent }) => {
  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };


  const formattedCreatedAt = moment(createdAt).format("YYYY-MM-DD HH:mm:ss");
  const formattedUpdatedAt = moment(updatedAt).format("YYYY-MM-DD HH:mm:ss");

  return (
    <div className="toDo">
      <div  style={{ color: "#5a3ff3" }}>{text}</div>
      <div>Status: {status}</div>
      <div>Created At: {formattedCreatedAt}</div>
      <div>Updated At: {formattedUpdatedAt}</div>
      <div className="icons">
        <AiFillEdit className="icon"  style={{ color: "#00ff00", cursor: "pointer" }} onClick={updateToDo} />
        <RxCross1 className="icon"  style={{ color: "#ff0000", cursor: "pointer" }} onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default ToDo;
