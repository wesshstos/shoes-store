import { Component } from "react";
import Card from "./Cards/Card";
import shoes1 from "../assets/jordans/jordan-1.png";
import shoes2 from "../assets/jordans/jordan-2.png";
import shoes3 from "../assets/jordans/jordan-3.png";
import shoes4 from "../assets/jordans/jordan-4.png";
import shoes5 from "../assets/jordans/jordan-5.png";
import shoes6 from "../assets/jordans/jordan-6.png";
import shoes7 from "../assets/jordans/jordan-7.png";
import shoes8 from "../assets/jordans/jordan-8.png";
import shoes9 from "../assets/jordans/jordan-9.png";
import shoes10 from "../assets/jordans/jordan-10.png";
import shoes11 from "../assets/jordans/jordan-11.png";
import shoes12 from "../assets/jordans/jordan-12.png";

class AreaCard extends Component {
  render() {
    return (
      <div className="flex">
        <div className="grid grid-cols-1 gap-12 px-14 mb-14 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          <Card
            title="Air Jordan Blue and Black"
            image={shoes1}
            price="1350,50"
          />
          <Card
            title="Air Jordan Red and Black"
            image={shoes2}
            price="1350,50"
          />
          <Card
            title="Air Jordan Yellow Black "
            image={shoes3}
            price="1350,50"
          />
          <Card
            title="Air Jordan Red University"
            image={shoes4}
            price="1350,50"
          />
          <Card
            title="Air Jordan Purple Stadium"
            image={shoes5}
            price="1350,50"
          />
          <Card
            title="Air Jordan All White 3.0"
            image={shoes6}
            price="1350,50"
          />
          <Card
            title="Air Jordan Black Pinkless "
            image={shoes7}
            price="1350,50"
          />
          <Card
            title="Air Jordan Blue University"
            image={shoes8}
            price="1350,50"
          />
          <Card
            title="Air Jordan Chicago Bulls"
            image={shoes9}
            price="1350,50"
          />
          <Card
            title="Air Jordan Blue Sea and Sky"
            image={shoes10}
            price="1350,50"
          />
          <Card
            title="Air Jordan Cleveland Cavaliers"
            image={shoes11}
            price="1350,50"
          />
          <Card
            title="Air Jordan Gold States Warriors"
            image={shoes12}
            price="1350,50"
          />
        </div>
      </div>
    );
  }
}

export default AreaCard;
