/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormikContext } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';

const PayPalPayment = () => {
  const { values, setValues } = useFormikContext();
  const profile = useSelector((state) => state.profile);

  return (
    <div className={`checkout-fieldset-collapse ${values.type === 'paypal' ? 'is-selected-payment' : ''}`}>
      <div className="checkout-field margin-0">
        <div className="checkout-checkbox-field">
          <input
            checked={values.type === 'paypal'}
            id="modePayPal"
            name="type"
            onChange={(e) => {
              if (e.target.checked) {
                setValues({ ...values, type: 'paypal' });
              }
            }}
            type="radio"
          />
          <label
            className="d-flex w-100"
            htmlFor="modePayPal"
          >
            <div className="d-flex-grow-1 margin-left-s">
              <h4 className="margin-0">Pay Later</h4>
              <span className="text-subtle d-block margin-top-s">
                Once you confirm the order you will receive the payment information on your mail.
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PayPalPayment;
