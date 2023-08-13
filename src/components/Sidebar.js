import "./Sidebar.css";

const Sidebar = ({ onAddUser, onDoubleMoney, onSort, onFilter }) => {
  return (
    <aside className="sidebar">
      <button type="button" onClick={onAddUser}>
        add user
      </button>
      <button type="button" onClick={onDoubleMoney}>
        double money
      </button>
      <button type="button" onClick={onFilter}>
        show only millionaires
      </button>
      <button type="button" onClick={onSort}>
        sort by richest
      </button>
    </aside>
  );
};

export default Sidebar;
