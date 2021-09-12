import { PostContainer, PostTitle } from "../../components/components";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getSinglePost } from "../../WebAPI";
export default function SinglePost() {
  let slug = useParams();
  const [postValue, setPostValue] = useState({
    title: "",
    time: "",
    content: "",
  });
  useEffect(() => {
    getSinglePost(slug.id).then((data) => {
      data = data[0];
      const time = new Date(data.createdAt).toLocaleString();
      setPostValue({
        title: data.title,
        time,
        content: data.body,
      });
    });
  }, []);
  return (
    <PostContainer>
      <PostTitle>{postValue.title}</PostTitle>
      <div>{postValue.time}</div>
      <p style={{ lineHeight: "30px" }}>{postValue.content}</p>
    </PostContainer>
  );
}
