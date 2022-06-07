import React from 'react';
import './restaurants.css';

import RestaurantDetail from '../restaurantDetail/RestaurantDetail';

import { RestaurantImage1, RestaurantImage2, RestaurantImage3, RestaurantImage4 } from './import';

import LocationMenuLeft from '../../assets/location-menu-left.svg';
import LocationMenuRight from '../../assets/location-menu-right.svg';

const Restaurants = () => {

  var lastElement = 1;
  var nextElement = 2;

  var img1 = document.getElementsByClassName('1');
  var img2 = document.getElementsByClassName('2');
  var img3 = document.getElementsByClassName('3');
  var img4 = document.getElementsByClassName('4');

  function checker(element, imgVal) {
    for(var i=0; i<imgVal[0].classList.length; i++) {
      if (element === imgVal[0].classList[i]) {
        return true;
      }
    }
    return false;
  }

  var allImg = [img1, img2, img3, img4];
  
  function selectedImgFunction(mainNum) {

    if (parseInt(mainNum) > 1) {
      lastElement = parseInt(mainNum)-1;
    }

    if (parseInt(mainNum) < 4) {
      nextElement = parseInt(mainNum)+1;
    }

    var main = document.getElementsByClassName(mainNum);

    for(var i in allImg) {
      if (allImg[i] === main) {
        if (checker('notMainLocation', main)) {
          main[0].classList.remove('notMainLocation');
          main[0].classList.add('mainLocation');
          main[1].classList.remove('notMainLocation');
          main[1].classList.add('mainLocation');
        }
      }
      else {
        if (checker('mainLocation', allImg[i])) {
          allImg[i][0].classList.remove('mainLocation');
          allImg[i][0].classList.add('notMainLocation');
          allImg[i][1].classList.remove('mainLocation');
          allImg[i][1].classList.add('notMainLocation');
        }
      }
    }
  }

  function startAllFunctions(idData) {
    selectedImgFunction(idData);
  }

  return (
    <div className='restaurants-page-selection'>
      <div className="restaurants-page-content">
        <ul>
          <li className='button-main-location-left button-main-location' onClick={ () => startAllFunctions(lastElement.toString()) }><div className="left-button-main location-button-menu"><img src={ LocationMenuLeft } alt="" /></div></li>
          <li className='1 mainLocation'><a href="https://www.google.com/maps/place/Thiagarajar+College+of+Engineering/@9.8821321,78.0793642,17z/data=!3m1!4b1!4m5!3m4!1s0x3b00c58f98cfb84d:0x29f51efea3e84bf2!8m2!3d9.8821321!4d78.0815529" target="_blank"><RestaurantDetail img={ RestaurantImage1 } addressLine1={ '160A/23, TCE College' } addressLine2={ 'Thiruparakundram' } /></a></li>
          <li className='2 notMainLocation'><a href="https://www.google.com/maps/place/Thiagarajar+College+of+Engineering/@9.8821321,78.0793642,17z/data=!3m1!4b1!4m5!3m4!1s0x3b00c58f98cfb84d:0x29f51efea3e84bf2!8m2!3d9.8821321!4d78.0815529" target="_blank"><RestaurantDetail img={ RestaurantImage2 } addressLine1={ '160A/23, TCE College' } addressLine2={ 'Thiruparakundram' } /></a></li>
          <li className='3 notMainLocation'><a href="https://www.google.com/maps/place/Thiagarajar+College+of+Engineering/@9.8821321,78.0793642,17z/data=!3m1!4b1!4m5!3m4!1s0x3b00c58f98cfb84d:0x29f51efea3e84bf2!8m2!3d9.8821321!4d78.0815529" target="_blank"><RestaurantDetail img={ RestaurantImage3 } addressLine1={ '160A/23, TCE College' } addressLine2={ 'Thiruparakundram' } /></a></li>
          <li className='4 notMainLocation'><a href="https://www.google.com/maps/place/Thiagarajar+College+of+Engineering/@9.8821321,78.0793642,17z/data=!3m1!4b1!4m5!3m4!1s0x3b00c58f98cfb84d:0x29f51efea3e84bf2!8m2!3d9.8821321!4d78.0815529" target="_blank"><RestaurantDetail img={ RestaurantImage4 } addressLine1={ '160A/23, TCE College' } addressLine2={ 'Thiruparakundram' } /></a></li>
          <li className='button-main-location-right button-main-location' onClick={ () => startAllFunctions(nextElement.toString()) }><div className="right-button-main location-button-menu"><img src={ LocationMenuRight } alt="" /></div></li>
        </ul>
      </div>
      <div className="restaurants-content-shift">
        <ul>
          <li><div className="1 mainLocation button-selection" onClick={ () => startAllFunctions('1') }></div></li>
          <li><div className="2 notMainLocation button-selection" onClick={ () => startAllFunctions('2') }></div></li>
          <li><div className="3 notMainLocation button-selection" onClick={ () => startAllFunctions('3') }></div></li>
          <li><div className="4 notMainLocation button-selection" onClick={ () => startAllFunctions('4') }></div></li>
        </ul>
      </div>
    </div>
  )
}

export default Restaurants