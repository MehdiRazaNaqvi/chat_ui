import { createSlice } from '@reduxjs/toolkit'



const initialState = {



  current_user: {
    // username: "",
    // email: "",
    // photoURL: ""
  }

  ,

  chat: [



  ],

  notifications: [

  ],



}





export const counterSlice = createSlice({



  name: 'counter',

  initialState,


  reducers: {



    save_chat: (state, action) => {


      state.chat?.push(action.payload)


    },


    userLogin: (state, action) => {
      state.current_user = action.payload

    },


    addNotifications: (state, action) => {
      state.notifications = [...state.notifications, action.payload]
    },


  },


})







export const { save_chat, userLogin, addNotifications } = counterSlice.actions

export default counterSlice.reducer