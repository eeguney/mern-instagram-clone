import Slider from "../../Mainpage/Feeds/Slider/Slider";
import Button from "../Button";
import style from "./Cards.module.css";

const fullscreen = () => {
  document.documentElement.requestFullscreen()
}
const Cards = {
  
  Post: ({ post }) => {
    return (
      <article className={style.postItem} onClick={fullscreen}>
        <header>
          <div className={style.profileThumb}>
            <div className={style.inner}>
              <span>
                <img
                  src={post.userInfo.profilePhoto}
                  alt={post.userInfo.username}
                />
              </span>
            </div>
            <h3>{post.userInfo.username}</h3>
          </div>
          <Button.VerticalThreeDots />
        </header>
        <Slider images={post.post.data} />
        <div className={style.postController}>
          <div className={style.controls}>
            <Button.Activity width={38} />
            <Button.Comment width={34} />
            <Button.Share width={36} />
          </div>
          <Button.Bookmark width={38} />
        </div>
        <div className={style.likeInfo}>
          <div className={style.lastLikesImages}>
            <span
              style={{
                backgroundImage:
                  `url(${post.userInfo.profilePhoto})`,
              }}
            />
            <span
              style={{
                backgroundImage:
                `url(${post.userInfo.profilePhoto})`,
              }}
            />
            <span
              style={{
                backgroundImage:
                `url(${post.userInfo.profilePhoto})`,
              }}
            />
          </div>
          <p>
            Liked by <strong>alperensengun</strong> and 52.585 others
          </p>
        </div>
        <div className={style.description}>
          <p>
            <span className={style.username}>{post.userInfo.username}</span>
            {post.post.description}
          </p>
        </div>
        <button type="button" className={style.viewAllPosts}>
          View all 393 comments
        </button>
        <div className={style.addComment}>
          <img src={post.userInfo.profilePhoto} alt={post.userInfo.username} />
          <input type="text" placeholder="Add a comment..." />
        </div>
        <div className={style.date}>2 days ago</div>
      </article>
    );
  },
};
export default Cards;
