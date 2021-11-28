import React from 'react';
import { BasketList } from 'components/basket';
// Just add this feature if you want :P
import Modal from './modal'
import { ImageLoader } from 'components/common';
import { displayMoney } from 'helpers/utils';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
if (window.screen.width <= 800){
  var margin='-150%';
}else{
  var margin='-60%';
}

function populate(){
 
}
const UserOrdersTab = (props) => (
 
  <div className="loader"  style={{ minHeight: '80vh' }}>
   
    <strong><span className="text-subtle">You don&apos;t have any orders</span></strong>
    
    <div className="basket-item" style={{marginTop:margin,backgroundColor:'white',width:'100%'}}>
      
      <div className="basket-item-wrapper">
        <div className="basket-item-img-wrapper">
          <ImageLoader
            alt=''
            className="basket-item-img"
            src=''
          />
        </div>
        <div className="basket-item-details">
         
          <div className="basket-item-specs">
            <div>
              <span className="spec-title">Quantity</span>
              <h5 className="my-0"></h5>
            </div>
            <div>
              <span className="spec-title">Order Status</span>
              <h5 className="my-0">asd</h5>
            </div>
           
          </div>
        </div>
        <div className="basket-item-price">
          <h4 className="my-0"></h4>
        </div>
        <Modal/>
      </div>
    </div>
  </div>
);


export default UserOrdersTab;