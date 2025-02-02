import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      { id: "id-5", name: "Dexter Gray", number: "881-45-32" },
      { id: "id-6", name: "Olivia Warren", number: "513-77-98" },
      { id: "id-7", name: "Nathan Brooks", number: "346-22-11" },
      { id: "id-8", name: "Lila Patel", number: "774-66-21" },
      { id: "id-9", name: "Maximilian Cruz", number: "998-34-75" },
      { id: "id-10", name: "Sophia Fischer", number: "212-55-44" },
      { id: "id-11", name: "Lucas Martin", number: "734-21-87" },
      { id: "id-12", name: "Eva Rodriguez", number: "456-78-90" },
      { id: "id-13", name: "Liam Campbell", number: "889-33-66" },
      { id: "id-14", name: "Isabella Nguyen", number: "123-09-54" },
      { id: "id-15", name: "Mason Rivera", number: "642-98-10" },
      { id: "id-16", name: "Ava Sullivan", number: "357-76-32" },
      { id: "id-17", name: "Logan Gomez", number: "590-44-68" },
      { id: "id-18", name: "Chloe Carter", number: "876-23-11" },
      { id: "id-19", name: "Elijah Stewart", number: "231-55-89" },
      { id: "id-20", name: "Emma Wilson", number: "998-12-33" },
    ],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: { id: nanoid(), ...contact },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload
        );
        state.items.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
