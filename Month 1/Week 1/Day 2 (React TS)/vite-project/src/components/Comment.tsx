interface CommentProps {
  name: string;
  body: string;
  email: string;
}

export function Comment({
  name,
  body,
  email,
}: CommentProps) {
  return (
    <div className="bg-slate-50 border rounded-lg p-3 mb-2">
      <h4 className="font-semibold">
        {name}
      </h4>

      <p className="text-sm text-slate-500 mb-2">
        {email}
      </p>

      <p className="text-slate-700">
        {body}
      </p>
    </div>
  );
}