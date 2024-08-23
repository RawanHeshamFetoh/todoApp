import { configureStore , createSlice } from "@reduxjs/toolkit";

export const TitleSlice= createSlice({
    name: 'title',
    initialState: {
        title: [],
        list:[],
        selectList:[]
    },
    reducers: {
        updateTitle: (state, action) => {
            state.title = [...state.title,action.payload]
        },
        updateList: (state, action) => {
            state.list = [...state.list,action.payload]
        },
        updateSelectList : (state, action)=>{
            state.selectList= [...state.selectList,action.payload]
        }
    },
})

export const { updateTitle , updateList , updateSelectList } = TitleSlice.actions;
export const store = configureStore({
    reducer: TitleSlice.reducer,
    })
    
