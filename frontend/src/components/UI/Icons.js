import Logo from "../../assets/img/logo-1.png";
import Add from "../../assets/img/add.png";
import Activity from "../../assets/img/activity.png";
import Messenger from "../../assets/img/messenger.png";
import Comment from "../../assets/img/comment.png";
import HorizontalThreeDots from "../../assets/img/horizontal-threedots.png";
import VerticalThreeDots from "../../assets/img/vertical-threedots.png";
import Share from "../../assets/img/share.png";
import Bookmark from "../../assets/img/bookmark.png";
import Home from "../../assets/img/home.png";
import Search from "../../assets/img/search.png";
import Reels from "../../assets/img/reels.png";
import Shop from "../../assets/img/shop.png";
import SignUpIcon from "../../assets/img/signup.png";
import ProfilePhotoIcon from "../../assets/img/profilephoto.png";

export const CloseIcon = ({ fill, size }) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
    </svg>
  );
};

export {
  Logo,
  Add,
  Activity,
  Messenger,
  HorizontalThreeDots,
  VerticalThreeDots,
  Comment,
  Share,
  Bookmark,
  Home,
  Search,
  Reels,
  Shop,
  SignUpIcon,
  ProfilePhotoIcon
};
