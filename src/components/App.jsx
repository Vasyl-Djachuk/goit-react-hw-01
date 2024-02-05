
import { Profile} from './profile/Profile'
import userData from'../userData.json'
import './App.css'
// const userData = JSON.parse(userDat);
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};


export default App
