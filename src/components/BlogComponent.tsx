import img1 from '../assets/img1.jpg';

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  date: Date;
  author: string;
  image: string;
  category: string;
  // tags: string[];
}

interface sizeProps {
  mdWidth?: boolean;
  mmdWidth?: boolean;
  height?: boolean;
  mdText?: boolean;
  blog: Blog; // Updated to accept blog
}

const BlogComponent = ({ mdWidth, mmdWidth, mdText, blog }: sizeProps) => {
  const isWidth: string = mdWidth ? "md:w-[200px]" : "md:";
  const isText: string = mdText ? "md:hidden" : "";
  const isTextSize: string = mdText ? "md:text-2xl md:font-medium" : "";

  return (
    <div className={`h-[600px] md:h-full ${isWidth} lg:max-w-[800px]`}>
      <div className="h-full flex flex-col gap-4">
        <div className="h-[45%]">
          <img src={img1} className="h-full w-full object-cover object-center" />
        </div>
        <p className="uppercase font-medium">{blog.title}</p>
        <div className={`capitalize w-[95%] text-4xl font-Blogtitle font-bold ${isTextSize}`}>
          {blog.slug}
        </div>
        <div className={`${isText}`}>
          {blog.content}
        </div>
        <h2 className="uppercase font-medium text-sm">{blog.author}</h2>
      </div>
    </div>
  );
};

export default BlogComponent;
