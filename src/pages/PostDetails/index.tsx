import { NavLink, useParams } from "react-router-dom"
import { usePosts } from "../../hooks/usePosts"
import { useEffect, useState } from "react"
import { PostType } from "../../hooks/usePosts"
import { Header } from "../../components/Header"
import { PostContentArea, PostDetailsContainer, PostDetailsPost } from "./styles"
import { FaGithub, FaBuilding, FaCalendarDay, FaExternalLinkAlt, FaChevronLeft } from "react-icons/fa"
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import Markdown from "markdown-to-jsx"

export const PostDetails = () => {
    const { id } = useParams()
    const { fetchPost } = usePosts()
    const [post, setPost] = useState<PostType>()

    const getPost = async () => {
        const postData =  await fetchPost(Number(id))
        const datePublish = new Date(postData.createdAt)

        const postPublicationDate = formatDistanceToNow(datePublish, { 
            addSuffix: true,
            locale: ptBR,
        })
    
        setPost({...postData, createdAt: postPublicationDate})
    }

    useEffect(() => {
        getPost()
    }, [])


    return (
        <>
            <Header />
            <PostDetailsContainer>
                <PostDetailsPost>
                    <header>
                        <NavLink to="/">
                            <FaChevronLeft />
                            VOLTAR
                        </NavLink>
                        <a href="">VER NO GITHUB <FaExternalLinkAlt /></a>
                    </header>
                    <h2>{post?.title}</h2>
                    <footer>
                        <a href="" target="_blank">
                            <FaGithub color="#3A536B" size={18} /> 
                            {post?.user}
                        </a>
                        <a>
                            <FaCalendarDay color="#3A536B" size={18} />
                            {post?.createdAt} 
                        </a>
                        {post?.comments ? (
                            <a><FaBuilding color="#3A536B" size={18} />{post?.comments} comentários</a>
                        ): (
                            <a><FaBuilding color="#3A536B" size={18} />Nenhum comentário</a>
                        )}
                    </footer>
                </PostDetailsPost>

                {post && (
                    <PostContentArea>
                        <Markdown children={post.body} />
                    </PostContentArea>
                )}
            </PostDetailsContainer>
        </>
    )
}