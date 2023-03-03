import { createSlice } from '@reduxjs/toolkit'



const initialState = {



  current_user: {
    username: "",
    email: "",
    photoURL: ""
  }

  ,

  chat: [



  ]




}





export const counterSlice = createSlice({



  name: 'counter',

  initialState,


  reducers: {



    save_chat: (state, action) => {


      state.chat.push(action.payload)

    },


    userLogin: (state, action) => {
      state.current_user = action.payload

    },



  },


})







export const { save_chat, userLogin } = counterSlice.actions

export default counterSlice.reducer