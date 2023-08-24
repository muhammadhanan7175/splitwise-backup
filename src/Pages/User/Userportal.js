import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  updateToPay,
  updatePaid,
} from "../../Redux/ExpenseDetailSlice";
import { db, auth } from "../../Firebase/Firebase-config";
import "./Userportal.css";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../Redux/CurrentUserSlice";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";

function Userportal() {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const expenseDetails = useSelector((state) => state.expenseDetails);
  const currentUserEmail = user?.email;
  

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");

  const [splitPopupOpen, setSplitPopupOpen] = useState(false);
  const [payPopupOpen, setPayPopupOpen] = useState(false);
  const [selectedEmailIndex, setSelectedEmailIndex] = useState(-1);
  const [amountToPay, setAmountToPay] = useState(0);
  const [showLoggerInput, setShowLoggerInput] = useState(false);
  const [split, setSplit] = useState(false);

  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser.value);

  useEffect(() => {
    const loggedInUser = auth.user ? auth.user.currentEmail : "";

    if (loggedInUser) {
      setLoggerState({ ...loggedInUser, loggerEmail: currentUserEmail });
      dispatch(setCurrentUser(loggedInUser));
    }
  }, []);

  const [loggerState, setLoggerState] = useState({
    loggerEmail: currentUserEmail,
    loggerToPay: 0,
    loggerPaid: 0,
  });

  const handleAddExpense = (userId, toPay, paid) => {
    dispatch(addExpense({ userId, toPay, paid }));
  };

  const handleUpdateToPay = (userId, newToPay) => {
    dispatch(updateToPay({ userId, toPay: newToPay }));
  };

  const handleUpdatePaid = (userId, newPaid) => {
    dispatch(updatePaid({ userId, paid: newPaid }));
  };

  const handleAddUserEmail = () => {
    if (newUserEmail) {
      handleAddExpense(newUserEmail, 0, 0);
      setNewUserEmail("");
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    setDescription("");
    setPrice("");
    setDate("");
  };

  useEffect(() => {
    const shouldShowLoggerInput = expenseDetails.some(
      (expense) =>
        parseFloat(expense.toPay) !== 0 || parseFloat(expense.paid) !== 0
    );
    setShowLoggerInput(shouldShowLoggerInput);
  }, [expenseDetails]);

  const handleSplitClick = (index) => {
    setSplit(true);
    setSelectedEmailIndex(index);
    setSplitPopupOpen(true);
  };

  const handleSplitPopupSave = () => {
    if (selectedEmailIndex >= 0 && amountToPay > 0) {
      const userIdToUpdate = expenseDetails[selectedEmailIndex].userId;
      handleUpdateToPay(
        userIdToUpdate,
        parseFloat(expenseDetails[selectedEmailIndex].toPay) +
          parseFloat(amountToPay)
      );
      setSplitPopupOpen(false);
      setSelectedEmailIndex(-1);
      setAmountToPay(0);
    }
  };

  const handlePayClick = (index) => {
    setSplit(true);
    setSelectedEmailIndex(index);
    setPayPopupOpen(true);
  };

  const handlePayPopupSave = () => {
    if (selectedEmailIndex >= 0 && amountToPay > 0) {
      const userIdToUpdate = expenseDetails[selectedEmailIndex].userId;
      handleUpdatePaid(
        userIdToUpdate,
        parseFloat(expenseDetails[selectedEmailIndex].paid) +
          parseFloat(amountToPay)
      );
      setPayPopupOpen(false);
      setSelectedEmailIndex(-1);
      setAmountToPay(0);
    }
  };

  const distributeExpenseEqually = () => {
    const totalObjects = expenseDetails?.length + 1;
    const pricePerPerson = parseFloat(price) / totalObjects;

    const updatedExpenseDetails = expenseDetails?.map((expense) => ({
      ...expense,
      toPay: pricePerPerson.toFixed(2),
      paid: "0",
    }));

    updatedExpenseDetails.forEach((expense) => {
      handleUpdateToPay(expense.userId, expense.toPay);
      handleUpdatePaid(expense.userId, expense.paid);
    });

    const loggerToPay = (parseFloat(price) / totalObjects).toFixed(2);

    setLoggerState({
      loggerEmail: currentUser,
      loggerToPay: loggerToPay,
      loggerPaid: price,
    });

    return {
      updatedExpenseDetails,
      loggerState: {
        loggerEmail: currentUser,
        loggerToPay: loggerToPay,
        loggerPaid: price,
      },
    };
  };

  const publishData = () => {
    let state = [];
    if (!split) {
      state = distributeExpenseEqually();
    }

    if (price && description && date && expenseDetails?.length > 0) {
      // Add a new document in collection "cities"

      if (split) loggerState.loggerEmail = user?.email;
      else state.loggerState.loggerEmail = user?.email;

      db.collection("admin")
        .doc()
        .set({
          date: date,
          description: description,
          price: parseFloat(price),
          adminDetails: split ? loggerState : state.loggerState,
          guestDetails: split ? expenseDetails : state.updatedExpenseDetails,
        })
        .then(() => {
          console.log("Document successfully written!");
          navigate("/History");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  };

  return (
    <div>
      <div className="buttoncontainer">
        <Button
          variant="contained"
          color="success"
          onClick={() => setIsFormVisible(true)}
        >
          ADD EXPENSE
        </Button>
      </div>
      {isFormVisible && (
        <div className="form-container">
          <form>
            <TextField
              label="Description"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              label="Price"
              variant="outlined"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label="Date"
              variant="outlined"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <div className="user-email-container">
              {expenseDetails.map((expense, index) => (
                <div className="add-user-email" key={index}>
                  <TextField
                    label={`User Email ${index + 1}`}
                    variant="outlined"
                    value={expense.userId}
                    disabled
                  />
                  <Button
                    onClick={() => handleSplitClick(index)}
                    color="primary"
                  >
                    Split
                  </Button>
                  <Button onClick={() => handlePayClick(index)} color="primary">
                    Pay
                  </Button>
                  {selectedEmailIndex === index && (
                    <TextField
                      label="Amount to Pay"
                      variant="outlined"
                      type="number"
                      value={amountToPay}
                      onChange={(e) => setAmountToPay(e.target.value)}
                    />
                  )}
                </div>
              ))}
              <div>
                <TextField
                  label="Add User Email"
                  variant="outlined"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                />
                <Button onClick={handleAddUserEmail} color="primary">
                  Add
                </Button>
              </div>
              {showLoggerInput && (
                <div className="add-user-email">
                  <TextField
                    label={`Logger To Pay`}
                    variant="outlined"
                    value={loggerState.loggerToPay}
                    onChange={(e) =>
                      setLoggerState({
                        ...loggerState,
                        loggerToPay: e.target.value,
                      })
                    }
                  />
                  <TextField
                    label={`Logger Paid`}
                    variant="outlined"
                    value={loggerState.loggerPaid}
                    onChange={(e) =>
                      setLoggerState({
                        ...loggerState,
                        loggerPaid: e.target.value,
                      })
                    }
                  />
                  <Button onClick={() => handleSplitClick(-1)} color="primary">
                    Split
                  </Button>
                  <Button onClick={() => handlePayClick(-1)} color="primary">
                    Pay
                  </Button>
                  {selectedEmailIndex === -1 && (
                    <TextField
                      label="Amount to Pay"
                      variant="outlined"
                      type="number"
                      value={amountToPay}
                      onChange={(e) => setAmountToPay(e.target.value)}
                    />
                  )}
                </div>
              )}
            </div>
            <div className="button-container">
              <Button variant="contained" color="primary" onClick={publishData}>
                Submit
              </Button>
              <Button variant="contained" color="secondary" onClick={onSave}>
                Save
              </Button>
            </div>
          </form>
        </div>
      )}

      <Dialog open={splitPopupOpen} onClose={() => setSplitPopupOpen(false)}>
        <DialogTitle>Split Payment</DialogTitle>
        <DialogContent>
          <TextField
            label="Amount to Pay"
            variant="outlined"
            type="number"
            value={amountToPay}
            onChange={(e) => setAmountToPay(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSplitPopupOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSplitPopupSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={payPopupOpen} onClose={() => setPayPopupOpen(false)}>
        <DialogTitle>Pay Amount</DialogTitle>
        <DialogContent>
          <TextField
            label="Amount to Pay"
            variant="outlined"
            type="number"
            value={amountToPay}
            onChange={(e) => setAmountToPay(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPayPopupOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePayPopupSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Userportal;
