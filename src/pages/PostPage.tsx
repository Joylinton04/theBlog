import cybertruck from "../assets/cybertruck.webp"

const PostPage = () => {
  return (
    <div className="pad h-full">
      {/* section 1 */}
      <div className="flex gap-6 mt-1 items-center flex-wrap">
        <div className="bg-black px-4 py-2 text-white text-sm uppercase">Joylinton 2.0</div>
        <div className="flex gap-3 items-center text-xs">
          <h1>TECHNOLOGY</h1>
          <p>SEP 20, 2024 8:55PM</p>
        </div>
      </div>

      {/* section 2 */}
      <div>
        <div className="mt-4">
          <h1 className="text-5xl font-Blogtitle font-bold capitalize">Cybertruck: The Future of Electric Utility Vehicles</h1>
          <p className="mt-2 capitalize font-blogtitle font-semibold text-lg">cybertruck-electric-utility-vehicle</p>
        </div>
        <div className="mt-6"> 
          <div className="max-w-[800px]">
            <img src={cybertruck} className="w-full h-full object-cover object-center"/>
          </div>
          <p className="mt-6 sm:leading-7 md:leading-8 text-lg">
          <span>The Tesla Cybertruck has captured the world's attention with its futuristic design, impressive performance, and groundbreaking technology. Unveiled by Elon Musk, the Cybertruck is Tesla's bold step into the electric truck market, promising not just a new type of utility vehicle but also a glimpse into the future of transportation.</span>
          One of the most striking features of the Cybertruck is its radical design. Unlike traditional trucks with their smooth, curved edges, the Cybertruck has a rugged, angular look, made from ultra-hard stainless steel. This exoskeleton is designed to provide maximum protection to passengers, making it extremely durable and resistant to damage. The unique design is polarizing, but it emphasizes the idea that this truck is unlike anything else on the road.
          <span className="block my-4">The Cybertruck isn't just about appearances—it also delivers impressive performance. It comes with up to three electric motors, providing it with serious power and an acceleration of 0-60 mph in as little as 2.9 seconds. Its electric range can go up to 500 miles, depending on the model, making it a competitive option even for long-distance use. It also has an impressive towing capacity of over 14,000 pounds and can handle the toughest of terrains with its adaptive air suspension.As expected from a Tesla, the Cybertruck is packed with cutting-edge technology. It features Tesla's autopilot, along with a range of sensors that allow for semi-autonomous driving capabilities. The interior of the truck is futuristic too, with a large central touchscreen and a minimalist layout that focuses on functionality and comfort.One of the biggest selling points of the Cybertruck is its contribution to reducing carbon emissions. The electric motor ensures zero emissions, which is a big win for those who care about the environment. In a world where climate change is a pressing issue, the Cybertruck offers a sustainable alternative to traditional, gas-guzzling trucks without compromising on performance or utility.
          </span>
          The Cybertruck isn't just for show—it's a practical utility vehicle. Its spacious bed, called the "vault," comes with a retractable cover and provides ample space for cargo. It's built for adventure, work, and everything in between. The versatility of the Cybertruck makes it an attractive option for outdoor enthusiasts, workers needing a powerful vehicle, or simply those looking to make a statement.
          The Tesla Cybertruck is a bold experiment in both design and function. It reimagines what a truck can be, offering an environmentally friendly, high-performing, and durable vehicle that is ready for the future. While its unconventional looks have sparked mixed reactions, there's no denying the technological and practical potential of the Cybertruck. As Tesla continues to innovate, the Cybertruck could very well pave the way for the future of electric utility vehicles.
          </p>
        </div>
      </div>

    </div>
  )
}

export default PostPage;