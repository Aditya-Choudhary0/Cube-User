import React, { useState } from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import './App.css';
import {users} from "./data/data"

const App: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(1);

  const handleSelectUser = (userId: number) => {
    setSelectedUserId(userId);
  };


  return (
    <div className="App">
      <h2>This here is the Heading</h2>
      <div className="mainDiv">
        <UserList users={users} onSelectUser={handleSelectUser} selectedUserId={selectedUserId} />
        <UserDetails userId={selectedUserId} />
      </div>
    </div>
  );
};

export default App;


