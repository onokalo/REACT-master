import React, { Fragment } from "react";
import "./ContactList.css";
import ContactItem from "./ContactItem/ContactItem";
import Search from "../Search/Search";

const ContactList = ({ ContactList, onBtnFavorite, onDelete }) => {
  const contactItem = ContactList.map(item => {
    return (
      <ContactItem
        key={item.id}
        name={item.name}
        description={item.description}
        avatar={item.avatar}
        gender={item.gender}
        favorite={item.favorite}
        onBtnFavorite={() => onBtnFavorite(item.id)}
        onDelete={() => onDelete(item.id)}
      />
    );
  });

  // return <div>{contactItem}</div>;
  return (
    <Fragment>
      <Search></Search>
      {contactItem}
    </Fragment>
  );
};

export default ContactList;
