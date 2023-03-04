



import Home from "./screen/App"
import Waitlist from "./screen/Waitlist"
import Thankyou from "./screen/Thankyou"
import Chat from "./screen/chat"
import PrivChat from "./screen/privChat"
import RoomChat from "./screen/roomChat"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <ToastContainer />


            <Router>
                <Routes>

                    <Route element={<Waitlist />} path="/foresome" />
                    <Route element={<Chat />} path="/foresome/chat" />
                    <Route element={<PrivChat />} path="/foresome/privChat" />
                    <Route element={<RoomChat />} path="/foresome/roomChat" />
                    {/* <Route element={<Waitlist />} path="foresome/waitlist" /> */}
                    <Route element={<Thankyou />} path="foresome/thankyou" />
                </Routes>
            </Router>


        </div>
    )

}



export default App