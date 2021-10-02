import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "semantic-ui-react";

import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import ModalEdit from "./components/ModalEdit";
import ReactSpeedometer from "./speedometer/index";

function App() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryID] = useState();
  const [incomeTotal, setIncomeTotal] = useState();
  const [expenseTotal, setExpenseTotal] = useState();
  const [total, setTotal] = useState();
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
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

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    console.log(result);
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
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries} editEntry={editEntry} />

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
      {/* <ReactSpeedometer
        value={100}
        minValue={0}
        maxValue={300}
        width={400}
        height={300}
        maxSegmentLabels={10}
      /> */}
    </Container>
  );
}

export default App;
