import React from 'react';
import logoGreen from 'assets/img/logo-green-2x.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logoGreen} alt="Full logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              {['Company', 'Contact us', 'Carrers', 'Privacy policy', 'Terms'].map(data => (
                <li className="footer__item" key={data}>
                  <a className="footer__link" href="#">
                    {data}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Check{' '}
            <a href="#" className="footer__link">
              Padam Sandhu
            </a>{' '}
            Github. Copyright &copy;
          </p>
        </div>
      </div>
    </footer>
  );
};
