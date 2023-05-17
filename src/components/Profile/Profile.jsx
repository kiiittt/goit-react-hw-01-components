import css from './Profile.module.css'

export const Profile = ({array}) => {
    return (<div className={css.profile} key='profile-id'>
        <div className={css.description}>
    <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                alt="User avatar"
                className={css.avatar}
    />
            <p className={css.name}>Petra Marica</p>
    <p className={css.tag}>@pmarica</p>
            <p className={css.location}>Salvador, Brasil</p>
  </div>

        <ul className={css.stats}>
    <li className={css.liStats}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>1000</span>
    </li>
    <li className={css.liStats}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>2000</span>
    </li>
    <li className={css.liStats}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>3000</span>
    </li>
  </ul>
</div>
    )
}




// <img className={css.avatar} src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" height='34px' width='34px'>{ }</img>