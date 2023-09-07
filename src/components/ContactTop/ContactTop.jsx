import React, { Component } from "react";

import { categories } from "../../data/categories";

import arrowdown from "../../assets/arrow-down.svg";

import "./ContactTop.scss";
export class ContactTop extends Component {
  render() {
    const { handleSearch, search, handleCategory, category } = this.props;
    return (
      <div id="contact-top">
        <div className="container top__container">
          <form className="form">
            <button>
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <input
              className="input"
              placeholder="Type your text"
              required=""
              onChange={handleSearch}
              value={search}
              type="text"
            ></input>
            <button className="reset" type="reset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </form>
          <select
            value={category}
            name="category"
            id="category"
            onChange={handleCategory}
          >
            <option value="All">All</option>
            {categories.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
          <span>
            <img src={arrowdown} alt="" />
          </span>
        </div>
      </div>
    );
  }
}

export default ContactTop;
