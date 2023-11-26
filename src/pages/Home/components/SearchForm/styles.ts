import styled from "styled-components";

export const SearchFormContainer = styled.div`
    margin-bottom: 4.8rem;
    
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.2rem;

        h2 {
            color: ${props => props.theme['--base-subtitle']};
            font-size: 1.8rem;
        }

        span {
            color: ${props => props.theme['--base-span']};
            font-size: 1.4rem;
        }
    }
`

export const SearchFormWrapper = styled.form`
    input {
        width: 100%;
        outline: none;
        border: 1px solid ${props => props.theme['--base-border']};
        background: ${props => props.theme['--base-input']};
        color: ${props => props.theme['--base-label']};
        padding: 1.2rem 1.6rem;
        border-radius: 6px;
    }
`
