import  styles from "./userDetails.module.css";

const UserDetails = (props) => {
  const {
    user: {
      address,
      avatar,
      first_name,
      followers,
      id,
      is_following,
      karma,
      last_name,
      posts,
    },
  } = props;
  return (
    <>
      <div className={styles.container} data-testid="user-container">
        {/* user image */}
        <img src={avatar} alt="This is an image" />
        <div className={styles.subcontainer}>
          <div className={styles.name}>
            <h3 data-testid="user-fname">
              {first_name}
            </h3>
            <h3 data-testid="user-lname">
              {last_name}
            </h3>
          </div>
          <div>
            <p data-testid="user-address">
              {address}
            </p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">
            {karma}
            <p>Karma</p>
          </h3>
        </div>
        <div>
          <h3 data-testid="user-followers">
            {followers}
            <p>followers</p>
          </h3>
        </div>
        <div>
          <h3 data-testid="user-posts">
            {posts}
            <p>posts</p>
          </h3>
        </div>
        <button className={styles.buttons} data-testid="follow-btn">
          {is_following?"Unfollow":"Follow"}
        </button>
      </div>
    </>
  );
};
export default UserDetails;
