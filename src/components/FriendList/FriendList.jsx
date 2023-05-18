import css from './FriendList.module.css';
import friendsData from './friends.json';
import PropTypes from 'prop-types';

export const FriendList = () => {
    const { isOnline, id } = friendsData;

  return (
    <div className={css.friensDiv} key={id}>
      <ul className={css.friendList}>
        {friendsData.map(data => (
          <li
            className={css.item}
            key={data.id}
          >
            <span className={`${css.status} ${
              data.isOnline ? css.online : css.offline
            }`} >
              {data.isOnline}
            </span>
            <img
              className={css.avatar}
              src={data.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{data.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


FriendList.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
};