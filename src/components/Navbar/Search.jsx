import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="input-group rounded-md" style={{ width: "750px" }}>
          <span className="input-group-text bg-gray-200 p-0 ">
            <select className="form-select border-none bg-gray-200 pl-0 text-center focus:border-none shadow-none">
              <option selected>All</option>
              <option value="Books">Books</option>
              <option value="Furniture">Furniture</option>
              <option value="Electronics">Electronics</option>
            </select>
          </span>
          <input
            type="text"
            className="form-control text-gray-100"
            placeholder="Search Amazon.in"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span
            className="input-group-text bg-amber-400 text-lg cursor-pointer"
            id="basic-addon1"
          >
            <BsSearch />
          </span>
        </div>
      </div>
    </>
  );
};

export default Search;
