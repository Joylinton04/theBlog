import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { addBlog } from "../store/blogSlice";
import { v4 as uuidv4 } from "uuid";
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true)
    console.log(newBlog)

    setTimeout(() => {
        navigate('/')
        setIsLoading(false);
    },2000)
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
                <select 
                  required 
                  className="border border-gray-300 p-2 w-full" 
                  name="category" 
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="">Select a Category</option>
                  <option value="Technology">Technology</option>
                  <option value="Global">Global</option>
                </select>
            </div>
        </div>
        
        <label className="font-medium text-sm">Image Link:</label>
        <input required type="text" className="border border-gray-300 p-2 w-full" placeholder="https://" name="image" onChange={handleChange}/>

        <label className="font-medium text-sm">Content:</label>
        <textarea required className="border border-gray-300 p-2 w-full h-[200px]" name="content" onChange={handleChange}/>

        <button type="submit" className="bg-black text-white text-sm p-2 uppercase">Submit</button>
      </form>
      {isLoading && 
            <div className='fixed top-0 left-0 z-20 w-full h-full bg-[#21212190]'>
              <div className='flex justify-center items-center h-full w-full px-4 ssm:p-2'>
                <div className='bg-white w-[200px] h-[200px] p-2 flex justify-center items-center rounded'>
                  <div className='flex flex-col items-center gap-6'>
                    <div className="loader2"></div>
                    <div>Please Wait...</div>
                  </div>
                </div>
              </div>
          </div>
        }
    </div>
  )
}

export default NewPost;