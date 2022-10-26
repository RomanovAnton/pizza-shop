import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/filters/filtersSlice";
import useDebounce from "../../hooks/useDebounce";
import searchIcon from "../../assets/search-icon.svg";
import clearIcon from "../../assets/search-clear-icon.svg";
import "./Search.scss";

export default function Search() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(value, 250);

  useEffect(() => {
    dispatch(setSearchValue(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className="search">
      <img className="search__search-icon" src={searchIcon} alt="search-icon" />
      <input
        className="search__input"
        type="text"
        placeholder="search..."
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <img className="search__clear-icon" src={clearIcon} alt="clear-icon" />
    </div>
  );
}
