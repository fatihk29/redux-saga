import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({ entries }) {
  return (
    <Container>
      {entries?.map((item, index) => {
        return <EntryLine key={index + item.id} {...item} />;
      })}
    </Container>
  );
}

export default EntryLines;
