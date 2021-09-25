import React, { useState } from "react";
import { Container } from "semantic-ui-react";

import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import ModalEdit from "./components/ModalEdit";

var initialEntries = [
  { id: 1, description: "Work Income", value: "$100,0", isExpense: false },
  { id: 2, description: "Water Bill", value: "$20,0", isExpense: true },
  { id: 3, description: "Rent", value: "$300,0", isExpense: true },
  { id: 4, description: "Power Bill", value: "$50,0", isExpense: true },
];
function App() {
  const [entries, setEntries] = useState(initialEntries);

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
  }

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
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
      <DisplayBalance title="Your Balance" value="2,550" />
      <DisplayBalances />
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
