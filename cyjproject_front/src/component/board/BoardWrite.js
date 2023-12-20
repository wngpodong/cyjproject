import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BoardFrm from "./BoardFrm";

const BoardWrite=()=>{
  const [boardTitle, setBoardTitle] = useState("");  
  const [boardContent, setBoardContent] = useState("");
  const [boardFile, setBoardFile] = useState([]); 
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  
  const write = () => {
    
    if (boardTitle !== "" && boardContent !== "") {
      
      const form = new FormData();
      form.append("boardTitle", boardTitle);
      form.append("boardContent", boardContent);
      for (let i = 0; i < boardFile.length; i++) {
        form.append("boardFile", boardFile[i]);
      }
      const token = window.localStorage.getItem("token");
      axios
        .post("/board/insert", form, {
          headers: {           
            contentType: "multipart/form-data",
            processData: false,
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data > 0) {
            navigate("/board");
          }
        })
        .catch((res) => {
          console.log(res.response.status);
        });
    } else {
      Swal.fire("입력값을 확인하세요.");
    }
  };
  return (
    <div>
      <div className="board-frm-title">게시글 작성</div>
      <BoardFrm
        boardTitle={boardTitle}
        setBoardTitle={setBoardTitle}
        boardContent={boardContent}
        setBoardContent={setBoardContent}
        boardFile={boardFile}
        setBoardFile={setBoardFile}
        fileList={fileList}
        setFileList={setFileList}
        buttonEvent={write}
        type="write"
      />
    </div>
  );
}
export default BoardWrite;