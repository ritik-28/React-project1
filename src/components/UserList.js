// import Card from "./Card";
import "./UserList.module.css";

const UsersList = (props) => {
  return (
    <div className="users-control">
      <ul>
        {props.users.map((user) => (
          <li key={user.id} className="list-control">
            {user.name} ({user.age} year old) {user.college}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
