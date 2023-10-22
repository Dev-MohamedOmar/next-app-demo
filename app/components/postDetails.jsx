import { resolve } from "styled-jsx/css";

export default async function PostDetails ({ postId }) {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next: {
            revalidate: 120,
        },
    });

    const post = await response.json();

    return (
        <div>
            <div
                style={ {
                    width: '100%',
                    background: '#fff',
                    borderRadius: '10px',
                    color: '#000',
                    marginTop: '20px',
                    padding: '30px'
                } }>
                <h1>{ post.title }</h1>
                <hr />
                <p>{ post.body }</p>
            </div>
        </div>
    );
}