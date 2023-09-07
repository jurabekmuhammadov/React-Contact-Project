import React, { Component } from "react";

import { categories } from "../../data/categories";

import "./ContactForm.scss";

export class ContactForm extends Component {
  render() {
    const { submit, handleContact, todo } = this.props;
    return (
      <div id="contact-form">
        <div className="container contactForm__container">
          <form onSubmit={submit}>
            <div className="form__container">
              <div className="inputContainer">
                <input
                  onChange={handleContact}
                  required="required"
                  id="inputField"
                  value={todo.firstName}
                  name="firstName"
                  placeholder="First name"
                  type="text"
                ></input>
                <label className="usernameLabel" htmlFor="inputField">
                  First name
                </label>
                <svg viewBox="0 0 448 512" className="userIcon">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                </svg>
              </div>
              <div className="inputContainer">
                <input
                  onChange={handleContact}
                  required="required"
                  id="inputField"
                  value={todo.lastName}
                  name="lastName"
                  placeholder="Last name"
                  type="text"
                ></input>
                <label className="usernameLabel" htmlFor="inputField">
                  Last name
                </label>
                <svg viewBox="0 0 448 512" className="userIcon">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                </svg>
              </div>
              <div className="inputContainer">
                <input
                  onChange={handleContact}
                  required="required"
                  id="inputField"
                  name="number"
                  value={todo.number}
                  placeholder="Phone number"
                  type="number"
                ></input>
                <label className="usernameLabel" htmlFor="inputField">
                  Phone number
                </label>
                <svg viewBox="0 0 448 512" className="userIcon">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                </svg>
              </div>
              <div className="inputContainer">
                <input
                  onChange={handleContact}
                  required="required"
                  id="inputField"
                  name="avatar"
                  value={todo.avatar}
                  placeholder="Avatar"
                  type="text"
                ></input>
                <label className="usernameLabel" htmlFor="inputField">
                  Avatar
                </label>
                <svg viewBox="0 0 448 512" className="userIcon">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                </svg>
              </div>
              <select
                value={todo.category}
                name="category"
                id="category"
                onChange={handleContact}
              >
                <option defaultValue value="All">
                  All
                </option>
                {categories.map((category, i) => (
                  <option key={i} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="checkbox-wrapper">
                <p>Is it favorite</p>
                <input
                  value={todo.favorite}
                  onChange={handleContact}
                  id="_checkbox-26"
                  type="checkbox"
                  name="favorite"
                ></input>
                <label htmlFor="_checkbox-26">
                  <div className="tick_mark"></div>
                </label>
              </div>
            </div>
            <button className="bookmarkBtn" type="submit">
              <span className="IconContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  viewBox="0 -960 960 960"
                  width="22"
                >
                  <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
                </svg>
              </span>
              <p className="text">Add</p>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
