import style from "./Icons.module.css";
import { Add, Messenger, Activity, VerticalThreeDots, Comment, Share, Bookmark, Home, Search, Reels, Shop } from "../../components/UI/Icons";

const Button = {
  Add: ({ width, ...rest }) => {
    return (
      <button type="button" className={`${style.add}`} style={{ width: width+"px" }} {...rest}>
        <img src={Add} alt="Add"  />
      </button>
    );
  },
  Activity: ({ width, ...rest }) => {
    return (
      <button type="button" className={style.activity} style={{ width: width+"px" }} {...rest}>
        <img src={Activity} alt="Activity" />
      </button>
    );
  },
  Comment: ({ width, ...rest }) => {
    return (
      <button type="button" className={style.activity} style={{ width: width+"px" }} {...rest}>
        <img src={Comment} alt="Comment" />
      </button>
    );
  },
  Bookmark: ({ width, ...rest }) => {
    return (
      <button type="button" className={style.activity} style={{ width: width+"px" }} {...rest}>
        <img src={Bookmark} alt="Comment" />
      </button>
    );
  },
  Share: ({ width, ...rest }) => {
    return (
      <button type="button" className={style.activity} style={{ width: width+"px" }} {...rest}>
        <img src={Share} alt="Comment" />
      </button>
    );
  },
  Messenger: ({ width, ...rest  }) => {
    return (
      <button type="button" className={`${style.messenger} ${style.hasNotification}`} style={{ width: width+"px" }} {...rest}>
        <img src={Messenger} alt="Messenger" />
      </button>
    );
  },
  VerticalThreeDots: ({ width, ...rest }) => {
    return (
      <button type="button" className={`${style.verticalThreeDots}`} style={{ width: width+"px" }} {...rest}>
        <img src={VerticalThreeDots} alt="Horizontal Three Dots" />
      </button>
    );
  },
  Home: ({ width, ...rest  }) => {
    return (
      <button type="button" className={`${style.home}`} style={{ width: width+"px" }} {...rest}>
        <img src={Home} alt="Home" />
      </button>
    );
  },
  Search: ({ width, ...rest  }) => {
    return (
      <button type="button" className={`${style.home}`} style={{ width: width+"px" }} {...rest}>
        <img src={Search} alt="Search" />
      </button>
    );
  },
  Reels: ({ width, ...rest  }) => {
    return (
      <button type="button" className={`${style.home}`} style={{ width: width+"px" }} {...rest}>
        <img src={Reels} alt="Reels" />
      </button>
    );
  },
  Shop: ({ width, ...rest  }) => {
    return (
      <button type="button" className={`${style.home}`} style={{ width: width+"px" }} {...rest}>
        <img src={Shop} alt="Shop" />
      </button>
    );
  },
  Profile: ({ width, image, ...rest  }) => {
    return (
      <button type="button" className={`${style.profile}`} style={{ width: width+"px" }} {...rest}>
        <img src={image} alt="Profile" />
      </button>
    );
  },
};

export default Button;
