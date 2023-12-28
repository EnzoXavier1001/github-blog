import { useState, useEffect } from "react"
import { api } from "../services/api"

export interface PostType {
    id: number;
    body: string;
    createdAt: string;
    title: string;
    comments: number;
    user: string;
    numberId?: number;
}

export const usePosts = () => {
    const [posts, setPosts] = useState<PostType[]>([])

    const fetchAllPosts = async (query?: string) => {
        try {
            let response;
    
            if (query) {
                response = await api.get('/search/issues', {
                    params: {
                        q: `${query} repo:EnzoXavier1001/github-blog`
                    }
                });
            } else {
                response = await api.get('/search/issues', {
                    params: {
                        q: 'repo:EnzoXavier1001/github-blog'
                    }
                });
            }
    
            const { data: { items } } = response;
    
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const newPostData = items.map((post: any) => {
                const postData: PostType = {
                    id: post.id,
                    body: post.body,
                    createdAt: post.createdAt,
                    title: post.title,
                    comments: post.comments,
                    user: post.user?.login,
                    numberId: post.number
                };
    
                return postData;
            });
    
            setPosts(newPostData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchPost = async (id: number) => {
        const { data } = await api.get(`/repos/EnzoXavier1001/github-blog/issues/${id}`)
        
        const postData: PostType = {
            id: data.id,
            body: data.body,
            createdAt: data.created_at,
            title: data.title,
            comments: data.comments,
            user: data.user?.login,
            numberId: data.number
        }

        return postData
    }

    useEffect(() => {
        fetchAllPosts()
    }, [])
    
    return {
        posts,
        fetchPost,
        fetchAllPosts
    }
}