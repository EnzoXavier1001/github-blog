import styled from "styled-components";

export const HomeContainer = styled.section`
    max-width: 112rem;
    margin: 0 auto;
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
        }
    }

    p {
        color: ${props => props.theme['--base-text']};
    }

    footer {
        display: flex;
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

`