import React, { Component, Fragment } from "react";
import { Tab, Tabs } from "react-bootstrap";

import Header from "../components/Header/Header";
import ContactTop from "../components/ContactTop/ContactTop";
import ContactItem from "../components/ContactItem/ContactItem";

import "../components/TabBlock/Tab.scss";
import ContactForm from "../components/ContactForm/ContactForm";
export class HomePage extends Component {
  state = {
    todos: [
      {
        id: 1,
        firstName: "Sarah",
        lastName: "Mendy",
        category: "Family",
        number: "+701 29937 22",
        avatar:
          "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png",
        favorite: true,
      },
      {
        id: 2,
        firstName: "Jack",
        lastName: "Richerd",
        category: "Relatives",
        number: "+900 817 72261",
        avatar:
          "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-File.png",
        favorite: false,
      },
      {
        id: 3,
        firstName: "Antonio",
        lastName: "Benfard",
        category: "Friends",
        number: "+816 1662 19221",
        avatar:
          "https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg",
        favorite: false,
      },
    ],
    todo: {
      firstName: "",
      lastName: "",
      number: "",
      category: "",
      avatar: "",
      favorite: "",
    },
    search: "",
    category: "All",
  };
  render() {
    let { todos, search, category, todo } = this.state;
    todos = todos.filter((todo) =>
      todo.firstName.toLowerCase().includes(search)
    );

    if (category !== "All") {
      todos = todos.filter((todo) => todo.category === category);
    }
    const favorite = todos.filter((todo) => todo.favorite);
    const handleSearch = (e) => {
      this.setState({ search: e.target.value.trim().toLowerCase() });
    };
    const handleCategory = (e) => {
      this.setState({ category: e.target.value });
    };
    const submit = (e) => {
      e.preventDefault();
      let newTodo = [...todos, { todo, favorite: true, id: Date.now() }];
      this.setState({
        todos: newTodo,
        todo: {
          firstName: "",
          lastName: "",
          number: "",
          avatar: "",
          category: "All",
          favorite: "",
        },
      });
    };
    const handleContact = (e) => {
      let newTodo = { ...todo, [e.target.name]: e.target.value };
      this.setState({ todo: newTodo });
    };
    const doneTodo = (id) => {
      let newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.favorite = true;
        }
        return todo;
      });
      this.setState({ todos: newTodos });
    };
    return (
      <Fragment>
        <Header />
        <ContactForm
          todo={todo}
          submit={submit}
          handleContact={handleContact}
        />
        <ContactTop
          handleCategory={handleCategory}
          handleSearch={handleSearch}
          search={search}
          category={category}
        />
        <div id="contact-items">
          <div className="container contact__items">
            <Tabs
              defaultActiveKey="all"
              variant="pills"
              className="mt-3 mb-5"
              justify
            >
              <Tab eventKey="all" title="All contacts">
                {todos.length ? (
                  todos.map((todo, i) => (
                    <ContactItem doneTodo={doneTodo} key={i} {...todo} />
                  ))
                ) : (
                  <div className="no-contact">
                    <p>No Contact yet</p>
                  </div>
                )}
              </Tab>
              <Tab eventKey="favorite" title="Favorite contacts">
                {favorite.length ? (
                  favorite.map((todo, i) => (
                    <ContactItem doneTodo={doneTodo} key={i} {...todo} />
                  ))
                ) : (
                  <div className="no-contact">
                    <p>No Contact yet</p>
                  </div>
                )}
              </Tab>
            </Tabs>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
