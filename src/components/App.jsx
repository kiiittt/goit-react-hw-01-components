import { Profile } from 'components/Profile/Profile'
import { Statistics } from './Statistics/Statistics'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
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
    </div>
  );
};
