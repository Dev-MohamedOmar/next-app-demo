import Link from "next/link";

export const metadata = {
    title: 'Articles Page',
};

export default function ArticlesPage() {
    return(
        <div>
            <h1>Articles Page</h1>
            <Link href="/posts">
                <button>Posts Page</button>
            </Link>
        </div>
    );
}