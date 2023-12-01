import { useNavigate } from "react-router-dom";
import { PostContainer } from "./styles"
import { PostType } from "../../hooks/usePosts";


interface PostProps {
    data: PostType
}

export const Post = ({ data }: PostProps) => {
    const navigate = useNavigate()

    return (
        <PostContainer onClick={() => navigate(`/post/${data.numberId}`)}>
            <header>
                <h2>{data.title}</h2>
                <time>Há 1 dia</time>
            </header>
            <p>{data.body}</p>
        </PostContainer>
    )
}