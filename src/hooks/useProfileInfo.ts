import { useState, useEffect } from "react"
import { api } from "../services/api"

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

export const useProfileInfo = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>()

    const fetchUserInfo = async () => {
        const { data } = await api.get('/users/EnzoXavier1001')
        const repositories = `${data.html_url}/?tab=repositories`

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
    
    return {
        userInfo
    }
}