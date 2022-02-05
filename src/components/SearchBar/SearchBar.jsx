import { useState } from "react";
import PropTypes from "prop-types";
import { NOT_ALERTS, myAlert } from "../../service/alerts";
import { useLocation } from "react-router-dom";
import { Form, Input } from "./SearchBar.styled";
import { SearchButton, ResetButton } from "../Buttons/Buttons";

export default function SearchBar({ onSubmit }) {
  const location = useLocation();
  const [query, setQuery] = useState(
    () => new URLSearchParams(location.search).get("query") ?? ""
  );

  const urlQuery = new URLSearchParams(location.search).get("query");
  const handleSearchQueryChange = (e) => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === urlQuery) {
      return myAlert(NOT_ALERTS.OLD);
    }
    const newQuery = query.toLowerCase();
    if (newQuery.trim() === "") {
      return myAlert(NOT_ALERTS.EMPTY);
    }
    if (!newQuery.match(/^[a-zA-Z,() ']*$/)) {
      return myAlert(NOT_ALERTS.NO_VALID);
    }
    onSubmit(newQuery);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={query}
        onChange={handleSearchQueryChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      {query && <ResetButton onClick={() => setQuery("")} />}
      <SearchButton />
    </Form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
