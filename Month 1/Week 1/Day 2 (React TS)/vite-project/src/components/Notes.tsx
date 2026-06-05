import { useState, useEffect } from 'react';

export function Notes() {
    const [note,setNote] = useState<string>(()=>{
        return localStorage.getItem("user_note") || "";
    });

    useEffect(() => {
        localStorage.setItem("user_note", note);
    }, [note]);

    return (
        <div>
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter your notes..." />
            <p  >Your notes: {note}</p>
        </div>
    )
}