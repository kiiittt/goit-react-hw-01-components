import { Profile } from 'components/Profile/Profile'
import { Statistics } from './Statistics/Statistics'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile />
      <Statistics />
    </div>
  );
};
