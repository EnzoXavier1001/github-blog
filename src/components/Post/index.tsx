import { useNavigate } from "react-router-dom";
import { PostContainer } from "./styles"

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

interface PostProps {
    data: Post
}

export const Post = ({ data }: PostProps) => {
    const navigate = useNavigate()
    return (
        <PostContainer onClick={() => navigate(`/post/${data.id}`)}>
            <header>
                <h2>{data.title}</h2>
                <time>Há 1 dia</time>
            </header>
            <p>{data.body}</p>
        </PostContainer>
    )
}