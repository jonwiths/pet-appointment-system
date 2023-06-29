import React, { useState } from 'react';
import { BiSearch, BiCaretDown, BiCheck } from 'react-icons/bi';

const Search = ({
  query,
  onQueryChange,
  sortBy,
  orderBy,
  onOrderByChange,
  onSortByChange
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="my-4">
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BiSearch />
            <label htmlFor="query" className="sr-only" />
          </div>
          <input
            value={query}
            onChange={(e) => {
              onQueryChange(e.target.value);
            }}
            type="text"
            placeholder="Enter keyword..."
            className="w-full p-2 pl-8 rounded-md border-2 border-blue-600 outline-8 focus:ring-4 focus:ring-blue-500 outline-blue-900"
          />
          <div className="absolute inset-y-0 right-1 flex items-center">
            <div className="">
              <button
                type="button"
                className="justify-center px-4 py-1 bg-blue-500 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center w-32"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => setToggle(!toggle)}
              >
                Sort By <BiCaretDown className="ml-2" />
              </button>
              <DropDown
                toggle={toggle}
                sortBy={sortBy}
                onSortByChange={(mySort) => onSortByChange(mySort)}
                orderBy={orderBy}
                onOrderByChange={(myOrder) => onOrderByChange(myOrder)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const DropDown = ({
  toggle,
  orderBy,
  sortBy,
  onOrderByChange,
  onSortByChange
}) => {
  if (!toggle) {
    return null;
  }
  return (
    <>
      <div
        className="origin-top-right absolute right-0 mt-2 w-40
    rounded-md shadow-lg bg-blue-100 ring-1 ring-black ring-opacity-5"
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div
            onClick={() => onSortByChange('petName')}
            className="px-4 py-1 text-sm text-gray-700 hover:bg-blue-300 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem"
          >
            Pet Name {sortBy === 'petName' && <BiCheck />}
          </div>

          <div
            onClick={() => onSortByChange('ownerName')}
            className="px-4 py-1 text-sm text-gray-700 hover:bg-blue-300 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem"
          >
            Owner Name {sortBy === 'ownerName' && <BiCheck />}
          </div>

          <div
            onClick={() => onSortByChange('aptDate')}
            className="px-4 py-1 text-sm text-gray-700 hover:bg-blue-300 hover:text-gray-900 flex justify-between cursor-pointer border-b-2 border border-b-gray-200"
            role="menuitem"
          >
            Date {sortBy === 'aptDate' && <BiCheck />}
          </div>

          <div
            onClick={() => onOrderByChange('asc')}
            className="px-4 py-1 text-sm text-gray-700 hover:bg-blue-300 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2 border-blue-200"
            role="menuitem"
          >
            Ascending {orderBy === 'asc' && <BiCheck />}
          </div>

          <div
            onClick={() => onOrderByChange('desc')}
            className="px-4 py-1 text-sm text-gray-700 hover:bg-blue-300 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem"
          >
            Descending {orderBy === 'desc' && <BiCheck />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
