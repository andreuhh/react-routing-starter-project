import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
    const { id } = useParams()
    const url = 'http://localhost:3000/articles/' + id
    const { data: article, isPending, error } = useFetch(url)
    const navigate = useNavigate()

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                console.log('here')
                // navigate.goBack()
                navigate('/')
            }, 2000)
        }
    }, [error, navigate])

    return (
        <div>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {article && (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}
