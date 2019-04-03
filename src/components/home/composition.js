import React from "react";
import image1 from "assets/img/nat-1-large.jpg";
import image2 from "assets/img/nat-2-large.jpg";
import image3 from "assets/img/nat-3-large.jpg";

export default function Composition() {
  return (
    <div className="composition">
      <img
        src={image1}
        alt="landscape"
        className="composition__photo composition__photo--p1"
      />
      <img
        src={image2}
        alt="landscape"
        className="composition__photo composition__photo--p2"
      />
      <img
        src={image3}
        alt="landscape"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
}
