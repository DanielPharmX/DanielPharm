import { ArrowRightOutlined, ShopOutlined } from '@ant-design/icons';
import { BasketList } from 'components/basket';
import { CHECKOUT_STEP_2 } from 'constants/routes';
import { displayMoney } from 'helpers/utils';
import { useDocumentTitle, useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StepTracker } from '../components';
import withCheckout from '../hoc/withCheckout';
import { useSelector } from 'react-redux';

const OrderSummary = ({ basket, subtotal }) => {
  const profile = useSelector((state) => state.profile);
  useDocumentTitle('Check Out Step 1 | Medix');
  useScrollTop();
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickPrevious = () => history.push('/');
  const onClickNext = () => history.push(CHECKOUT_STEP_2);
  basket.map((product)=>{
    //alert(product.id+" "+product.name+" "+product.quantity)
    var json_object='{"name":'+product.name+',+"quantity":'+product.quantity+'}';
    //JSON.stringify(json_object)
    //alert(JSON.stringify(json_object))
  })

  if (window.screen.width <= 800){
    var margin='20%'
  }else{
    var margin='0%'
  }

  return (
    <div className="checkout" style={{marginTop:margin}}>
      <StepTracker current={1} />
      <div className="checkout-step-1">
        <h3 className="text-center" style={{color:'green'}}>Hey {profile.fullname} you have successfully placed an Order.</h3>
        <span className="d-block text-center">List of Items Ordered.</span>
        <br />
        <div className="checkout-items">
          {basket.map((product) => (
            
            <BasketList
              basket={basket}
              dispatch={dispatch}
              key={product.id}
              product={product}
            />

          ))}
        </div>
        <br />
        <div className="basket-total text-center">
          <p className="basket-total-title">Subtotal:</p>
          <h2 className="basket-total-amount ">{displayMoney(subtotal)}</h2>
        </div>
        <br />
        <h1 className="text-center" style={{color:'green'}}>We will send payment details to your mentioned Email Id and a customer executive will get in touch with You.</h1>
            <br/>
            <div class="flex-col my-auto text-center">
                    <h4 class="ml-auto mr-3" > <a href="#"><u style={{color: '#8A2BE2'}}>View Details</u></a> </h4>
            </div>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  basket: PropType.arrayOf(PropType.object).isRequired,
  subtotal: PropType.number.isRequired
};

export default withCheckout(OrderSummary);
