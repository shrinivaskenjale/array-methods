import "./UsersList.css";

const UsersList = ({ users }) => {
  const renderedUsers = users.map((user, index) => {
    return (
      <div className="user" key={user.name}>
        <div>{user.name}</div>
        <div>${formatMoney(user.wealth)}</div>
      </div>
    );
  });

  const totalWealth = users.reduce((result, user) => user.wealth + result, 0);

  return (
    <section className="users-list">
      <div className="user-header">
        <div>Person</div>
        <div>Wealth</div>
      </div>
      {renderedUsers}
      <div className="user-footer">
        <div>Total Wealth</div>
        <div>${formatMoney(totalWealth)}</div>
      </div>
    </section>
  );
};

export default UsersList;

const formatMoney = (num) => {
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
