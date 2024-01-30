import axios from "axios"
import { useEffect, useState } from "react"
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import SignUp from './Pages/SignUp';
import SignIn from "./Pages/SignIn.jsx";
import Dashboard from './Pages/Dashboard.jsx';

function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then((res) => {
      setAuth(res.status === 200 ? true : false)
    })
  }, [])

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes >
  )
}


export default App