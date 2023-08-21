import { configureStore } from '@reduxjs/toolkit'
import expenseDetailsReducer from './ExpenseDetailSlice';
export  const store = configureStore({
  reducer: {
    expenseDetails: expenseDetailsReducer,
  },
})
export default store