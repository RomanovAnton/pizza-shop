import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/filters/filtersSlice";
import useDebounce from "../../hooks/useDebounce";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
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
      <input
        className="search__input"
        type="text"
        placeholder="Поиск пиццы..."
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <SearchIcon className="search__search-icon" />
      {value && (
        <img
          className="search__clear-icon"
          src={clearIcon}
          alt="clear-icon"
          onClick={() => setValue("")}
        />
      )}
    </div>
  );
}
