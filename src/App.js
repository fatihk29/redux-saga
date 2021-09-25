import React, { useState } from "react";
import { Container } from "semantic-ui-react";

import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

var initialEntries = [
  { id: 1, description: "Work Income", value: "$100,0", isExpense: false },
  { id: 2, description: "Water Bill", value: "$20,0", isExpense: true },
  { id: 3, description: "Rent", value: "$300,0", isExpense: true },
  { id: 4, description: "Power Bill", value: "$50,0", isExpense: true },
];
function App() {
  const [entries, setEntries] = useState(initialEntries);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  function addEntry(description, value) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
    });
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value="2,550" />
      <DisplayBalances />
      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;
