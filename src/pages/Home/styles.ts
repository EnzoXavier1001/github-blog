import styled from "styled-components";

export const HomeContainer = styled.section`
    max-width: 112rem;
    margin: 0 auto;
    
    @media (max-width: 1170px) {
        width: 90%;
    }
`

export const UserInfo = styled.div`
    display: flex;
    align-items: stretch;
    gap: 3.2rem;
    background: ${props => props.theme['--base-profile']};
    padding: 4.0rem 3.2rem;
    border-radius: 10px;
    margin-top: -6.8rem;
    margin-bottom: 7.2rem;

    img {
        height: 14.8rem;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        img {
            object-fit: contain;
        }
    }
`

export const UserInfoContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3 {
            font-size: 2.4rem;
            color: ${props => props.theme['--base-title']};
            font-weight: bold;
        }

        a {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            color: ${props => props.theme.blue};
            text-decoration: none;
            font-weight: bold;
            font-size: 1.4rem;
            position: relative;

            &::after {
                transition: all 0.2s;
                content: '';
                display: block;
                width: 0%;
                height: 0;
                position: absolute;
                bottom: -5px;
                background-color: ${props => props.theme.blue};
            }

            &:hover::after {
                content: '';
                width: 100%;
                height: 1px;
            }
        }
    }

    p {
        color: ${props => props.theme['--base-text']};
    }

    footer {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2.4rem;

        a {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            text-decoration: none;
            color: ${props => props.theme['--base-subtitle']};
        }
    }

    @media (max-width: 425px) {
        p {
            margin: 1.8rem 0;
        }
    }
`

export const PostsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;

    @media (max-width: 1140px) {
        grid-template-columns: repeat(1, 1fr);
    }
`