import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "semantic-ui-react";

import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import ModalEdit from "./components/ModalEdit";
// import ReactSpeedometer from "./speedometer/index";

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
  }, [isOpen, id]);

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

// npx json-server --watch db.json
