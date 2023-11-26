import styled from "styled-components";


export const PostContainer = styled.article`
    background: ${props => props.theme['--base-post']};
    padding: 3.2rem;
    border-radius: 10px;
    border: 1px solid transparent;

    header {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;

        h2 {
            max-width: 40rem;
            font-size: 2.0rem;
            color: ${props => props.theme['--base-title']};
            margin-bottom: 2.0rem;
            line-height: 32px;
        }

        time {
            color: ${props => props.theme['--base-span']};
            font-size: 1.4rem;
        }
    }

    p {
        line-height: 25.6px;
        color: ${props => props.theme['--base-text']};
    }

    &:hover {
        transition: border 0.3s;
        border: 1px solid ${props => props.theme['--base-span']};
    }
`