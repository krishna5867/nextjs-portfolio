import React from 'react'

const ProjectDetails = ({ post }) => {
    return (
        <>
        <h1 className='p-2 text-3xl font-extrabold text-center mb-4'>Details</h1>

        <div className='max-w-md mx-auto mt-10 p-4 shadow-md'>
            <h1 className='text-xl font-bold'>{post.title}</h1>
            <p>{post.body}</p>
        </div>
        </>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
};

export default ProjectDetails;
