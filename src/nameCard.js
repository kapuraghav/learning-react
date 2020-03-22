import React, { Component } from "react";
import faker from "faker";

const NameCard = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a className="author">{faker.name.findName()}</a>
        <div className="metadata">
          <span className="date">{faker.company.companyName()}</span>
        </div>
        <div className="test"> {faker.lorem.text()}</div>
      </div>
    </div>
  );
};

export default NameCard;
