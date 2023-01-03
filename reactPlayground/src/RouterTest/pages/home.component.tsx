import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>NYT OLLAA Kotona</h1>
      <button onClick={() => navigate(`/profile/0901289uf0mu090u90i0`)}>
        Painas
      </button>
    </main>
  );
};

export default Home;
