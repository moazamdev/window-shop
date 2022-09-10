import React from "react";
import { ReactComponent as ShopingIcon } from '../../assests/shoping-bag.svg';
import { connect } from 'react-redux';
import { ToggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-icon.styles.scss';

const CartIcon = ({ToggleCartHidden}) => (
    <div className="cart-icon" onClick={ToggleCartHidden}>
        <ShopingIcon className="shoping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);