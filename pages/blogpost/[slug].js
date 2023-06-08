import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as fs from "fs";


export async function getServerSideProps(context) {
  console.log(context.query);
  const { slug } = context.query;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}



const Slug = (props) => {
  const [data, setData] = React.useState(props.myBlog);
  const router = useRouter();
  const { slug } = router.query;

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  

  return (
    <div className="w-full mt-4 justify-center items-center flex">
      <>
        {data?.title ? (
          <div className="w-4/5 mt-5 p-20 shadow-md relative">
            <h1 className="text-3xl mb-3">{data?.title}</h1>
            <p>{data?.content}</p>
            <p className="absolute bottom-3 right-8">{data?.author}</p>
          </div>
        ) : (
          <div>{data?.message}</div>
        )}
      </>
    </div>
  );
};


export default Slug;
