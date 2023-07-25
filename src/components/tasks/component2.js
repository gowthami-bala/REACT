import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function OtherComponent() {
  const navigateBack = useNavigate()
  const location = useLocation();
  console.log(location);
  const data = location.state.getdata;
  const handnavback = () => {
    navigateBack('/componentOne')
  }
  return (
    <div>
      <h1>Other Component</h1>
      <p>ID: {data.id}</p>
      <p>Name: {data.userId}</p>
      <p>title: {data.title}</p>
      <p>body: {data.body}</p>
      <button onClick={handnavback}>Back</button>
    </div>
  );
}

export default OtherComponent;
