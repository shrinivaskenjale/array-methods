import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import UsersList from "./components/UsersList";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = async () => {
    const response = await axios.get("https://randomuser.me/api");
    const { first, last } = response.data.results[0].name;

    const newUser = {
      name: `${first} ${last}`,
      wealth: Math.floor(Math.random() * 1000001),
    };

    setUsers((u) => [...u, newUser]);
  };

  const handleDoubleMoney = () => {
    setUsers((u) => {
      return u.map((user) => {
        return { ...user, wealth: 2 * user.wealth };
      });
    });
  };

  const handleSort = () => {
    setUsers((u) => {
      const updatedUsers = [...u];
      updatedUsers.sort((a, b) => (a.wealth - b.wealth) * -1);
      return updatedUsers;
    });
  };

  const handleFilter = () => {
    setUsers((u) => {
      return u.filter((user) => user.wealth >= 1000000);
    });
  };

  return (
    <main className="section">
      <div className="section-title">
        <h1>Array Methods</h1>
      </div>
      <div className="section-center">
        <Sidebar
          onAddUser={handleAddUser}
          onDoubleMoney={handleDoubleMoney}
          onSort={handleSort}
          onFilter={handleFilter}
        />
        <UsersList users={users} />
      </div>
    </main>
  );
};

export default App;
