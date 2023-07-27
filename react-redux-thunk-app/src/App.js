// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './actions/userActions';
import User from './components/User';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleFetchData = () => {
    dispatch(fetchUserData());
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={handleFetchData}>Fetch Data</button>
      <br />
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
