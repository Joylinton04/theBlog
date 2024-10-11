import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { addBlog } from "../store/blogSlice";
import { v4 as uuidv4 } from "uuid";
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    author: '',
    category: '',
    image: '',
    content: ''
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name , value} = e.target;
    setFormData({
        ...formData,
        [name]:value
    })
  }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    const datetime = format(new Date(), 'MMM dd, yyyy pp')
    const newBlog = {
        id: uuidv4(),
        title: formData.title,
        slug: formData.slug,
        content: formData.content,
        date: datetime,
        author: formData.author,
        image: formData.image,
        category: formData.category,
    }
    // dispatch(addBlog(newBlog))
    console.log(newBlog)

    setTimeout(() => {
        navigate('/')
    },800)
  }


  return (
    <div className="pad">
      {/* Section 1 */}
      <h1 className="text-4xl font-bold text-center bg-black text-white">New Post</h1>

      {/* Section 2 */}
      <form className="flex flex-col gap-6 mt-6" onSubmit={handleSubmit}>
        <label className="font-medium text-sm">Blog Title:</label>
        <input required type="text" className="border border-gray-300 p-2 w-full" name="title" onChange={handleChange}/>

        <label className="font-medium text-sm">Blog Slug:</label>
        <input required type="text" className="border border-gray-300 p-2 w-full" name="slug" onChange={handleChange}/>

        <div className="flex gap-12 flex-wrap">
            <div>
                <label className="font-medium text-sm">Author:</label>
                <input required type="text" className="border border-gray-300 p-2 w-full" name="author" onChange={handleChange}/>
                
            </div>
            <div>
                <label className="font-medium text-sm">Category:</label>
                <input required type="text" className="border border-gray-300 p-2 w-full" name="category" onChange={handleChange}/>                
            </div>
        </div>
        
        <label className="font-medium text-sm">Image Link:</label>
        <input required type="text" className="border border-gray-300 p-2 w-full" placeholder="https://" name="image" onChange={handleChange}/>

        <label className="font-medium text-sm">Content:</label>
        <textarea required className="border border-gray-300 p-2 w-full h-[200px]" name="content" onChange={handleChange}/>

        <button type="submit" className="bg-black text-white text-sm p-2 uppercase">Submit</button>
      </form>
    </div>
  )
}

export default NewPost;