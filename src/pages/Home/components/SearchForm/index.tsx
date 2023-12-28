import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { SearchFormContainer, SearchFormWrapper } from "./styles"
import * as zod from 'zod'

const searchSchema = zod.object({
    postName: zod.string()
})

interface SearchFormProps {
    onSearch: (postName: string) => void
}

type SearchType = zod.infer<typeof searchSchema>

export const SearchForm = ({ onSearch }: SearchFormProps) => {
    const { register,  handleSubmit } = useForm<SearchType>({
        resolver: zodResolver(searchSchema)
    })

    function searchPost(data: SearchType) {
        onSearch(data.postName)
    }

    return (
        <SearchFormContainer>
            <header>
                <h2>Publicações</h2>
                <span>6 publicações</span>
            </header>
            <SearchFormWrapper onSubmit={handleSubmit(searchPost)}>
                <input {...register('postName')} type="text" placeholder="Buscar conteúdo" />
            </SearchFormWrapper>
        </SearchFormContainer>
    )
}