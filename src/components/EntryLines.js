import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({ entries, deleteEntry, editEntry }) {
  return (
    <Container>
      {entries.map((item, index) => {
        return (
          <EntryLine
            key={index + item.id}
            {...item}
            deleteEntry={deleteEntry}
            editEntry={editEntry}
          />
        );
      })}
    </Container>
  );
}

export default EntryLines;
