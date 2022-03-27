import { useState } from "react";
import style from "./AddPostStory.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Wrapper from "../Wrapper";
import { addPost, addStory, uploadtoCloudinary } from "../../api";
import { UPLOADPRESET } from "../../constants/Cloudinary";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { CloseIcon } from "../UI/Icons";

const AddPostStory = ({ type }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(null);

  const [createObjectURL, setCreateObjectURL] = useState([]);

  const images = [];
  const url = [];
  const uploadToClient = (event) => {
    const files = event.target.files;
    if (files && files[0]) {
      for (let i = 0; i < files.length; i++) {
        images.push(files[i]);
        url.push(URL.createObjectURL(files[i]));
        setImage(images);
        setCreateObjectURL(url);
      }
    }
  };

  const share = async () => {
    setLoading(true);
    try {
      const imageSafeUrl = [];
      const formData = new FormData();
      for (const item of image) {
        formData.append("file", item);
        formData.append("upload_preset", UPLOADPRESET);
        const uploadRes = await uploadtoCloudinary(formData);
        imageSafeUrl.push(uploadRes.data.secure_url);
      }
      if (type === "POST") {
        await addPost(user._id, {
          description,
          data: imageSafeUrl,
        }).then(() => navigate("/"));
      } else if (type === "STORY") {
        await addStory(user._id, {
          description,
          story: imageSafeUrl,
        }).then(() => navigate("/"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper header={false} navigation={false}>
      <section className={style.addPost}>
        <button
          className={style.closeButton}
          type="button"
          onClick={() => navigate("/")}
        >
          <CloseIcon fill="white" size={25} />
        </button>
        <div className={style.selectedImage}>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className={style.slider}
          >
            <div className={style.imageWrapper}>
              {createObjectURL.map((image) => (
                <SwiperSlide>
                  <img src={image} alt="post" />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        <div className={style.imageSelectContainer}>
          {type === "POST" ? (
            <input type="file" multiple name="image" onChange={uploadToClient} />
          ) : (
            <input type="file" name="image" onChange={uploadToClient} />
          )}

          <div className={style.selecter}>SELECT PHOTOS</div>
        </div>
        <div className={`${style.postDescription} fadeInScale`}>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Comment..."
          />
        </div>
        <button
          type="button"
          className={`${style.shareButton} fadeInScale`}
          onClick={share}
        >
          SHARE
        </button>
        {loading ? <div className={style.loading}>Please wait...</div> : ""}
      </section>
    </Wrapper>
  );
};

export default AddPostStory;
