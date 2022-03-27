import React from "react";
import { useSelector } from "react-redux"
import style from "../Discover.module.css";

export default function DiscoverFeeds() {
  const posts = useSelector((state) => state.post.posts)

  return (
    <section className={style.discoverLayout}>
      {posts.map((post, index) =>
        index === 1 ? (
          <div className={`${style.box} ${style.bigger}`}>
            <img src={post.post.data[0]} alt={post.userInfo.username} />
          </div>
        ) : (
          <div className={style.box} key={index}>
            <img src={post.post.data[0]} alt={post.userInfo.username} />
          </div>
        )
      )}
    </section>
  );
}
