import React from "react";
import './Header.style.scss';
import logo from '../../img/crown.svg';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../Firebase/firebase.utils';
import CardIcon from '../Cart-icon/CartIcon.component';
import CartDropDown from '../CartDropDown/CartDropDown.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

const Header = ({currentUser, cartDropdownVisible }) => (
    <header>
        <Link to="/"><h1><img src={logo} alt="logo" /></h1></Link>
        <nav>
            <ul>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    {
                        currentUser ? <div className="option" onClick={()=> auth.signOut()}>Sign Out</div> : <Link className="option" to="/sign-in">Sign In</Link>
                    }
                </li>
                <li>
                    <CardIcon/>
                </li>
                {cartDropdownVisible && <CartDropDown/>}
            </ul>
        </nav>
    </header>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownVisible: selectCartHidden,
})

export default connect(mapStateToProps)(Header);