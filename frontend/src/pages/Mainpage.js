import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllPostsbyPublicProfile,
  getAllStoriesbyPublicProfile,
} from "../api";
import Feeds from "../components/Mainpage/Feeds/Feeds";
import Stories from "../components/Mainpage/Stories/Stories";
import Wrapper from "../components/Wrapper";
import { fetchAllPostsbyPublicProfile } from "../store/actions/post";
import { fetchAllStoriesbyPublicProfile } from "../store/actions/stories";

export default function Mainpage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await getAllPostsbyPublicProfile();
      dispatch(fetchAllPostsbyPublicProfile(data));
    };
    const getStories = async () => {
      const { data } = await getAllStoriesbyPublicProfile();

      dispatch(fetchAllStoriesbyPublicProfile(data));
    };
    getPosts();
    getStories();
  }, [dispatch]);

  return (
    <Wrapper header={true} navigation={true}>
      <Stories />
      <Feeds />
    </Wrapper>
  );
}
