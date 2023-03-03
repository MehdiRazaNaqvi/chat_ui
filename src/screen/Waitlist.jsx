


import "../style/waitlist.css"
// import "../style/app.css"

// import Download1 from "../images/download1.png"
// import Download2 from "../images/download2.png"
// import Mobile1 from "../images/mobile1.png"
import Waitlist from "../images/waitlist2.png"
import { Form, FormGroup, Input, Button, FormFeedback } from "reactstrap"

import { useState } from "react"

// import { toast } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux"


import { userLogin } from "../store/counterslice"






const App = () => {


    const [email, set_email] = useState('');
    const [name, set_name] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const validateEmail = (email) => {

        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );


    };



    const setLogin = () => {
        dispatch(userLogin({ username: name, email, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" }))

        navigate('/foresome/chat')

    }



    return (

        <div style={{ height: "100vh" }} className="waitlist_base foresome_screen1">


            <div className="screen1_left">


                <h1 className="screen1_heading">Join the waitlist and be the first to be notified once we've launched</h1>


                <Form onSubmit={(e) => { e.preventDefault(); setLogin() }} className="waitlist_input">


                    <FormGroup className="formgroup">

                        <Input invalid={email != '' ? validateEmail(email) ? false : true : false} required onChange={(e) => set_email(e.target.value)} className="input" placeholder="Enter Email" />

                        <FormFeedback invalid></FormFeedback>


                    </FormGroup>


                    <FormGroup className="formgroup" >

                        <Input required onChange={(e) => set_name(e.target.value)} className="input" placeholder="Enter Name" />

                    </FormGroup>



                    <Button size="lg" type="primary" color="success" className="button_waitlist">Join Waitlist</Button>






                </Form>


            </div>


            <div className="screen1_right">

                <img style={{ height: "80%" }} src={Waitlist} className="mobile1" />

            </div>


            <div className="waitlist_right">

            </div>

        </div>


    )

}






export default App