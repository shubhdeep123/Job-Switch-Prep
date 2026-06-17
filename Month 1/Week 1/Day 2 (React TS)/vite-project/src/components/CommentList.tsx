import { Comment } from "./Comment";
import { useGetCommentsQuery } from "../slice/apiSlice";

interface CommentType {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentListProps {
  postId: number;
}

export function CommentList({ postId }: CommentListProps) {
  const { data, isLoading, isFetching, isError, error, refetch } =
    useGetCommentsQuery(postId);

  return (
    <div className="ml-6 mt-4 border-l-4 border-blue-500 pl-4">
      <h3 className="font-bold mb-3">Comments</h3>

      {data?.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))}
    </div>
  );
}
