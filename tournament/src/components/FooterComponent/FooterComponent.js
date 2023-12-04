import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from 'react-i18next'
import "../../styles.scss";

const FooterComponent = () => {
  const { t } = useTranslation();

  return (
    <Navbar className="navBar footr">
      <div className="container-fluid text-center justify-content-center flex-wrap">
        <div className="footer-new__top-column top-column w-100">
          <ul className="top-column__item-list d-flex justify-content-evenly">
            <li className="top-column__item">
              <a className="top-column__link" href="https://almaty.itstep.org/about-academy-ru">
                {t('footer_component.about')}
              </a>
            </li>
            <li className="top-column__item">
              <a className="top-column__link" href="https://almaty.itstep.org/contacts-ru">
              {t('footer_component.contacts')}
              </a>
            </li>
            <li className="top-column__item">
              <a className="top-column__link" href="https://almaty.itstep.org/blog">
              {t('footer_component.blog')}
              </a>
            </li>
          </ul>
        </div>
        <div className="w-100">

          <hr className="footer-line" />
          <p>{t('footer_component.trademark')}</p>
        </div>
      </div>
    </Navbar>
  );
};

export default FooterComponent;
