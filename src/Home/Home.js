import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg' alt="Banner"/>
            <div className='home__row'>
                <Product id="123" title="The lean startup" price={19.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg' rating={5}/>
                <Product id="23" image='https://images-na.ssl-images-amazon.com/images/I/71OYYgk%2Bz2L._UY500_.jpg' title='Blinder Mens Party Casual Loafers Shoes On Amazon.in' rating={4} price={129}/>
            </div>
            <div className='home__row'>
            <Product id="322" image="https://images-na.ssl-images-amazon.com/images/I/71ovtmsCTEL._SY450_.jpg" price={499} rating={3} title="Accu-Chek Active Blood Glucose Meter Kit, Vial of 10 strips free (Multicolor)"/>
                <Product  id="12" image="https://images-na.ssl-images-amazon.com/images/I/610gfNhqn8L._SX355_.jpg" title="Little’s Soft Baby Ball with Rattle Sound (11 cm)" price={149} rating={4}/>
                <Product image="https://images-na.ssl-images-amazon.com/images/I/61PVIzk6ALL._SX679_.jpg" id="3455" title="SanDisk Cruzer Blade SDCZ50-016G-135 16GB USB 2.0 Pen Drive" price={1499}
                rating={4}/>
            </div>
            <div className='home__row'>
            <Product id="656" image="https://images-na.ssl-images-amazon.com/images/I/71KVQa4N4zL._SX679_.jpg" title="LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55BXPTA (Dark Steel Silver) (2020 Model)" price={133460} rating={3}/>
            </div>
            </div>
        </div>
    )
}
export default Home
