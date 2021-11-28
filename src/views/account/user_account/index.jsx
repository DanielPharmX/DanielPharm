/* eslint-disable react/no-multi-comp */
import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React, { lazy, Suspense } from 'react';
import UserTab from '../components/UserTab';
import {useState,useEffect} from 'react'; 

const UserAccountTab = lazy(() => import('../components/UserAccountTab'));
const UserWishListTab = lazy(() => import('../components/UserWishListTab'));
const UserOrdersTab = lazy(() => import('../components/UserOrdersTab'));

const Loader = () => (
  <div className="loader" style={{ minHeight: '80vh' }}>
    <LoadingOutlined />
    <h6>Loading ... </h6>
  </div>
);

const UserAccount = () => {
  useScrollTop();
  useDocumentTitle('My Account | Medix');
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/api/orders/hmzaql9454@gmail.com")
      .then((res) => res.json())
      .then((data) => {setOrder(data);}).catch(()=>{alert('Hello')});
  }, []);


  return (
    <UserTab>
      <div index={0} label="Account">
        <Suspense fallback={<Loader />}>
          <UserAccountTab />
        </Suspense>
      </div>
      <div index={1} label="My Wish List">
        <Suspense fallback={<Loader />}>
          <UserWishListTab />
        </Suspense>
      </div>
      <div index={2} label="My Orders">
        <Suspense fallback={<Loader />}>
          <UserOrdersTab orderObj={order}/>
        </Suspense>
      </div>
    </UserTab>
  );
};

export default UserAccount;
