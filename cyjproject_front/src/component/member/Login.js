import axios from "axios";
import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Input from "../util/InputFrm";
import {Button1, Button2} from "../util/Button";

const Login = () => {
    const [memberId, setMemberId] = useState("");
    const [memberPw, setMemberPw] = useState("");
    const navigate = useNavigate();

    // 비밀번호 입력 후 엔터 -> 로그인 클릭 함수
    const enterEvent = (e) => {
        if (e.key === "Enter") {
            login();
        }
    };

    const login = () => {
        const member = { memberId, memberPw };
        axios
            .post("/member/login", member)
            .then((res) => {
                if (res.data === "") {
                    Swal.fire("아이디 또는 비밀번호를 확인하세요.")

                }
            })
    };
    return (
        <div className="login-wrap">
            <div className="login-title">
                <h3>로그인</h3>
            </div>
            <div className="login-content">
                <div className="login-input">
                    <Input
                        type="text"
                        data={memberId}
                        setData={setMemberId}
                        content="memberId"
                        placeholder="아이디"
                    />
                    <Input
                        type="password"
                        data={memberPw}
                        setData={setMemberPw}
                        content="memberPw"
                        placeholder="비밀번호"
                        enter={enterEvent}
                    />
                </div>
                <div className="login-btn-box">
                    <Button1 text="로그인" clickEvent={login} />
                </div>
            </div>
            <div className="login-search-box">
                <ul>
                    <li>
                        <Link to="/findPw">비밀번호 찾기</Link>
                    </li>
                    <li>
                        <Link to="/findId">아이디 찾기</Link>
                    </li>
                </ul>
            </div>

            <div className="login-join-btn">
                <Link to="/join">
                    <Button2 text="회원가입" />
                </Link>
            </div>
        </div>
    )
}
export default Login;