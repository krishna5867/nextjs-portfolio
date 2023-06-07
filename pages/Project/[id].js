import React from "react";
import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div className="text-4xl text-center mt-10">ProjectId is: {id}</div>;
};

export default Project;
