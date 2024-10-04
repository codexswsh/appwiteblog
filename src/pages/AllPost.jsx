import { useEffect, useState } from "react";
import { PostCard, Container } from "../components/index";
import appwriteService from "../appwrite/config";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  

  useEffect(() => {
    appwriteService.getPosts([])
    // .then((posts) => setPosts(posts.documents))
    .then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
    .catch((err) => setPosts("something went wrong", err));
  }, []);

  return <div className="py-8 w-full">
    <Container>
        <div className="flex flex-wrap">
            {
                posts.map((post)=> {
                    return <div key={post.$id} className="p-2 w-1/4">
                        <PostCard post={post} /> 
                    </div>
                })
            }
        </div>
    </Container>
  </div>;
};

export default AllPost;
