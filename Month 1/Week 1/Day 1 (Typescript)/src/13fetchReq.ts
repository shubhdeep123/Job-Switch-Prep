

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchPost = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const post:Post = await response.json();
    } catch (error) {
        
    } 
}