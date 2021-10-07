import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "semantic-ui-react";

import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import ModalEdit from "./components/ModalEdit";
import { getAllEntries } from "./actions/entries.actions";

function App() {
  const [incomeTotal, setIncomeTotal] = useState();
  const [expenseTotal, setExpenseTotal] = useState();
  const [total, setTotal] = useState();
  const [entry, setEntry] = useState();
  const { isOpen, id } = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id, entries]);

  // async function fetchInitialData() {
  //   const result = await axios.get("http://localhost:3001/entries");
  //   console.log("result", result);
  // }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      } else {
        return (totalIncomes += Number(entry.value));
      }
    });
    setTotal(totalIncomes - totalExpense);
    setExpenseTotal(totalExpense);
    setIncomeTotal(totalIncomes);
    //eslint-disable-next-line
  }, [entries]);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries} />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;

// npx json-server --watch db.json
