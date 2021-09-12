import { useEffect, useState } from "react";
import { getThatPage } from "../../WebAPI";
import { useParams } from "react-router";

import {
  PageController,
  PostContainer,
  Post,
} from "../../components/components";

export default function AllPost() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { page } = useParams();
  const [totalPostCount, setTotalPostCount] = useState("");
  useEffect(() => {
    getThatPage(Number(page))
      .then((res) => {
        for (let header of res.headers.entries()) {
          if (header[0] === "x-total-count") {
            setTotalPostCount(Number(header[1]));
          }
        }
        return res.json();
      })
      .then((res) => {
        setPosts(res);
        setIsLoading(false);
      });
  }, [page]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [posts]);
  return (
    <PostContainer>
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
      {!isLoading && (
        <PageController
          currentPage={Number(page)}
          totalPostCount={totalPostCount}
        />
      )}
    </PostContainer>
  );
}
