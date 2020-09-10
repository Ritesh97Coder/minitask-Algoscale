import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';



function HomeScreen(props) {
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(listProducts());

    return () => {
      //
    };
  }, [])
  return <h1>create a backend/frontend for admin 
  <p>1.An admin login page</p>
  <p>2.Validate ID and Password</p>
  <p>3.If Valid, redirect to the profile page.</p>
  <p>4.If Invalid, redirect to a Signup page.</p>
  <p>5.Post Login/Signup, display all existing User ID on profile page using a dropdown list.</p>
  <p>6.Delete button to delete the selected User ID from the database.</p>
  <p>7.Logout</p>
  </h1>

  
  
}
export default HomeScreen;