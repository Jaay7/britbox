import Main from "./Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";
import SignupForm from "./SignupForm";
import Plan from "./Plan";
import Payment from "./Payment";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Navigate to="/account" replace />} />
            <Route path="/account" element={<SignupForm />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
