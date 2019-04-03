import React from 'react';
import image8 from 'assets/img/nat-8.jpg';
import vidMp4 from 'assets/img/video.mp4';
import vidWebm from 'assets/img/video.webm';

export default function Stories() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={vidMp4} type="video/mp4" />
          <source src={vidWebm} type="video/webm" />
          Your browser is not Supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      {Array(2)
        .fill()
        .map((data, id) => (
          <div key={id} className="row">
            <div className="story">
              <figure className="story__shape">
                <img src={image8} alt="person on a tour" className="story__image" />
                <figcaption className="story__caption">Mary Smith</figcaption>
              </figure>

              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
