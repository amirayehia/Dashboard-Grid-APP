import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UsersState {
    contents: {
        created_on: string, email: string, group: string, name: string, status: string, user_name: string
    }[],
    isLoading: boolean,
    error: string | undefined,
}

const initialState: UsersState = {
    contents: [],
    isLoading: false,
    error: '',
}

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await axios('https://my-project-dced9-default-rtdb.firebaseio.com/data.json');
        const data = await res.data['-Nioegg3UZJhxJ-KpGwH'];
        console.log('maiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiin')
        console.log(data)
        return data
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = usersSlice.actions

export default usersSlice.reducer