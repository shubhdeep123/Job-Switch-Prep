import { useWindow } from "../hooks/useWindow"

export function WindowSize() {
    const {width, height} = useWindow();
    return (
        <div>
            <p>Window Size : {width} x {height}</p>
            <p>Layout: {width>1024 ? 'Desktop' : width > 768 ? 'Tablet' : 'Mobile'}</p>
        </div>
    )
}