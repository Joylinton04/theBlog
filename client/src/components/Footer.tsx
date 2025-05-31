import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 py-10 mt-10">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300">
          
          {/* Brand & Socials */}
          <div className="flex flex-col gap-4">
            <h1 className="uppercase font-bold text-3xl text-gray-900 dark:text-white">In Today</h1>
            <p className="max-w-md">
              Stay updated with the latest news across various domains. Explore technology, business, sports, and global affairs in one place.
            </p>
            <div className="flex gap-3">
              <FacebookIcon className="cursor-pointer hover:text-blue-500" />
              <TwitterIcon className="cursor-pointer hover:text-blue-400" />
              <LinkedInIcon className="cursor-pointer hover:text-blue-700" />
              <InstagramIcon className="cursor-pointer hover:text-pink-500" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white underline">Categories</h1>
            <ul className="flex flex-col gap-2">
              {["Home", "Business", "Technology", "Sports", "Global"].map((item) => (
                <li key={item} className="hover:text-active cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white underline">Subscribe to our Newsletter</h1>
            <p className="max-w-md">
              Get the latest updates directly in your inbox. Stay informed on current trends and news.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                className="rounded-full max-w-[380px] h-[50px] px-6 outline-none border border-gray-400 focus:border-active transition-all"
                placeholder="Enter your email"
              />
              <button className="h-[50px] max-w-[380px] rounded-full bg-active text-white font-medium px-6 py-2 hover:bg-opacity-80 transition-all">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
