import { Suspense } from "react";
import PostDetails from "@/app/components/postDetails";
export default async function PostDetailsPage({params}) {
    const postId = params.postId;

    const loadingJSX = (
        <div>
            <h1>Loading...</h1>
        </div>
    );

    return(
        <div style={{ padding: '20px',}}>
            <h1>Post Details</h1>
            <Suspense fallback={loadingJSX}>
                <PostDetails postId={postId}/>
            </Suspense>
        </div>
    );
}