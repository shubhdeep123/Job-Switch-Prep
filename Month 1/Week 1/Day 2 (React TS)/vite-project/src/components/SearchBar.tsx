interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="text"
      placeholder="Search By Name or Email..."
    />
  );
}