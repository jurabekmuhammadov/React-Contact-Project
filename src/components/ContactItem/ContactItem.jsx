import React, { Component } from "react";

import "./ContactItem.scss";
export class ContactItem extends Component {
  render() {
    const {
      id,
      firstName,
      lastName,
      category,
      number,
      avatar,
      favorite,
      doneTodo,
    } = this.props;
    console.log(avatar);
    return (
      <div className="card human-resources" href="najottalim.uz">
        <div className="overlay"></div>
        <div className="circle">
          <img src={avatar} alt="img" />
        </div>
        <div className="info">
          <p id="firstname">
            <span>First Name:</span> {firstName}
          </p>
          <p id="lastname">
            <span>Last Name:</span> {lastName}
          </p>
          <p id="category">
            <span>Category:</span> {category}
          </p>
          <p id="number">
            <span>Number:</span> {number}
          </p>
        </div>
        <div className="control">
          {favorite ? (
            ""
          ) : (
            <div className="favorite">
              <button className="Btn" onClick={() => doneTodo(id)}>
                <div className="sign">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    width="22px"
                    height="22px"
                  >
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                  </svg>
                </div>
                <div className="text">Favorite</div>
              </button>
            </div>
          )}
          <div className="edit">
            <button className="Btn">
              <div className="sign">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="22"
                  viewBox="0 -960 960 960"
                  width="22"
                >
                  <path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" />
                </svg>
              </div>
              <div className="text">Edit</div>
            </button>
          </div>
        </div>
        {favorite ? (
          <div className="favoritecontact">
            <button className="isFavorite">
              <svg
                viewBox="0 0 17.503 15.625"
                height="20.625"
                width="20.503"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path
                  transform="translate(0 0)"
                  d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z"
                  id="Fill"
                ></path>
              </svg>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ContactItem;
