import { useLocalStorage } from '../hooks/useLocalStorage';

export function Notes() {
    const [note, setNote] = useLocalStorage<string>("my-note", "");
    
    return (
        <div>
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter your notes..." />
            <p  >Your notes: {note}</p>
        </div>
    )
}