import React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutBillingDetails.scss';

const CheckoutBillingDetails = props => {
  const { userData } = props;

  return (
    <div className="checkout">
      <div className="submitUserData">
        <p>userData.name</p>
        <p>userData.surname</p>
        <p>userData.address</p>
        <p>userData.zipCode</p>
        <p>userData.city</p>
        <p>userData.country</p>
      </div>
      <div>Payment method</div>
      <Link to={"confirm"} className="confirmDetails">
        Save billing details
      </Link>
    </div>
  );
};

export default CheckoutBillingDetails;