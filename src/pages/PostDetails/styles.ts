import styled from "styled-components";

export const PostDetailsContainer = styled.section`
    max-width: 112rem;
    margin: 0 auto;
`

export const PostDetailsPost = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme['--base-profile']};
    padding: 4.0rem 3.2rem;
    border-radius: 10px;
    margin-top: -6.8rem;

    h2 {
        font-size: 2.4rem;
        color: ${props => props.theme['--base-title']};
        font-weight: bold;
        margin: 2.0rem 0 0.8rem;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            color: ${props => props.theme.blue};
            text-decoration: none;
            font-weight: bold;
            font-size: 1.4rem;
            position: relative;

            &:last-child:after {
                transition: all 0.2s;
                content: '';
                display: block;
                width: 0%;
                height: 0;
                position: absolute;
                bottom: -5px;
                background-color: ${props => props.theme.blue};
            }

            &:last-child:hover::after {
                content: '';
                width: 100%;
                height: 1px;
            }
        }
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

export const PostContentArea = styled.div`
    padding: 4.0rem 3.2rem;

    div > p {
        color: ${props => props.theme['--base-text']};
    }

    code {
        display: block;
        background: ${props => props.theme['--base-post']};
        padding: 1.6rem;
        border-radius: 2px;
        margin-top: 2.4rem;
    }
`