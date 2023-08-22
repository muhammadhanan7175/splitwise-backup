import { configureStore } from '@reduxjs/toolkit'
import expenseDetailsReducer from './ExpenseDetailSlice';
import currentUserReducer from "../Redux/CurrentUserSlice"
export  const store = configureStore({
  reducer: {
    expenseDetails: expenseDetailsReducer,
    currentUser : currentUserReducer
  },
})
export default store