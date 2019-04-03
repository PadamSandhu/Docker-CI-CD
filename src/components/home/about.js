import React from 'react';
import Composition from './composition';
import Features from './features';
import Tours from './tours';
import Stories from './stories';
import Booking from './booking';

export const About = () => {
  return (
    <main className="about">
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">Live adventure like you never have before</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Interdum consectetur libero id faucibus nisl tincidunt.
            </p>
            <a href="#" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <Composition />
          </div>
        </div>
      </section>
      <Features />
      <Tours />
      <Stories />
      <Booking />
    </main>
  ); // just to tell search engines that this is the main section
};
