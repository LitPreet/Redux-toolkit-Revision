import React from 'react';
import styled from "styled-components";
// import {  clearAllUsers } from '../store/slices/UserSlices'
import {  clearAllUsers } from '../store/actions/index'
import { useDispatch } from 'react-redux';

const DeleteAllUSer = () => {
const dispatch = useDispatch();
const deleteUsers = () => 
{
  dispatch( clearAllUsers());
}
  return (
    <Wrapper>
<button className="btn clear-btn" onClick={deleteUsers} >Clear users</button>
      </Wrapper>
  )
}
const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338a;
    margin-top:2rem;
  }
`

export default DeleteAllUSer

