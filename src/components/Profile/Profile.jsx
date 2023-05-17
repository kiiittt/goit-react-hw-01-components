import css from './Profile.module.css'
import userData from './user.json'

export const Profile = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (<div className={css.profile} key='profile-id'>
        <div className={css.description}>
     <img
          src={avatar}
          alt="User avatar"
          className={css.avatar} />
            <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
  </div>

        <ul className={css.stats}>
    <li className={css.liStats}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.liStats}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.liStats}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}




// <img className={css.avatar} src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" height='34px' width='34px'>{ }</img>