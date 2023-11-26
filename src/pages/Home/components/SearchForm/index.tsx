import { SearchFormContainer, SearchFormWrapper } from "./styles"

export const SearchForm = () => {
    return (
        <SearchFormContainer>
            <header>
                <h2>Publicações</h2>
                <span>6 publicações</span>
            </header>
            <SearchFormWrapper>
                <input type="text" placeholder="Buscar conteúdo" />
            </SearchFormWrapper>
        </SearchFormContainer>
    )
}