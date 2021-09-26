import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({ entries, editEntry }) {
  return (
    <Container>
      {entries.map((item, index) => {
        return (
          <EntryLine key={index + item.id} {...item} editEntry={editEntry} />
        );
      })}
    </Container>
  );
}

export default EntryLines;
