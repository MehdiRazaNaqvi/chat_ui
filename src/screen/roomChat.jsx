// import { auth } from "../config/firebase"
// import { GoogleAuthProvider } from "firebase/auth"
// import { signInWithPopup } from "firebase/auth"




import "../style/chat.css"

import io from "socket.io-client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { save_chat, addNotifications } from "../store/counterslice"

import { useDispatch, useSelector } from "react-redux"


import { Input, Button, Form } from "reactstrap"



// const socket = io.connect("https://socket--io.herokuapp.com/")

const socket_server = "http://localhost:4000"
const socket = io.connect(socket_server)

// const socket_server_reciever = "http://localhost:5000"
// const socketReciever = io.connect(socket_server_reciever)






const App = () => {

    const count = useSelector(state => state.counter)

    const dispatch = useDispatch()



    const [message, setmessage] = useState('')
    const [room, setRoom] = useState('')
    const [notifications, setNotifications] = useState([])



    // const [chat, setchat] = useState([])


    const navigate = useNavigate()




    const sendchat = () => {




        socket.emit("chat", { mess: message, name: count?.current_user?.username, user_pic: count?.current_user?.photoURL, time: time, email: count?.current_user?.email }, room)


        // const headers = {
        //     'Content-Type': 'application/json;charset=UTF-8',
        //     "Access-Control-Allow-Origin": "*",
        //     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        //     'Access-Control-Allow-Headers': '*'
        // }



        // fetch(`${api_url}/savechat`, {
        //     method: "POST",
        //     headers: headers,
        //     body: JSON.stringify({ mess: message, name: count.current_user.username, user_pic: count.current_user.photoURL, time: time })

        // })

        //     .then(r => r.json())
        //     .then(res => { console.log(res) })



        setmessage('')







    }



    const join_room = () => {
        socket.emit('join_room', room)
    }

    // console.log(socket.id)




    useEffect(() => {

        socket.on("chat", (payload) => {

            dispatch(save_chat(payload))
            console.log(payload)

        })


        // socket.emit("load_chats", (payload) => {

        //     dispatch(save_chat(payload))
        //     console.log(payload)

        // })



        socket.on("room-joined", (payload) => {


            dispatch(addNotifications(payload))
        })

    }, [])



    // const google_login = () => {






    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider)
    //         .then((result) => {



    //             const credential = GoogleAuthProvider.credentialFromResult(result);
    //             const token = credential.accessToken;

    //             const user = result.user;




    //             const obj = { username: user.displayName, photoURL: user.photoURL, uid: user.uid }


    //             dispatch(current_user(obj))

    //             localStorage.setItem("chat-user", JSON.stringify(obj))




    //         }).catch((error) => {

    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorCode, errorMessage)
    //             // const email = error.email;

    //             // const credential = GoogleAuthProvider.credentialFromError(error);

    //         });





    // }






    // const delete_msg = (v) => {

    //     dispatch(delete_msg_redux(v))



    //     const headers = {
    //         'Content-Type': 'application/json;charset=UTF-8',
    //         "Access-Control-Allow-Origin": "*",
    //         'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    //         'Access-Control-Allow-Headers': '*'
    //     }

    //     // fetch('http://localhost:4000/delete-msg', {
    //     fetch(`${api_url}/delete-msg`, {
    //         method: "post",
    //         headers: headers,
    //         body: JSON.stringify(v)

    //     })

    // }










    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();





    return (



        <div className="chat_base" style={{ width: "50rem", height: "min-content", minHeight: "100vh", position: "relative" }}>






            <div className="chat_space" style={{ backgroundColor: "white", marginBottom: "6rem" }}>




                {count?.chat?.map((v, i) => (

                    <div style={{ position: "relative" }} className={count?.current_user?.email == v.email ? "message_bg own_msg" : "message_bg"} key={i}>

                        <img src={v.user_pic} referrerPolicy="no-referrer" className="text_pic" style={{ height: "3.5rem", width: "3.5rem" }} />

                        <span style={{ fontSize: "1.2rem", color: "lightgray", position: "absolute", top: "0.5rem", left: "5rem" }}>  {v.name} </span>

                        <span style={{ fontSize: "1.2rem", width: "50%", wordBreak: "break-word" }}>  {v.mess} </span>
                        {/* <p style={{ fontSize: "1rem" }} className={count.current_user?.email == v.email ? "text-time" : "text-time-other"} >{v.time}</p> */}



                        {/* <img style={{ height: "1.5rem", width: "1.5rem" }} className={count.current_user?.email == v.email ? "del-img" : "invisible"} src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/000000/external-delete-ecommerce-user-interface-inkubators-detailed-outline-inkubators.png" /> */}



                    </div>

                ))}




            </div>






            {count?.current_user?.email ?
                <>

                    {/* <span className="send_tab">

                        {count.notifications?.map((v, i) =>

                            <div style={{}} className="join_noti" key={i} >
                                Someone Joined {v}
                            </div>
                        )}

                    </span> */}


                    <span className="send_tab">


                        <Form onSubmit={(e) => { e.preventDefault(); join_room() }} style={{ padding: "0px", margin: "0px", width: "100%", display: "flex" }}>
                            <Input required style={{ height: "4rem" }} size="lg" className="form-control" type="text" placeholder="Room Name" value={room} onChange={(e) => setRoom(e.target.value)} />

                            <Button type="submit" color="success" size="lg" className="send_btn">Join</Button>

                        </Form>
                    </span>
                    <span className="send_tab">


                        <Form onSubmit={(e) => { e.preventDefault(); sendchat() }} style={{ padding: "0px", margin: "0px", width: "100%", display: "flex" }}>
                            <Input required style={{ height: "4rem" }} size="lg" className="form-control" type="text" placeholder="Type message" value={message} onChange={(e) => setmessage(e.target.value)} />

                            <Button type="submit" color="success" size="lg" className="send_btn">Send</Button>

                        </Form>
                    </span>
                </>

                :



                <span className="send_tab" style={{ position: "absolute", bottom: "0px" }} >
                    <p className="login_to_join" style={{ fontSize: "2rem", backgroundColor: "lightgray", width: "100%", textAlign: "center", position: "absolute" }} onClick={() => navigate("/foresome")}>Log in to join the chat</p>
                </span>
            }








        </div>


    )
}

export default App