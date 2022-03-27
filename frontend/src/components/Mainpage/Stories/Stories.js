import { lazy, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import style from "./Stories.module.css";

const StoryModal = lazy(() => import("../../UI/Modals/StoryModal"));

export default function Stories() {
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.user);
  const stories = useSelector((state) => state.story.stories);
  const [storyShow, setStoryShow] = useState({
    open: false,
    profileThumb: "",
    description: "",
    story: "",
    username: "",
  });
  return (
    <>
      <section className={style.stories}>
        <div
          className={`${style.item} ${style.itemAdd}`}
          onClick={() => navigate("/addstory")}
        >
          <div className={style.inner}>
            <span className={style.thumb}>
              <img
                src={authUser.profilePhoto}
                alt={authUser.username}
                className={style.thumb}
              />
            </span>
          </div>
          <label>Your story</label>
        </div>
        {stories.map((group, index) => (
          <div
            key={index}
            className={style.item}
            onClick={() =>
              setStoryShow({
                show: true,
                profileThumb: group.user.profilePhoto,
                username: group.user.username,
                data: group.data,
              })
            }
          >
            <div className={style.inner}>
              <span className={style.thumb}>
                <img
                  src={group.data[0].story[0]}
                  alt="thumb"
                  className={style.thumb}
                />
              </span>
            </div>
            <label>{group.user.username}</label>
          </div>
        ))}
      </section>
      {storyShow.show ? (
        <StoryModal
          username={storyShow.username}
          date="19m"
          profileThumb={storyShow.profileThumb}
          data={storyShow.data}
          setStoryShow={setStoryShow}
        />
      ) : (
        ""
      )}
    </>
  );
}
