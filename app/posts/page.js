import Link from "next/link";

export const metadata = {
    title: 'Posts Page',
};

export default async function PostsPage() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',{
            next: {
                revalidate: 120,
            },
    });
    
    const posts = await response.json();

    const postsJSX = posts.map((post) => {
        return (
            <Link href={ `/posts/${post.id}` } style={{width: '70%', }}>
            <div 
                style={{
                    width: '100%',
                    background: '#fff',
                    borderRadius: '10px',
                    color: '#000',
                    marginTop: '20px',
                    padding: '30px'
                }}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            </Link>
        );
    });

    return(
        <div>
            <h1>Posts Page</h1>
            
            {/* Start Posts */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    {postsJSX}</div>
            {/* End Posts */ }
        </div>
    );
}