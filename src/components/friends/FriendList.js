import friends from 'components/friends/friends.json';

const FriendList = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li class="item">
          <span class="status">{friend.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </>
  );
};

export default function Friends() {
  return (
    <ul>
      <FriendList friends={friends} />
    </ul>
  );
}
