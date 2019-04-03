import React from 'react';
import Card from '../common/card';

export default function Tours() {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <Card
            customClass="card-1"
            frontCard={{
              heading: 'the sea explorer',
              descList: ['3 day tours', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: easy']
            }}
            backCard={{
              p1: 'Only',
              p2: '$297',
              b1: 'Book now!'
            }}
          />
        </div>
        <div className="col-1-of-3">
          <Card
            customClass="card-2"
            frontCard={{
              heading: 'the forest hiker',
              descList: [
                '7 day tours',
                'Up to 40 people',
                '6 tour guides',
                'Sleep in provided tents',
                'Difficulty: medium'
              ]
            }}
            backCard={{
              p1: 'Only',
              p2: '$497',
              b1: 'Book now!'
            }}
          />
        </div>
        <div className="col-1-of-3">
          <Card
            customClass="card-3"
            frontCard={{
              heading: 'the snow adventure',
              descList: [
                '5 day tours',
                'Up to 15 people',
                '3 tour guides',
                'Sleep in provided tents',
                'Difficulty: hard'
              ]
            }}
            backCard={{
              p1: 'Only',
              p2: '$897',
              b1: 'Book now!'
            }}
          />
        </div>
      </div>

      <div className="u-center-text u-margin-top-big">
        <a href="#" className="btn btn--green">
          Discover all tours
        </a>
      </div>
    </section>
  );
}
