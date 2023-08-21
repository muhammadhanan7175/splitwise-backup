// expenseDetailsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const expenseDetailsSlice = createSlice({
  name: 'expenseDetails',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    emptyState: (state) => {
        state = []
    },
    updateToPay: (state, action) => {
      const { userId, toPay } = action.payload;
      const expense = state.find(expense => expense.userId === userId);
      if (expense) {
        expense.toPay = toPay;
      }
    },
    updatePaid: (state, action) => {
      const { userId, paid } = action.payload;
      const expense = state.find(expense => expense.userId === userId);
      if (expense) {
        expense.paid = paid;
      }
    },
  },
});

export const { addExpense, updateToPay, updatePaid, emptyState } = expenseDetailsSlice.actions;
export const selectState = (state) => state.expenseDetailsSlice
export default expenseDetailsSlice.reducer;
