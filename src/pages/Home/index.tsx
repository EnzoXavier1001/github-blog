import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import { HomeContainer, UserInfo, UserInfoContent } from "./styles"
import { api } from "../../services/api"
import { FaExternalLinkAlt, FaGithub, FaUserFriends } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";

interface UserInfo {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    company: string;
    followers: number;
    repositories: string;
    user_url: string;
}

export const Home = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>()

    const fetchUserInfo = async () => {
        const { data } = await api.get('/users/EnzoXavier1001')
        const repositories = `${data.html_url}/?tab=repositories`

        console.log(data)

        const profileInfo: UserInfo = {
            login: data.login,
            name: data.name,
            avatar_url: data.avatar_url,
            bio: data.bio,
            company: data.company,
            followers: data.followers,
            repositories,
            user_url: data.html_url
        }

        setUserInfo(profileInfo)
    }
    
    useEffect(() => {
        fetchUserInfo()
    }, [])
    
    return (
        <>
            <Header />
            <HomeContainer>
                <UserInfo>
                    <img src={userInfo?.avatar_url} alt={userInfo?.name} />
                    <UserInfoContent>
                        <header>
                            <h3>{userInfo?.name}</h3>
                            <a href={userInfo?.repositories}>GITHUB <FaExternalLinkAlt /></a>
                        </header>
                        <p>{userInfo?.bio}</p>
                        <footer>
                            <a href={userInfo?.user_url} target="_blank"><FaGithub color="#3A536B" size={18} /> {userInfo?.login}</a>
                            <a href="https://www.cheil.com.br/" target="_blank"><FaBuilding color="#3A536B" size={18} />{userInfo?.company}</a>
                            <a><FaUserFriends color="#3A536B" size={18} />{userInfo?.followers} seguidores</a>
                        </footer>
                    </UserInfoContent>
                </UserInfo>
            </HomeContainer>
        </>
    )
}