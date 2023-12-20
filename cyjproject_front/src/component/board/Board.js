import { Route, Routes } from "react-router-dom";
import "./board.css";
import BoardList from "./BoardList";
import { useState } from "react";
import BoardWrite from "./BoardWrite";

const Board = ()=>{
    const [member, setMember] = useState({});

    return(
        <div className="board-all-wrap">
            <div className="board-title"><h1>공지사항</h1></div>
            <Routes>    
                <Route path="write" element={<BoardWrite />} />    
                <Route path="*" element={<BoardList member={member}/>} />
            </Routes>                
        </div>
    );
};
export default Board;