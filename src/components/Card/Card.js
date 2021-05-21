import React from 'react';
import './Card.scss';
const imagesPath = '../../property_thumbs';

class Image {
  imagesName = 'i1.jpg';
  constructor(name) {
    this.name = name;
  }
  get fullPath() {
    return this.imagePath();
  }
  imagePath() {
    return (imagesPath + '/' + this.name + '/' + this.imagesName)
      .toLowerCase()
      .split(' ')
      .join('-');
  }
}

const Card = ({ ...props }) => {
  return (
    <div className="card">
      <div>
        <img
          src={new Image(props.floorType).fullPath}
          alt=""
          className="card-img"
        />
      </div>
      <div className="code">{props.code}</div>
      <div className="type">
        <div className="type-name">Floor Type</div>
        <div className="type-value">{props.floorType}</div>
      </div>
      <div className="type">
        <div className="type-name">Internal</div>
        <div className="type-value">
          {props.internal} m<sup>2</sup>
        </div>
      </div>
      <div className="type">
        <div className="type-name">External</div>
        <div className="type-value">
          {props.external} m<sup>2</sup>
        </div>
      </div>
      <div className="type">
        <div className="type-name">Gross</div>
        <div className="type-value">
          {props.gross} m<sup>2</sup>
        </div>
      </div>
      <div className="type">
        <div className="type-name">Pool</div>
        <div className="type-value">
          {props.pool} m<sup>2</sup>
        </div>
      </div>
      <div className="type">
        <div className="type-name">Roof</div>
        <div className="type-value">
          {props.roof} m<sup>2</sup>
        </div>
      </div>
    </div>
  );
};

export default Card;
