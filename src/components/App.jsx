import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile />
      <Statistics />
      <FriendList />
    </div>
  );
};
