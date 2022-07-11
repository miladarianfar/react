import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';

export default function Comment() {

    const { id } = useParams()
    const url = "https://jsonplaceholder.typicode.com/comments/" + id;
    const {data: comment, isPending, error} = useFetch(url);
    const history = useHistory();
    const queryString = useLocation().search

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name");

    useEffect(() => {
        if(error) {
            setTimeout(() => {
                history.push("/");
            }, 2000)
        }
    }, [error, history]);

    return (
        <div>
            {name && <h2>Welcome {name}</h2>}
            {isPending && <div className="loader">is Loading...</div>}
            {error && <div className="error">Could not fetch data</div>}
            {comment && 
            (<div>
                <h1>Comment Name - {comment.name}</h1>
                <h3>From : {comment.email}</h3>
                <p>{comment.body}</p>
            </div>)
            }
        </div>
    )
}
