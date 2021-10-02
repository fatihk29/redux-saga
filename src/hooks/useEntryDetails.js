import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries.actions";
import { v4 as uuid } from "uuid";

export default function useEntryDetails() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const dispatch = useDispatch();

  function addEntry() {
    dispatch(addEntryRedux({ id: uuid(), description, value, isExpense }));
    setDescription("");
    setValue("");
    setIsExpense(false);
  }
  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  };
}
