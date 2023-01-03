import { useNavigate, useParams } from 'react-router-dom';
const Profile = (props) => {
  let navigate = useNavigate();
  const { id } = useParams();

  return (
    <main>
      <h1>hei täs on ID: {id}</h1>
      <button onClick={() => navigate('/')}>Home</button>
      <h1>tos ylääl</h1>
    </main>
  );
};

export default Profile;
