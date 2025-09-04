import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import api from '../../rest/api'


interface ExampleState {
  count: number
  loading: boolean
  error: string | null
}


const initialState: ExampleState = {
  count: 0,
  loading: false,
  error: null,
}


export const fetchCount = createAsyncThunk<number>(
  'fetchCount',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<{ value: number }>('/570c5e5c-61ab-4b10-8d05-2c31a72e93a3')
      return response.data.value
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch')
    }
  }
)

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
  },
  extraReducers:(builder) =>{
  builder
      .addCase(fetchCount.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCount.fulfilled, (state, action) => {
        state.loading = false
        state.count += action.payload
      })
      .addCase(fetchCount.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { increment, decrement, incrementByAmount } = exampleSlice.actions
export default exampleSlice.reducer
