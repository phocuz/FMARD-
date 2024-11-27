import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Hero from "./Hero"
import SignUp from "./SignUp"
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
