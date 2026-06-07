import { useEffect, useState } from "react";

export function useWindow():{width:number,height:number} {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        function updateSize() {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        }
    },[])


    return {width,height};
}