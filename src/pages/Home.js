import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom'
import './Home.css';

export default function Home() {

    const { data: comments, isPending, error } = useFetch("https://jsonplaceholder.typicode.com/comments")
    console.log(comments);

    return (
        <div className="home">
            <h1>All Comments</h1>
            {isPending && <div className="loader">is loading</div>}
            {error && <div className="error">something went wrong</div>}
            {comments && comments.map(comment => (
                <div key={comment.id} className="card">
                    <h2>{comment.name}</h2>
                    <p>{comment.email}</p>
                    <a href={`/comment/${comment.id}`}>
                        <p>Read more...</p>
                    </a>
                </div>
            ))}
        </div>
    )
}
