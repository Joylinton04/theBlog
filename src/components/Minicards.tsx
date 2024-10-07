interface blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  date: Date;
  author: string;
  image: string;
  category: string;
}

interface blogProp {
  blog?: blog
}

const Minicards = ({blog}:blogProp) => {
  return (
    <div className="h-[110px] border-b-2 sm:w-[300px]">
      <div className="h-full flex flex-col items-start gap-4">
        <div className="font-semibold capitalize hover:underline cursor-pointer">{blog?.title}</div>
        <h1 className="uppercase font-medium text-sm">{blog?.author}</h1>
      </div>
    </div>
  )
}

export default Minicards;