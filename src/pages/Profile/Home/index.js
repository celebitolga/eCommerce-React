import './index.scss';

// context
import { useAuth } from "../../../context/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <section className="profile-home">
      <div className="profile-home__wrapper">

        <h1 className="profile-home-title">My Profile</h1>

        <div className="profile-home__content">
          <p>
            {JSON.stringify(user)}
          </p>
        </div>

      </div>
    </section>
  )
}

export default Home