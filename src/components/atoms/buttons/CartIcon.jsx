import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartIcon.scss";
function CartIcon() {
	return (
		<button className="icon-button">
			<AiOutlineShoppingCart className="icon-large" />
		</button>
	);
}

export default CartIcon;
