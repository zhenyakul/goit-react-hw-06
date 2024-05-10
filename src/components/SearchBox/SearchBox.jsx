import { useId } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const inputId = useId();
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        className={css.searchBox}
        type="text"
        id={inputId}
        onChange={(evt) => dispatch(setFilters(evt.target.value))}
      />
    </div>
  );
}
