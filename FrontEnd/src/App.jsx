
import { useEffect, useState } from "react"
import { Route, Routes, } from "react-router-dom";
import SignUp from './Pages/SignUp';
import SignIn from "./Pages/SignIn.jsx";
import Dashboard from './Pages/Dashboard.jsx';
import Protected from './Components/Protected';
import axios from "axios";
import Transfer from "./Pages/Transfer.jsx";
import Success from "./Pages/Success.jsx";

function App() {

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setAuth(res.status === 200 ? true : false)
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/success/:amount" element={<Success />} />
      </Routes >
    </>
  )
}


export default App