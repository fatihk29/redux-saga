export function addEntryRedux(payload) {
  return { type: "ADD_ENTRY", payload };
}

export function removeEntryRedux(payload) {
  return { type: "REMOVE_ENTRY", payload };
}
