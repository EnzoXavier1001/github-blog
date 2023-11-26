import { useState, useEffect } from "react"
import { api } from "../services/api"

interface Post {
    id: number;
    body: string;
    createdAt: string;
    title: string;
    comments: number;
    user: {
        login: string;
    }
}

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([])

    const fetchPost = async () => {
        const { data: { items } } = await api.get('/search/issues', {
            params: {
                q: 'repo:EnzoXavier1001/github-blog'
            }
        })

        const newPostData: Post[] = items.map(post => {
            const postData: Post = {
                id: post.id,
                body: post.body,
                createdAt: post.createdAt,
                title: post.title,
                comments: post.comments,
                user: post.user?.login
            }

            return postData
        })

        setPosts(newPostData)
    }

    useEffect(() => {
        fetchPost()
    }, [])
    
    return {
        posts
    }
}