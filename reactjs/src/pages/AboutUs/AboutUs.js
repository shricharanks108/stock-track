import { Link } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="AboutUsWrapper">
        <img
          className="AboutUsImg"
          src="https://images.pexels.com/photos/3737698/pexels-photo-3737698.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt=""
        />
        <h1 className="AboutUsTitle">
          About Us
          <div className="AboutUsEdit">
            <i className="AboutUsIcon far fa-edit"></i>
            <i className="AboutUsIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="AboutUsInfo">
          <span>
            We are GovStem Group 3
            <b className="AboutUsAuthor">
              <Link className="link" to="/home">
                Stock Track
              </Link>
            </b>
          </span>
          <span> </span>
        </div>
        <p className="AboutUsDesc">
          Our research group's goal is to minimize food waste. Our team lead and
          assistant research lead help guide high school students on how this 
          research project. There are 8 high school students, either working under
          front end, back end, or database. 
          <br />
          <br />
          We hope to use this project as a way of showing that it could 
          help reduce food waste and late use it in many different locations
          to help lessen New Jersey's contribution to the negative effects of 
          food waste. The first part of our research is to talk with local food 
          banks around New Jersey and ask what they liked and disliked about their
          current infrastructure. At the same time, we created collected existing
          data from local grocery stores, which will be used for us to predict
          the rate at which the products are selling and if they will be sold out
          by the expiry date. This will help reduce the amount of food wasted if 
          businesses know how much they should buy. 

        </p>
      </div>
    </div>
  );
}