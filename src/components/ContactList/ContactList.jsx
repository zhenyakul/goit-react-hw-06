import { useSelector } from "react-redux";
import { getContacts, getFilters } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const getFilterContacts = (contacts, filters) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
};

export default function ContactList() {
  const data = useSelector(getContacts);
  const filters = useSelector(getFilters);

  const filterContacts = getFilterContacts(data, filters);

  return (
    <ul className={css.list}>
      {filterContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
