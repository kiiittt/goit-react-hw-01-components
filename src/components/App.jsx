import {Profile} from 'components/Profile/Profile'

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
    </div>
  );
};
