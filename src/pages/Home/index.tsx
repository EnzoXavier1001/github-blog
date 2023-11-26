import { Header } from "../../components/Header"
import { useProfileInfo } from "../../hooks/useProfileInfo";
import { HomeContainer, UserInfo, UserInfoContent } from "./styles"
import { FaExternalLinkAlt, FaGithub, FaUserFriends } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";

export const Home = () => {
    const { userInfo } = useProfileInfo()
    
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