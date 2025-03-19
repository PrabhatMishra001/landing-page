import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UserListContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #6200ea;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #3700b3;
    box-shadow: 0 0 6px rgba(98, 0, 234, 0.4);
  }
`;

const UserCard = styled.div`
  background: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
  width: 300px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
  width: 350px;
  text-align: center;
  z-index: 1000;

  button {
    margin-top: 10px;
    background: #6200ea;
    color: #ffffff;
    border: none;
    padding: 8px 20px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: #3700b3;
    }
  }
`;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [defaultUser, setDefaultUser] = useState(null);

  // ✅ Fetch data from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setDefaultUser(response.data[0]); // ✅ Show only one user by default
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // ✅ Filter users based on search term
  const filteredUsers = search
    ? users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <UserListContainer>
      <h2>User List</h2>

      {/* ✅ Search bar */}
      <SearchBar
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ✅ Show only one user by default */}
      {!search && defaultUser && (
        <UserCard onClick={() => setSelectedUser(defaultUser)}>
          <h3>{defaultUser.name}</h3>
          <p><strong>Email:</strong> {defaultUser.email}</p>
        </UserCard>
      )}

      {/* ✅ Show filtered results after search */}
      {search &&
        filteredUsers.map((user) => (
          <UserCard key={user.id} onClick={() => setSelectedUser(user)}>
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
          </UserCard>
        ))}

      {/* ✅ Modal for selected user details */}
      {selectedUser && (
        <Modal>
          <h3>{selectedUser.name}</h3>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Phone:</strong> {selectedUser.phone}</p>
          <p><strong>Company:</strong> {selectedUser.company.name}</p>
          <button onClick={() => setSelectedUser(null)}>Close</button>
        </Modal>
      )}
    </UserListContainer>
  );
};

export default UserList;
