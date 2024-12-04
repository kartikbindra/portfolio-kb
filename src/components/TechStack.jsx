const techStack = [
    { name: "C++", img: "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png", alt: "cpp" },
    { name: "JavaScript", img: "https://img.icons8.com/color/96/000000/javascript--v1.png", alt: "js" },
    { name: "Python", img: "https://img.icons8.com/color/96/000000/python.png", alt: "python" },
    { name: "HTML", img: "https://img.icons8.com/color/96/000000/html-5--v1.png", alt: "html" },
    { name: "CSS", img: "https://img.icons8.com/color/96/000000/css3.png", alt: "css" },
    { name: "Solidity", img: "https://img.icons8.com/color/96/000000/solidity.png", alt: "solidity" },
    { name: "React", img: "https://img.icons8.com/color/96/000000/react-native.png", alt: "react" },
    { name: "Tailwind", img: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", alt: "tailwind" },
    { name: "Node.js", img: "https://img.icons8.com/color/96/000000/nodejs.png", alt: "node" },
    { name: "Express", img: "https://img.icons8.com/color/96/000000/express.png", alt: "express" },
    {name: "Figma", img: "https://img.icons8.com/color/96/000000/figma.png", alt: "figma"},
    { name: "Git", img: "https://img.icons8.com/color/96/000000/git.png", alt: "git" },
    {name: "PostgreSQL", img: "https://img.icons8.com/color/96/000000/postgreesql.png", alt: "postgresql"},
    {name: "Vercel", img: "https://pipedream.com/s.v0/app_XaLh2x/logo/orig", alt: "vercel"},
    {name: "MongoDB", img: "https://img.icons8.com/color/96/000000/mongodb.png", alt: "mongodb"},
    {name: "Firebase", img: "https://img.icons8.com/color/96/000000/firebase.png", alt: "firebase"},
    {name: "Docker", img: "https://img.icons8.com/color/96/000000/docker.png", alt: "docker"},
    {name: "Socket.io", img: "https://static-00.iconduck.com/assets.00/socket-io-icon-1024x1023-ingy97cp.png", alt: "socketio"},
    {name: "Next.js", img: "https://img.icons8.com/color/96/000000/nextjs.png", alt: "nextjs"},
    {name: "Hardhat", img: "https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png", alt: "hardhat"},
    {name: "Sass", img: "https://img.icons8.com/color/96/000000/sass.png", alt: "sass"},
    {name: "Bootstrap", img: "https://img.icons8.com/color/96/000000/bootstrap.png", alt: "bootstrap"},
    {name: "Flask", img: "https://img.icons8.com/color/96/000000/flask.png", alt: "flask"},
    {name: "Hyperledger", img: "https://icon-icons.com/downloadimage.php?id=170005&root=2699/PNG/512/&file=hyperledger_logo_icon_170005.png", alt: "hyperledger"},
    {name: "Postman", img: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000", alt: "postman"},
    {name: "Linux", img: "https://img.icons8.com/color/96/000000/linux.png", alt: "linux"},
    {name: "Google Cloud Platform", img: "https://img.icons8.com/color/96/000000/google-cloud-platform.png", alt: "gcp"},
    {name: "Markdown", img: "https://img.icons8.com/color/96/000000/markdown.png", alt: "markdown"},
    {name: "NPM", img: "https://img.icons8.com/color/96/000000/npm.png", alt: "npm"},
    {name: "Storybook", img: "https://img.icons8.com/color/96/000000/storybook.png", alt: "storybook"},



    // Add other technologies here...
];

const TechStack = () => {
    return (
        <section className="mt-4 w-[90%] md:w-[60%] bg-darkBg rounded-2xl content-fit mx-auto">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold">What I work with</h1>
                <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-10 gap-5 mt-8">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="relative group flex flex-col items-center justify-center grayscale hover:grayscale-0"
                        >
                            <img
                                src={tech.img}
                                alt={tech.alt}
                                className="w-12 h-12"
                                loading="lazy"
                            />
                            <p className="text-sm text-textSecondary opacity-0 top-0 left-1/2 -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-200 text-center">
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
