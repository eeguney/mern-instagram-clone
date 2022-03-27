import { useSelector } from "react-redux"
import Cards from "../../UI/Cards/Cards";

export default function Feeds() {
  const posts = useSelector((state) => state.post.posts)
  const postMap = posts.map((post, index) => <Cards.Post key={index} post={post} />);

  return <div className="feeds">{postMap}</div>;
}
