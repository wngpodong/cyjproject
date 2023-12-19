import { Route, Routes } from "react-router-dom";
import Header from "./component/common/Header";
import Login from "./component/member/Login";
import Join from "./component/member/Join";
import Board from "./component/board/Board";

function App() {
  return (
    <div className="whole-wrap">
      <div className="cozyhouse-wrap">
        <Header />
        <div className="cozyhouse-content">
          <Routes>
            <Route
              path="/login"
              element={
                <Login />
              }
            />
            <Route
              path="/join"
              element={
                <Join />
              }
            />
            <Route path="/board/*" element={<Board />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
