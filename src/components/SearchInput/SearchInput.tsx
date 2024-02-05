import * as React from "react";

export interface ISearchProps {
  onChangeSearchQuery: (searchQuery: string) => void;
}

export default function SearchInput(props: ISearchProps) {
  const { onChangeSearchQuery } = props;

  return (
    <>
        <input
            id="search"
            className="searchInput"
            type="search"
            placeholder="Search... (Min 3 characters)"
            aria-label="Search"
            onChange={(event) => onChangeSearchQuery(event.target.value)}
        />
    </>
  );
}