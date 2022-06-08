import React from 'react';
import './diningitems.css';

import { NavBar, Items } from '../../components';
import { Footer } from '../../containers';
import { foodDatas } from './import';
import ChefHat from '../../assets/eatern_hat.png';

const DiningItems = () => {
  return (
    <div className='diningitems'>
        <div className="dining-items-main">
            <NavBar />
            <div className="dining-items-content">
                <div className="dining-items-heading">
                    <p>Today's Special...</p>
                </div>
                <img src={ ChefHat } alt="" />
            </div>
            <div className="dining-food-items">
                <div className="chicken-fries for-media-screen">
                    <Items food={ foodDatas["chickenfries"]["img"] } heading={ foodDatas["chickenfries"]["heading"] } description={ foodDatas["chickenfries"]["descp"] } />
                </div>
                <div className="pasta for-media-screen">
                    <Items food={ foodDatas["pasta"]["img"] } heading={ foodDatas["pasta"]["heading"] } description={ foodDatas["pasta"]["descp"] } />
                </div>
                <div className="grill-chicken for-media-screen">
                    <Items food={ foodDatas["grillChicken"]["img"] } heading={ foodDatas["grillChicken"]["heading"] } description={ foodDatas["grillChicken"]["descp"] } />
                </div>
                <div className="mutton-biriyani for-media-screen">
                    <Items food={ foodDatas["muttonBiriyani"]["img"] } heading={ foodDatas["muttonBiriyani"]["heading"] } description={ foodDatas["muttonBiriyani"]["descp"] } />
                </div>
                <div className="dosa for-media-screen">
                    <Items food={ foodDatas["dosa"]["img"] } heading={ foodDatas["dosa"]["heading"] } description={ foodDatas["dosa"]["descp"] } />
                </div>
                <div className="parotta for-media-screen">
                    <Items food={ foodDatas["parotta"]["img"] } heading={ foodDatas["parotta"]["heading"] } description={ foodDatas["parotta"]["descp"] } />
                </div>
                <div className="veg-biriyani for-media-screen">
                    <Items food={ foodDatas["vegBiriyani"]["img"] } heading={ foodDatas["vegBiriyani"]["heading"] } description={ foodDatas["vegBiriyani"]["descp"] } />
                </div>
                <div className="tea for-media-screen">
                    <Items food={ foodDatas["tea"]["img"] } heading={ foodDatas["tea"]["heading"] } description={ foodDatas["tea"]["descp"] } />
                </div> 
                <div className="coffee for-media-screen">
                    <Items food={ foodDatas["coffee"]["img"] } heading={ foodDatas["coffee"]["heading"] } description={ foodDatas["coffee"]["descp"] } />
                </div> 
                <div className="juice for-media-screen">
                    <Items food={ foodDatas["juice"]["img"] } heading={ foodDatas["juice"]["heading"] } description={ foodDatas["juice"]["descp"] } />
                </div> 
                <div className="mutton-fries for-media-screen">
                    <Items food={ foodDatas["muttonFries"]["img"] } heading={ foodDatas["muttonFries"]["heading"] } description={ foodDatas["muttonFries"]["descp"] } />
                </div>
                <div className="fish-biriyani for-media-screen">
                    <Items food={ foodDatas["fishBiriyani"]["img"] } heading={ foodDatas["fishBiriyani"]["heading"] } description={ foodDatas["fishBiriyani"]["descp"] } />
                </div>
                <div className="fish-curry for-media-screen">
                    <Items food={ foodDatas["fishCurry"]["img"] } heading={ foodDatas["fishCurry"]["heading"] } description={ foodDatas["fishCurry"]["descp"] } />
                </div>
                <div className="noodles for-media-screen">
                    <Items food={ foodDatas["noodles"]["img"] } heading={ foodDatas["noodles"]["heading"] } description={ foodDatas["noodles"]["descp"] } />
                </div> 
                <div className="lemon-juice for-media-screen">
                    <Items food={ foodDatas["lemonJuice"]["img"] } heading={ foodDatas["lemonJuice"]["heading"] } description={ foodDatas["lemonJuice"]["descp"] } />
                </div>
                <div className="salad for-media-screen">
                    <Items food={ foodDatas["salad"]["img"] } heading={ foodDatas["salad"]["heading"] } description={ foodDatas["salad"]["descp"] } />
                </div>
            </div>
            <div className="btns">
                <button type='submit' className='btn-send-order'>Send Order</button>
                <button type='submit' className='btn-go-back'>Go Back</button>
            </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default DiningItems