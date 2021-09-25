import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";

import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import ModalEdit from "./components/ModalEdit";

var initialEntries = [
  { id: 1, description: "Work Income", value: 100, isExpense: false },
  { id: 2, description: "Water Bill", value: 200, isExpense: true },
  { id: 3, description: "Rent", value: 300, isExpense: true },
  { id: 4, description: "Power Bill", value: 5, isExpense: true },
];
function App() {
  const [entries, setEntries] = useState(initialEntries);

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryID] = useState();
  const [incomeTotal, setIncomeTotal] = useState();
  const [expenseTotal, setExpenseTotal] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    //eslint-disable-next-line
  }, [isOpen]);

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

  function resetEntry() {
    setValue("");
    setDescription("");
  }

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  function addEntry(description, value, isExpense) {
    console.log("addEntry", description, value, isExpense);
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    console.log(result);
    setEntries(result);
    resetEntry();
  }

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryID(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
    console.log("edit entry with id");
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader type="h3" title="History" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        setValue={setValue}
        setDescription={setDescription}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        setValue={setValue}
        setDescription={setDescription}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
