import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = props => {
  const { id } = props;

  return (
    <div className={css.friensDiv} key={id}>
      <ul className={css.friendList}>
        {props.friends.map(data => (
          <li className={css.item} key={data.id}>
            <span
              className={`${css.status} ${
                data.isOnline ? css.online : css.offline
              }`}
            >
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
  item: PropTypes.string,
  isOnline: PropTypes.bool,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
