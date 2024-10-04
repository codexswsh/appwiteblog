import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import appwriteService from "../appwrite/config"
import {useParams} from "react-router-dom"
import {PostForm} from "../components/index"

const EditPost = () => {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    }, [slug, navigate])

  return post ? ( <div className="py-8">
    <PostForm post={post} /> 
  </div>) :null
}

export default EditPost
