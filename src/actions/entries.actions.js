const types = {
  GET_ENTRIES: "GET_ENTRIES",
  POPULATE_ENTRIES: "POPULATE_ENTRIES",
  ADD_ENTRY: "ADD_ENTRY",
  REMOVE_ENTRY: "REMOVE_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
};
export default types;

export function addEntryRedux(payload) {
  return { type: types.ADD_ENTRY, payload };
}

export function removeEntryRedux(payload) {
  return { type: types.REMOVE_ENTRY, payload };
}
export function updateEntryRedux(id, entry) {
  return { type: types.UPDATE_ENTRY, payload: { id, entry } };
}

export function getAllEntries() {
  return { type: types.GET_ENTRIES };
}

export function populateEntries(entries) {
  return { type: types.POPULATE_ENTRIES, payload: entries };
}
// a
