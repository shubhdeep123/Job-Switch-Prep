import axios , {type AxiosResponse } from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchPost = async () => {
    try {
        const response:AxiosResponse<Post> = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const post: Post = response.data;
        console.log(post);
    } catch (error:any) {
        if(axios.isAxiosError(error)) {
            console.error('Axios error fetching post:', error.message);
            if(error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
            }
        }
    } 
}

// Example usage