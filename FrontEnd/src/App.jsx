
import { useEffect, useState } from "react"
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import SignUp from './Pages/SignUp';
import SignIn from "./Pages/SignIn.jsx";
import Dashboard from './Pages/Dashboard.jsx';
import Protected from './Components/Protected';

function App() {


  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/dashboard" element={
        <Protected >
          <Dashboard />
        </Protected >
      } />

    </Routes >
  )
}


export default App