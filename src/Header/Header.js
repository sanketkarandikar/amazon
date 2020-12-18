import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RoomIcon from '@material-ui/icons/Room';
import { Link} from 'react-router-dom';
import { useStateValue } from '../Store/StateProvider';
import { auth } from '../firebase';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuth = () => {
        auth.signOut();
    }
    return (
        <div className='header'>
                <Link to="/">
            <div className='header__logoInContainer'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/><span className='header__iconIn'>.in</span>
            </div>
            </Link>
            <div className='header__option_map'>
            <RoomIcon/>
            <div className="hello__name">
                    <span className='header__optionLineOne'>
                        Hello 
                    </span>
                    <span className='header_optionLineTwo'>
                        Select your address
                    </span>
                    </div>
                </div>
            <div className='header__search' type="text">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
            <Link to={!user && "/login"} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <div onClick={handleAuth} className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello, {user?.email ? user?.email : 'Guest'}
                    </span>
                    <span className='header_optionLineTwo'>
                        {user?.email ? 'Singout' : 'Sign In'}
                    </span>
                </div>
                </Link>
                <div className='header__option'>
                <span className='header__optionLineOne'>
                        Returns 
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header__option'>
                <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <AddShoppingCartIcon/>
                    <span className='header__optionTwo header__basketCount'>
                        {basket?.length}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
