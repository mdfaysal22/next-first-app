import { useRouter } from "next/router";


const postId = ({post}) => {
    const router = useRouter();
    const handleBack = () => {
        router.push('/posts')
    }
    return (
        <div className="h-[100vh] text-center">
            <h1 className="text-3xl font-semibold my-3">{post?.title}</h1>
            <p>{post?.body}</p>

            <button onClick={handleBack} className="btn btn-primary">Back To Post Page</button>
        </div>
    );
};

export default postId;

export const getStaticProps = async(context) => {
    console.log(context)
    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    const data = await res.json();
    
    return {
        props : {
            post : data
        }
    }
}

export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    
    const paths = posts.map(post => {
        return {
            params : {
                postId: `${post.id}`
            }
        }
    })
    
    return {
        paths,
        fallback: false
    }
}