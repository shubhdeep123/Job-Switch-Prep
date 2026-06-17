import { useState } from "react";
import { useGetPostsQuery } from "../slice/apiSlice";
import { PostComponent } from "./PostComponent";
import { CommentList } from "./CommentList";

export function PostList() {
  const { data, isLoading, isFetching, isError, error, refetch } =
    useGetPostsQuery();
  const [selectedPostId, setSelectedPostId] = useState<number>(0);

  return (
    <>
      {data?.map((post) => (
        <div key={post.id}>
          <PostComponent
            post={post}
            onClick={() => {
            debugger;
                setSelectedPostId(post.id)
            }}
          />

          {selectedPostId === post.id && <CommentList postId={post.id} />}
        </div>
      ))}
    </>
  );
}
