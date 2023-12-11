import { useEffect, useState } from "react";
import Input from "../util/InputFrm";
import { Button1, Button2 } from "../util/Button";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Join = () => {
//     const navigate = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberPw, setMemberPw] = useState("");
  const [memberPwRe, setMemberPwRe] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [memberBirth, setMemberBirth] = useState("");
  const [memberGender, setMemberGender] = useState("");
 
  const [checkIdMsg, setCheckIdMsg] = useState("");
  const [checkPwMsg, setCheckPwMsg] = useState("");
  const [checkPwReMsg, setCheckPwReMsg] = useState("");
  const [checkEmailMsg, setCheckEmailMsg] = useState("");
  const [checkPhoneMsg, setCheckPhoneMsg] = useState("");
  const [checkBirthMsg, setCheckBirthMsg] = useState("");
  const [checkNameMsg, setCheckNameMsg] = useState("");
//   // 유효성검사 메세지 색 변경위한 클래스 추가할 때 씀
  const [useId, setUseId] = useState(false);

//   const [selected, setSelected] = useState();
//   const [subInformation, setSubInformation] = useState([]);
//   const [subTag, setSubTag] = useState([]);
//   const [subValue, setSubValue] = useState([]);
  const idCheck = () => {
    const idReg = /^[a-zA-Z0-9]{4,8}$/;

    if (!idReg.test(memberId)) {
      // 정규표현식 만족하지 못했을 때
      setCheckIdMsg("아이디는 영어 대/소문자/숫자로 4~8글자 입니다.");
      setUseId(false);
    } else {
      axios
        .get("/member/checkId/" + memberId)
        .then((res) => {
          if (res.data == 0) {
            setCheckIdMsg("사용 가능한 아이디 입니다.");
            setUseId(true);
          } else {
            setCheckIdMsg("이미 사용중인 아이디입니다.");
            setUseId(false);
          }
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };
  const clickRadio = (e) => {
    setMemberGender(e.target.value);
  };
  const pwCheck = () => {
    const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if (!pwReg.test(memberPw)) {
      setCheckPwMsg(
        "최소 8자, 최소 하나의 문자, 특수문자 및 숫자를 포함해야 합니다."
      );
    } else {
      setCheckPwMsg("");
    }
  };

  const pwReCheck = () => {
    if (memberPw !== memberPwRe) {
      setCheckPwReMsg("비밀번호가 일치하지 않습니다.");
    } else {
      setCheckPwReMsg("");
    }
  };
  const nameCheck = () => {
    const nameReg = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,7}$/;
    if (!nameReg.test(memberName)) {
      setCheckNameMsg("이름은 2~7글자만 가능합니다.");
    } else {
      setCheckNameMsg("");
    }
  };

  const birthCheck = () => {
    const birthReg = /^[0-9]{4}-[0-9]{2}-[0-9]{2}/;
    if (!birthReg.test(memberBirth)) {
      setCheckBirthMsg("ex) 1990-01-01 형식으로 입력해주세요.");
    } else {
      setCheckBirthMsg("");
    }
  };

  const phoneCheck = () => {
    const phoneReg = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}/;
    if (!phoneReg.test(memberPhone)) {
      setCheckPhoneMsg("ex) 010-123(4)-1234 형식으로 입력해주세요.");
    } else {
      setCheckPhoneMsg("");
    }
  };

  const emailCheck = () => {
    const emailReg = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
    if (!emailReg.test(memberEmail)) {
      setCheckEmailMsg("ex) weple@weple.co.kr 형식으로 입력해주세요. ");
    } else {
      setCheckEmailMsg("");
    }
  };

  return (
    <div className="joinFrm">
      <div className="joinFrm-content">
        <JoinInputWrap
          data={memberId}
          setData={setMemberId}
          type="type"
          content="memberId"
          label="아이디"
          es=" *"
          checkMsg={checkIdMsg}
          placeholder="아이디를 입력해주세요"
          blurEvent={idCheck}
          msgClass={useId ? "check-blue" : "check-msg"}
        />
        <JoinInputWrap
          data={memberPw}
          setData={setMemberPw}
          type="password"
          content="memberPw"
          label="비밀번호"
          es=" *"
          checkMsg={checkPwMsg}
          placeholder="비밀번호를 입력해주세요"
          blurEvent={pwCheck}
          msgClass="check-msg"
        />
        <JoinInputWrap
          data={memberPwRe}
          setData={setMemberPwRe}
          type="password"
          content="memberPwRe"
          label="비밀번호 확인"
          es=" *"
          checkMsg={checkPwReMsg}
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          blurEvent={pwReCheck}
          msgClass="check-msg"
        />
        <JoinInputWrap
          data={memberName}
          setData={setMemberName}
          type="type"
          content="memberName"
          label="이름"
          es=" *"
          checkMsg={checkNameMsg}
          blurEvent={nameCheck}
          msgClass="check-msg"
        />
        <JoinInputWrap
          data={memberPhone}
          setData={setMemberPhone}
          type="type"
          content="memberPhone"
          label="전화번호"
          es=" *"
          checkMsg={checkPhoneMsg}
          placeholder="ex) 010-1234-1234"
          blurEvent={phoneCheck}
          msgClass="check-msg"
        />

        <div className="join-input-wrap">
          <div>
            <div className="label">
              <label>
                성별
                <span className="join-essential"> *</span>
              </label>
            </div>
            <div className="input">
              <input
                type="radio"
                value="M"
                id="male"
                name="memberGender"
                checked={memberGender === "M"}
                onChange={clickRadio}
              />
              <label htmlFor="male">남자</label>
              <input
                type="radio"
                value="F"
                id="female"
                name="memberGender"
                checked={memberGender === "F"}
                onChange={clickRadio}
              />
              <label htmlFor="female">여자</label>
            </div>
          </div>
        </div>

        <JoinInputWrap
          data={memberBirth}
          setData={setMemberBirth}
          type="type"
          content="memberBirth"
          label="생년월일"
          es=" *"
          checkMsg={checkBirthMsg}
          placeholder="ex) 1990-01-01"
          blurEvent={birthCheck}
          msgClass="check-msg"
        />
        <JoinInputWrap
          data={memberEmail}
          setData={setMemberEmail}
          type="type"
          content="memberEmail"
          label="이메일"
          es=" *"
          checkMsg={checkEmailMsg}
          placeholder="ex) weple@weple.co.kr"
          blurEvent={emailCheck}
          msgClass="check-msg"
        />

      
       
      </div>
      <div className="join-agree-btn">
        <div>
          <Button1 text="회원가입" />
        </div>
      </div>
    </div>
  );
};

const JoinInputWrap = (props) => {
  const data = props.data;
  const setData = props.setData;
  const type = props.type;
  const content = props.content;
  const label = props.label;
  const es = props.es;
  const blurEvent = props.blurEvent;
  const checkMsg = props.checkMsg;
  const placeholder = props.placeholder;
  const msgClass = props.msgClass;

  return (
    <div className="join-input-wrap">
      <div>
        <div className="label">
          <label htmlFor={content}>
            {label}
            <span className="join-essential">{es}</span>
          </label>
        </div>
        <div className="input">
          <Input
            type={type}
            data={data}
            setData={setData}
            content={content}
            blurEvent={blurEvent}
            placeholder={placeholder}
          />
        </div>
      </div>
      <div className={msgClass}>{checkMsg}</div>
    </div>
  );
};

export default Join;