import React from 'react';
import Link from 'next/link';

const Projects = ({ data }) => {
  return (
    <>
      {data && data.map((post) => (
        <div key={post.id}>
          <Link href={`/projectDetails/${post.id}`}>
            <div className='max-w-md shadow-md p-2 m-2 mx-auto'>
            <h1 className='text-xl'>{post.id}. &nbsp;{post.title}</h1>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

export default Projects;
