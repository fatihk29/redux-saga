import { Container, Segment } from "semantic-ui-react";

import "./App.css";
import ButtonSaveOrCancel from "./components/ButtonSaveOrCancel";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value="2,550" />
      <DisplayBalances />
      <MainHeader type="h3" title="History" />

      <EntryLine description="income" value="10" isExpense />

      <EntryLine />

      <EntryLine />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm />
      <ButtonSaveOrCancel />
    </Container>
  );
}

export default App;
