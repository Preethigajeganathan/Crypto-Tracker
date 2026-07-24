import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrowicon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", Symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", Symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", Symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", Symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/features">Features</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "user-avatar",
              userButtonPopoverCard: "user-popover",
              userButtonPopoverActionButton: "user-action",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
