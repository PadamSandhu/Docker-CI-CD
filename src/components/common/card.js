import React from 'react';

export default function Card(props) {
  console.log(props);
  const customClass = props.customClass ? props.customClass : '';
  return (
    <div className="card">
      <div className={`card__side card__side--front card__side--front--${customClass}`}>
        <div className={`card__picture card__picture--${customClass}`}>&nbsp;</div>

        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span--${customClass}`}>
            {props.frontCard.heading ? props.frontCard.heading : ''}
          </span>
        </h4>

        <div className="card__details">
          <ul>
            {props.frontCard.descList
              ? props.frontCard.descList.map((data, id) => <li key={id.toString()}>{data}</li>)
              : null}
          </ul>
        </div>
      </div>

      <div className={`card__side card__side--back card__side--back--${customClass}`}>
        {props.backCard ? (
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">{props.backCard.p1 ? props.backCard.p1 : null}</p>
              <p className="card__price-value">{props.backCard.p2 ? props.backCard.p2 : null}</p>
            </div>
            <a href="#" className="btn btn--white">
              {props.backCard.b1 ? props.backCard.b1 : null}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
