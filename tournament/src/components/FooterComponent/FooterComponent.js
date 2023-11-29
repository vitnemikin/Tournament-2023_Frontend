import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../../styles.scss";

const FooterComponent = () => {
  return (
    <Navbar className="navBar footr">
      <div className="container-fluid text-center justify-content-center flex-wrap">
        <div className="footer-new__top-column top-column w-100">
          <ul className="top-column__item-list d-flex justify-content-evenly">
            <li className="top-column__item">
              <a className="top-column__link" href="https://almaty.itstep.org/about-academy-ru">
                Об Академии{" "}
              </a>
            </li>
            <li className="top-column__item">
              <a className="top-column__link" href="https://almaty.itstep.org/contacts-ru">
                Контакты{" "}
              </a>
            </li>
            <li className="top-column__item">
              <a className="top-column__link" href="https://almaty.itstep.org/blog">
                Блог
              </a>
            </li>
          </ul>
        </div>
        <div className="w-100">

          <hr className="footer-line" />
          <p>© 1999-2023 Компьютерная Академия ШАГ</p>
        </div>
      </div>
    </Navbar>
  );
};

export default FooterComponent;
