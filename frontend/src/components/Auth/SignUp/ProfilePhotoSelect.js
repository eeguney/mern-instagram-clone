import { useState } from "react";
import { ProfilePhotoIcon } from "../../UI/Icons";
import style from "../Auth.module.css";

const ProfilePhotoSelect = ({ step, loading }) => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = () => {
    step(3, image);
  };

  return (
    <div className={style.formContainer}>
      <img
        src={createObjectURL ? createObjectURL : ProfilePhotoIcon}
        alt="profilephoto"
      />
      <h2>Upload a Profile Photo</h2>
      <p>Upload a photo for your friends can recognize you.</p>
      <div className={style.uploadButton}>
        <div className={style.submitHidden}>Upload a Photo</div>
        <input type="file" name="image" onChange={uploadToClient} />
      </div>
      <button
        type="button"
        onClick={uploadToServer}
        className={`${style.secondaryButton} ${style.photoContinue}`}
      >
        { loading ? "Please wait..." : "Continue"}
      </button>
    </div>
  );
};

export default ProfilePhotoSelect;
