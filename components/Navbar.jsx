import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar-container">
      <p>
        <Link href="/">MG[dev] ElectricEdge</Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
}

export default Navbar;
