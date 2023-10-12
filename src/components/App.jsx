import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friends/FriendList';
import TransactionHistory from './transactions/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
