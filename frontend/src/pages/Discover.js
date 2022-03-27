import { useEffect } from "react";
import SearchInput from "../components/Discover/Search/SearchInput";
import { useDispatch } from "react-redux";
import Wrapper from "../components/Wrapper";
import style from "../components/Discover/Discover.module.css";
import DiscoverFeeds from "../components/Discover/DiscoverFeeds/DiscoverFeeds";
import { getAllPostsbyPublicProfile } from "../api";
import { fetchAllPostsbyPublicProfile } from "../store/actions/post";
export default function Discover() {
  const dispatch = useDispatch();

  const getPosts = async () => {
    const { data } = await getAllPostsbyPublicProfile();
    dispatch(fetchAllPostsbyPublicProfile(data));
  };

  useEffect(() => {
    getPosts();
  }, []);

  setInterval(() => {
    getPosts();
  }, 10000);

  return (
    <Wrapper header={false} navigation={true}>
      <div className={style.discoverWrapper}>
        <SearchInput />
        <DiscoverFeeds />
      </div>
    </Wrapper>
  );
}
