import './UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Âge: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};




export default UserProfile;

