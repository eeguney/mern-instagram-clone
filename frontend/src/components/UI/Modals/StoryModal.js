import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper";
import { CloseIcon } from "../Icons";
import style from "./Modal.module.css";
import "swiper/css/effect-creative";

const StoryModal = ({ username, date, profileThumb, data, setStoryShow }) => {
  console.log(data);
  return (
    <>
      {ReactDOM.createPortal(
        <div className={style.storyOverlay}>
          <Swiper
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            pagination={true}
            modules={[EffectCreative, Pagination]}
            className={style.storySlider}
          >
            {data.map((item, index) => (
              <SwiperSlide>
                <div
                  className={style.storyBack}
                  style={{ backgroundImage: `url(${item.story})` }}
                >
                  <header>
                    <div className={style.user}>
                      <img src={profileThumb} alt={username} />
                      <div className={style.userInfo}>
                        <label>{username}</label>
                        <span>{date}</span>
                      </div>
                    </div>
                    <button
                      className={style.closeButton}
                      type="button"
                      onClick={() => setStoryShow(false)}
                    >
                      <CloseIcon fill="white" size={25} />
                    </button>
                  </header>
                  {item.description !== null ? (
                    <div className={style.description}>
                      {item.description}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default StoryModal;
