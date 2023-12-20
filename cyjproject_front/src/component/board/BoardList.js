import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import { useNavigate } from "react-router-dom";
import {Button1} from "../util/Button";
import axios from "axios";
import "./board.css";
const BoardList=(props)=>{
  const member = props.member;
  const [boardList, setBoardList] =useState([]);
  const [reqPage, setReqPage] = useState(1); //1로 시작함
  const [pageInfo, setPageInfo] = useState({});
  const [boardType, setBoardType] = useState(0);
  useEffect(() => {
    axios
        .get("/board/list/" + reqPage)
        .then((res) => {
            setBoardList(res.data.boardList);
            setPageInfo(res.data.pi);
        })
        .catch((res) => {
        });
}, [reqPage]);
    return (
        <div>
            <div className="board-list-wrap">
                <ul className="board-list">
                    <li id="board-list-li-wrap">
                        {boardList.map((board, index) => {
                            return <BoardItem key={"board" + index}
                                board={board}
                                member={member}
                                index={index}
                            />
                        })}

                    </li>
                </ul>
                <div className="board-page">
                    <Pagination
                      reqPage={reqPage}
                      setReqPage={setReqPage}
                      pageInfo={pageInfo}
                      setData={setBoardList}
                    />
                </div>
            </div>
        </div>
    )
}
const BoardItem = (props) => {
    const board = props.board;
    const navigate = useNavigate();
    const write = () => {
      navigate("write");
    };
    return (
      <div className="board-item">
        <div className="board-item-info">
          <div className="board-item-no">{board.boardNo}</div>
          <div className="board-item-title">{board.boardTitle}</div>
          <div className="board-item-writer">{board.memberId}</div>
          <div className="board-item-date">{board.boardDate}</div>
        </div>
        <div className="write-btn">
          <Button1 text="글쓰기" clickEvent={write}></Button1>
        </div>
      </div>
    );
};
export default BoardList;