import { CHECKOUT_STEP_1, CHECKOUT_STEP_4 } from 'constants/routes';
import { Form, Formik } from 'formik';
import { displayActionMessage } from 'helpers/utils';
import { useDocumentTitle, useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { StepTracker } from '../components';
import withCheckout from '../hoc/withCheckout';
import CreditPayment from './CreditPayment';
import PayPalPayment from './PayPalPayment';
import { useDispatch, useSelector } from 'react-redux';
import Total from './Total';
import { useHistory } from 'react-router-dom';
import { clearBasket } from 'redux/actions/basketActions';

//var beautify = require("json-beautify");
const axios = require('axios');


const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Name should be at least 4 characters.')
    .required('Name is required'),
  cardnumber: Yup.string()
    .min(13, 'Card number should be 13-19 digits long')
    .max(19, 'Card number should only be 13-19 digits long')
    .required('Card number is required.'),
  expiry: Yup.date()
    .required('Credit card expiry is required.'),
  ccv: Yup.string()
    .min(3, 'CCV length should be 3-4 digit')
    .max(4, 'CCV length should only be 3-4 digit')
    .required('CCV is required.'),
  type: Yup.string().required('Please select paymend mode')
});

const Payment = ({ basket, shipping, payment, subtotal }) => {
  const profile = useSelector((state) => state.profile);
  useDocumentTitle('Check Out Final Step | Medix');
  useScrollTop();
  const history = useHistory();
  const dispatch = useDispatch();

  const initFormikValues = {
    name: payment.name || '',
    cardnumber: payment.cardnumber || '',
    expiry: payment.expiry || '',
    ccv: payment.ccv || '',
    type: payment.type || 'paypal'
  };

  const onConfirm = () => {
  //  alert("Hello"+basket)
    displayActionMessage('Feature not ready yet :)', 'info');
  };

  if (!shipping || !shipping.isDone) {
    return <Redirect to={CHECKOUT_STEP_1} />;
  }
  
  if (window.screen.width <= 800){
    var margin='20%'
  }else{
    var margin='0%'
  }
  return (
    <div className="checkout" style={{marginTop:margin}}>
      <StepTracker current={3} />
      <Formik
        initialValues={initFormikValues}
        validateOnChange
        validationSchema={FormSchema}
        validate={(form) => {
          if (form.type === 'paypal') {
           // alert("Hello")
          basket.map((product)=>{
            //alert(product.id+" "+product.name+" "+product.quantity)
            //JSON.stringify(product)
           // console.log(JSON.stringify(product))
           // console.log(product.id+" "+product.name+" "+product.quantity)
     
           const prod = {custName:shipping.fullname,custContact:shipping.mobile,custEmail:shipping.email,custAdd:shipping.address,productId: product.id, productName:product.name, productQuantity:product.quantity, price:product.price * product.quantity};
           axios.post('http://192.168.0.193:8000/',prod).then(function (response) {
            //displayActionMessage('Feature not ready yet :)', 'info');
            history.push(CHECKOUT_STEP_4)

           // dispatch(clearBasket());
            //history.push('/');
            //alert(response);
            })
        .catch(function (error) {
           // alert(error);
         });
          })
       //     displayActionMessage('Feature not ready yet :)', 'info');
          }
        }}
        onSubmit={onConfirm}
      >
        {() => (
          <Form className="checkout-step-3">
            <PayPalPayment />
            <Total
              isInternational={shipping.isInternational}
              subtotal={subtotal}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

Payment.propTypes = {
  shipping: PropType.shape({
    isDone: PropType.bool,
    isInternational: PropType.bool
  }).isRequired,
  payment: PropType.shape({
    name: PropType.string,
    cardnumber: PropType.string,
    expiry: PropType.string,
    ccv: PropType.string,
    type: PropType.string
  }).isRequired,
  subtotal: PropType.number.isRequired
};

export default withCheckout(Payment);
