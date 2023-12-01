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

    const fetchAllPosts = async () => {
        const { data: { items } } = await api.get('/search/issues', {
            params: {
                q: 'repo:EnzoXavier1001/github-blog'
            }
        })

        const newPostData: PostType[] = items.map(post => {
            const postData: PostType = {
                id: post.id,
                body: post.body,
                createdAt: post.created_at,
                title: post.title,
                comments: post.comments,
                user: post.user?.login,
                numberId: post.number
            }

            return postData
        })

        setPosts(newPostData)
    }

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
        fetchPost
    }
}