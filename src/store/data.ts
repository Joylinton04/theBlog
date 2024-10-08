import { v4 as uuidv4 } from "uuid";
import { format } from 'date-fns'
import chi from '../assets/forflu.webp'
import hurricane from '../assets/hurricane.webp'
import cybertruck from '../assets/cybertruck.webp'
import controller from '../assets/controller.webp'
import freethem from '../assets/freethem.jpg'
import imf from '../assets/imf.png'
import titan from '../assets/titan.webp'
import iphone16 from '../assets/iphone16.webp'
import ps5 from '../assets/ps5.jpg'
import ios18 from   '../assets/ios18.jpg'
import ocean from '../assets/ocean.jpeg'


interface blog {
    id: string;
    title: string;
    slug: string;
    content: string;
    date: string;
    author: string;
    image: string;
    category: string;
    // tags: string[];
}

const datetime = format(new Date(), 'MMM dd, yyyy pp')

export  const blogs:blog[] = [
    {
        id:uuidv4(),
        title: "Cybertruck: The Future of Electric Utility Vehicle",
        slug: "cybertruck-electric-utility-vehicle",
        content: "The Tesla Cybertruck has captured the world's attention with its futuristic design, impressive performance, and groundbreaking technology. Unveiled by Elon Musk, the Cybertruck is Tesla's bold step into the electric truck market, promising not just a new type of utility vehicle but also a glimpse into the future of transportation.One of the most striking features of the Cybertruck is its radical design. Unlike traditional trucks with their smooth, curved edges, the Cybertruck has a rugged, angular look, made from ultra-hard stainless steel. This exoskeleton is designed to provide maximum protection to passengers, making it extremely durable and resistant to damage. The unique design is polarizing, but it emphasizes the idea that this truck is unlike anything else on the road.The Cybertruck isn't just about appearances—it also delivers impressive performance. It comes with up to three electric motors, providing it with serious power and an acceleration of 0-60 mph in as little as 2.9 seconds. Its electric range can go up to 500 miles, depending on the model, making it a competitive option even for long-distance use. It also has an impressive towing capacity of over 14,000 pounds and can handle the toughest of terrains with its adaptive air suspension.As expected from a Tesla, the Cybertruck is packed with cutting-edge technology. It features Tesla's autopilot, along with a range of sensors that allow for semi-autonomous driving capabilities. The interior of the truck is futuristic too, with a large central touchscreen and a minimalist layout that focuses on functionality and comfort.One of the biggest selling points of the Cybertruck is its contribution to reducing carbon emissions. The electric motor ensures zero emissions, which is a big win for those who care about the environment. In a world where climate change is a pressing issue, the Cybertruck offers a sustainable alternative to traditional, gas-guzzling trucks without compromising on performance or utility.The Cybertruck isn't just for show—it's a practical utility vehicle. Its spacious bed, called the vault comes with a retractable cover and provides ample space for cargo. It's built for adventure, work, and everything in between. The versatility of the Cybertruck makes it an attractive option for outdoor enthusiasts, workers needing a powerful vehicle, or simply those looking to make a statement.The Tesla Cybertruck is a bold experiment in both design and function. It reimagines what a truck can be, offering an environmentally friendly, high-performing, and durable vehicle that is ready for the future. While its unconventional looks have sparked mixed reactions, there's no denying the technological and practical potential of the Cybertruck. As Tesla continues to innovate, the Cybertruck could very well pave the way for the future of electric utility vehicles.",
        date: datetime,
        author: "Joylinton 2.0",
        image: cybertruck,
        category: "Technology",
    },
    {
        id:uuidv4(),
        title: "The US Is Loading Up on Bird Flu Vaccine",
        slug: "us-bird-flu-vaccine-preparation",
        content: "The United States is ramping up its stockpile of bird flu vaccines in response to the growing threat posed by the H5N1 strain of avian influenza. Although bird flu has primarily affected poultry and wild birds, recent outbreaks have raised concerns about potential transmission to humans. The US government is preparing by securing vaccines to protect against a possible outbreak among people, especially as the virus has shown instances of cross-species transmission.This proactive move aims to ensure readiness for any human outbreak, minimizing the risk of a pandemic similar to COVID-19. Public health officials emphasize that while the current risk to humans remains low, the virus's unpredictable nature makes it critical to prepare. The vaccine stockpiling effort reflects the importance of preemptive action, seeking to avoid the shortages and slow responses experienced in previous health crises, ultimately safeguarding both public health and food security.",
        date: datetime,
        author: "Joylinton 2.0",
        image: chi,
        category: "Global",
    },
    {
        id:uuidv4(),
        title: "Hurricane Helene Shows How Broken the US Insurance System Is",
        slug: "hurricane-helene-us-insurance-failures",
        content: "The devastation left by Hurricane Helene has highlighted deep flaws in the US insurance system, leaving countless homeowners struggling to rebuild their lives. Many families have found that their claims are either denied or fall short of covering the damage, exposing issues like restrictive policy terms, slow response times, and complex bureaucratic hurdles. In addition, rising premiums have made insurance unaffordable for many, especially those in disaster-prone areas. With the increasing frequency of extreme weather events driven by climate change, it’s clear that the current insurance model is inadequate. Reforms are urgently needed to create a fairer, more reliable system for all.",
        date: datetime,
        author: "Elizabeth Frimps",
        image: hurricane,
        category: "Global",
    },
    {
        id:uuidv4(),
        title: "This Video Game Controller Has Become the US Military's Weapon of Choice",
        slug: "video-game-controller-military-use",
        content: "The US military has adopted an unexpected tool for controlling some of its advanced equipment: a standard video game controller. Originally designed for entertainment, this familiar piece of technology has become a key component in operating modern military machinery, from drones to submarines. The reason is simple—video game controllers are intuitive, widely used, and easily understood by young soldiers who grew up with gaming consoles.",
        date: datetime,
        author: "Joylinton 2.0",
        image: controller,
        category: "Gear",
    },
    {
        id:uuidv4(),
        title: "Ghana Reaches IMF Agreement for $360 Million Tranche",
        slug: "ghana-imf-agreement-2024",
        content: "Ghana has reached a staff-level agreement with the International Monetary Fund (IMF) for a $360 million fourth tranche under its current economic program. This agreement is part of an Extended Credit Facility (ECF) aimed at stabilizing Ghana's economy amidst rising debt and inflation concerns. The fourth tranche comes as part of a larger $3 billion deal that was negotiated to help Ghana manage its fiscal challenges and restore macroeconomic stability.The IMF agreement focuses on reforms such as improving domestic revenue collection, reducing public sector debt, and enhancing the transparency of public finances. With inflation still high and economic growth under pressure, these funds are crucial for meeting budgetary requirements and ensuring sustainable growth.The government has been taking steps to meet IMF conditions, including fiscal consolidation and reducing spending. However, the road ahead remains challenging, with calls for improved governance and accountability. The IMF’s support is seen as essential to maintain investor confidence and help Ghana navigate its current financial crisis, while implementing structural changes needed to build a more resilient economy.",
        date: datetime,
        author: "Me2.0",
        image: imf,
        category: "todays Pick",
    },
    {
        id:uuidv4(),
        title: "The Titan Submersible Disaster Shocked the World. The Exclusive Inside Story Is More Disturbing Than Anyone Imagined",
        slug: "titan-submersible-disaster-exclusive-inside-story",
        content: "The Titan submersible disaster, which shocked the world, has an inside story that is even more disturbing than initially imagined. On its ill-fated journey to explore the Titanic wreck, the submersible, operated by OceanGate, tragically imploded, killing all five people on board. As new information comes to light, it’s evident that systemic failures and overlooked warnings contributed to the disaster.Insiders revealed that concerns about the safety of the Titan were raised long before the catastrophe. Engineers, industry experts, and even former employees had warned about the sub’s structural integrity, particularly its use of experimental materials and lack of proper certification. Despite these red flags, the mission went ahead, driven by the desire for adventure and exploration at any cost.Accounts from those involved paint a troubling picture of a company culture that prioritized ambition over safety. The crew, including the founder Stockton Rush, placed immense faith in untested technology, ignoring repeated calls for caution. The sub's design, which included a carbon-fiber hull and commercial gaming controller as part of its navigation system, has since been criticized as inadequate for the depths it attempted to reach.The loss of the Titan serves as a stark reminder of the dangers inherent in pushing the boundaries of exploration without sufficient precaution, highlighting the critical importance of regulation and thorough safety checks in extreme environments.",
        date: datetime,
        author: "Harrison",
        image: titan,
        category: "todays Pick",
    },
    {
        id:uuidv4(),
        title: "Free the Citizens and Fix the Country: Protests in Ghana Demand Justice and Environmental Action",
        slug: "free-the-citizens-fix-country-protest-ghana",
        content: "The movement, which includes banners like 'Say No to Galamsey' has drawn widespread attention, with activists pushing for better government action on environmental protection and civil rights. Protesters began their march at Legon Okponglo and made their way to Black Star Square, with plans to present petitions to the Attorney-General and the Minister of Lands and Natural Resources.Social media influencers, including Kalyjay, have played a key role in rallying public support, highlighting the importance of clean water, safe lands, and fundamental rights. Despite warnings from the police about potential disruptions, the protesters remain determined, seeking meaningful changes to end illegal mining and address injustices in government policies.This demonstration symbolizes growing frustration among Ghanaians with the government's response to pressing environmental and social justice issues.",
        date: datetime,
        author: "FreeTheCitizens",
        image: freethem,
        category: "todays Pick",
    },
    {
        id:uuidv4(),
        title: "The Best iPhone 16 Cases and Accessories for Your New Device.",
        slug: "best-iphone-16-cases-accessories",
        content: "The iPhone 16 has finally arrived, and with it comes a wide selection of accessories that can enhance your experience. Whether you need robust protection, fast charging, or a stylish cover, here are some of the best cases and accessories for the iPhone 16 that you should consider.For those who need serious protection without compromising style, Casetify has some excellent options. The Bounce case offers up to 21.3 feet of drop resistance, making it ideal for those prone to accidents. The Ultra Bounce case provides an impressive 32.8 feet of drop protection. Both cases are available in a range of colors, including Clear/Black, Baby Blue, and Peony Pink, and are MagSafe-compatible, perfect for wireless charging convenience​ AppleInsider).The Smartish Gripmunk is another great option, particularly if you’re after a budget-friendly yet functional case. This case comes with textured edges for a better grip, reducing the risk of accidental drops. It also supports MagSafe charging and is available in different colors and fun patterns, from floral designs to cosmic scenes​(Engadget).Your new iPhone deserves the best protection, functionality, and style. Whether you prioritize safety, sustainability, or simply want to make a statement, there is an iPhone 16 case or accessory for everyone. Make sure you select accessories that support the new features of the iPhone 16, like MagSafe compatibility and enhanced camera capabilities, to get the most out of your investment.",
        date: datetime,
        author: "Michael scholar",
        image: iphone16,
        category: "Technology",
    },
    {
        id:uuidv4(),
        title: "PS5 vs. PS5 Slim vs. PS5 Pro: What's the Difference, and Which Console Should You Get?",
        slug: "ps5-vs-ps5-slim-vs-ps5-pro-comparison",
        content: "Sony has expanded its PlayStation 5 lineup, introducing the PS5 Slim and the PS5 Pro. Here's a quick guide to help you choose the right console.The PS5 is the original model, featuring a powerful GPU and advanced SSD technology for fast loading times and high-resolution gameplay. It comes in a standard version with a disc drive and a digital-only version without one.The PS5 Slim is a more compact version of the original PS5. It has a smaller form factor, which makes it more space-friendly, and comes with slightly improved energy efficiency. While it retains the same performance capabilities as the standard PS5, the slimmer design is ideal for those who need to save space.The PS5 Pro, on the other hand, is a more powerful upgrade aimed at gamers seeking the best performance. It features enhanced GPU power, allowing for better frame rates and improved visuals in 4K. It's designed for those who want the highest quality gaming experience, especially in demanding titles.If you prioritize space and affordability, the PS5 Slim is the best option. However, if you want a performance boost for top-tier gaming, the PS5 Pro is worth considering.",
        date: datetime,
        author: "linton gamer",
        image: ps5,
        category: "Technology",
    },
    {
        id:uuidv4(),
        title: "How to Customize Your Home Screen With iOS 18",
        slug: "customize-home-screen-ios-18",
        content: `Apple's iOS 18 has brought a wealth of customization options that make your iPhone even more personal and expressive. Here are some ways to make the most out of these features:

        1. Interactive Widgets
        Widgets are more powerful than ever in iOS 18. They’re now interactive, which means you can take actions—like completing reminders or playing music—directly from the widget. To add a widget, long-press on your home screen until the apps jiggle, tap the “+” in the top left corner, and select your desired widget.

        2. Custom App Icons
        You can change app icons to match your style using the Shortcuts app. Just create a new shortcut to open an app, tap “Add to Home Screen”, and choose a custom image for the app icon. This allows for more visual      cohesion with your chosen theme.

        3. Focus Mode-Specific Layouts
        iOS 18 integrates Focus Modes with home screen layouts, allowing you to create specific home screen arrangements for work, personal time, or sleep. Go to Settings > Focus to set different home screens that appear when specific Focus Modes are active.

        4. Animated Wallpapers and Themes
        The new dynamic wallpapers change throughout the day, giving your home screen a fresh look that evolves with time. Access these by going to Settings > Wallpaper and selecting from the dynamic options.

        With these features, iOS 18 makes customizing your home screen easier, letting you express your style and boost productivity.
        `,
        date: datetime,
        author: "Augustine R",
        image: ios18,
        category: "Technology",
    },
    {
        id:uuidv4(),
        title: "How Soon Might the Atlantic Ocean Break? Two Sibling Scientists Found an Answer—and Shook the World",
        slug: "atlantic-ocean-break-scientists-discovery",
        content: "The prospect of the Atlantic Ocean breaking apart sounds like something out of a sci-fi thriller, but recent findings by two sibling scientists have put this possibility on the scientific radar—and it's shaken the world. The siblings, Dr. Emma and Dr. Noah Carter, have been studying tectonic movements for over a decade, and their recent research has produced groundbreaking insights into the future of our planet's geography.The Atlantic Ocean is bordered by the tectonic plates that slowly drift and shape the continents as we know them. What Dr. Emma and Dr. Noah Carter have discovered is a surprising acceleration in the movement of these plates along the Mid-Atlantic Ridge. This underwater mountain range runs down the center of the Atlantic Ocean, and it is a key location where the tectonic plates of the Earth's crust are either pulling apart or pushing together.Their research, based on new satellite data and advanced geophysical models, suggests that the movement of these plates has become increasingly unstable. They hypothesize that within the next few millennia, the forces along the Mid-Atlantic Ridge could lead to a significant split—essentially breaking the Atlantic into two different basins. While this isn't happening tomorrow, the idea that this process has accelerated is startling.The discovery by Dr. Emma and Dr. Noah Carter about the potential splitting of the Atlantic Ocean is a stark reminder of how dynamic our planet truly is. While the exact timeline of such an event remains uncertain, their research is a significant contribution to our understanding of Earth's ever-changing landscape. It highlights the importance of studying natural systems closely—because even changes on geological timescales can have lasting impacts on our world and our lives.",
        date: datetime,
        author: "Jane Smith 1.0",
        image: ocean,
        category: "Global",
    },
    {
        id:uuidv4(),
        title: "How Soon Might the Atlantic Ocean Break? Two Sibling Scientists Found an Answer—and Shook the World",
        slug: "atlantic-ocean-break-scientists-discovery",
        content: "The prospect of the Atlantic Ocean breaking apart sounds like something out of a sci-fi thriller, but recent findings by two sibling scientists have put this possibility on the scientific radar—and it's shaken the world. The siblings, Dr. Emma and Dr. Noah Carter, have been studying tectonic movements for over a decade, and their recent research has produced groundbreaking insights into the future of our planet's geography.The Atlantic Ocean is bordered by the tectonic plates that slowly drift and shape the continents as we know them. What Dr. Emma and Dr. Noah Carter have discovered is a surprising acceleration in the movement of these plates along the Mid-Atlantic Ridge. This underwater mountain range runs down the center of the Atlantic Ocean, and it is a key location where the tectonic plates of the Earth's crust are either pulling apart or pushing together.Their research, based on new satellite data and advanced geophysical models, suggests that the movement of these plates has become increasingly unstable. They hypothesize that within the next few millennia, the forces along the Mid-Atlantic Ridge could lead to a significant split—essentially breaking the Atlantic into two different basins. While this isn't happening tomorrow, the idea that this process has accelerated is startling.The discovery by Dr. Emma and Dr. Noah Carter about the potential splitting of the Atlantic Ocean is a stark reminder of how dynamic our planet truly is. While the exact timeline of such an event remains uncertain, their research is a significant contribution to our understanding of Earth's ever-changing landscape. It highlights the importance of studying natural systems closely—because even changes on geological timescales can have lasting impacts on our world and our lives.",
        date: datetime,
        author: "Jane Smith 1.0",
        image: ocean,
        category: "Global",
    },
]