import React from 'react';
import { useParams } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa6";
import { CgWebsite } from 'react-icons/cg';
import { Github, Globe, Figma } from 'lucide-react';
import deeptrace_logo_transaprent from "../assets/deeptrace_logo_transparent.png";
import adroitUIwhitebg from "../assets/adroitUIwhitebg.png";
import qunataMindLogo from "../assets/quantaMindLogo.png";
import deeptrace from "../assets/deeptrace-dashboard.png";
import adroitUIhome from "../assets/adroitUIhome.png";
import quantamind from "../assets/quantamind.png";

const Projects = [
    {
        ProjectId: 0,
        ProjectName: "DeepTrace",
        ProjectTagline: "Detecting what's true in the world of fakes.",
        ProjectDescription: "<p><b>DeepTrace</b> is an innovative blockchain and machine learning-based platform designed to combat the <b>growing issue of deepfake videos</b> by leveraging advanced technology and <b>ensuring user privacy</b>. By utilizing the immutable and decentralized nature of blockchain, DeepTrace delivers a highly accurate and trustworthy solution for detecting and mitigating deepfake content worldwide.</p>",
        ProjectTechUsed: ["JavaScript", "React", "TailwindCSS", "Node.js", "MongoDB", "Express", "Solidity", "Flask", "Figma"],
        ProjectLinks: ["https://www.github.com/HitG010/DeepTrace"],
        ProjectLogo: {deeptrace_logo_transaprent},
        ProjectImages: [{deeptrace}],
        ProjectVideo: ["https://www.youtube.com/embed/k2KG_4mlOEo"],
    },
    {
        ProjectId: 1,
        ProjectName: "AdroitUI",
        ProjectTagline: "TailwindCSS Components UI Library for React.",
        ProjectDescription: "<p><b>AdroitUI</b> is a comprehensive <b>Tailwind CSS component library</b> designed to help you define and implement <b>your own custom design system</b> seamlessly. With over 20+ finely crafted and editable components, Adroit UI eliminates the hassle of managing complex Tailwind CSS code, allowing you to focus on building stunning and consistent user interfaces.</p><br/><p>This project gained <b>3000+ downloads</b> in the first 3 months.</p>",
        ProjectTechUsed: ["React", "Vite", "TailwindCSS", "NPM", "Storybook", "Figma"],
        ProjectLinks: ["https://www.github.com/kartikbindra/adroit-ui", "https://npmjs.com/package/adroit-ui", "https://www.figma.com/design/rnDRwMjWKW0QrI1Mjns2gO/Adroit-UI-Design-System?node-id=0-1&t=VLGKp07fWfMa4Bj5-1"],
        ProjectLogo: {adroitUIwhitebg},
        ProjectImages: [{adroitUIhome}],
        ProjectVideo: [],
    },
    {
        ProjectId: 2,
        ProjectName: "QuantaMind",
        ProjectTagline: "A Self-Help Mental Health Companion.",
        ProjectDescription: "<p>QuantaMind is a user-centric, technology-driven solution to provide personalized, stigma-free, and sustainable <b>mental health support</b> to individuals facing stressors and challenges in their daily lives, especially those in remote areas or with limited resources. This makes the work of doctors and psychiatrists easier by <b>aiding in more accurate and quicker patient analysis</b>.</p>",
        ProjectTechUsed: ["HTML", "CSS", "JavaScript", "EJS", "Node.js", "Express", "Firebase", "Figma"],
        ProjectLinks: ["https://www.github.com/kartikbindra/quantamind", "https://quantamind.dev"],
        ProjectLogo: {qunataMindLogo},
        ProjectImages: [{quantamind}],
        ProjectVideo: ["https://www.youtube.com/embed/nC0nxS_cI1Q"],
    }
];

const logos = [deeptrace_logo_transaprent, adroitUIwhitebg, qunataMindLogo];

const imgs = [
    [deeptrace],
    [adroitUIhome],
    [quantamind],
];

const linksicons = [<Github />, <Globe />, <Figma />];

const ProjectDeets = () => {
    const { name } = useParams();

    return (
        <div className="mt-24 mx-auto w-[60%]">
            {/* adding a bzack to projects button */}
            <button className="flex gap-2 items-center text-textSecondary px-2 py-1 rounded-md transition-all duration-300 hover:bg-darkCard mb-4" onClick={() => window.location.href='/projects/'}>
                <FaChevronLeft /> Back to Projects
            </button>
            {Projects.map((project) => {
                if (project.ProjectName.toLowerCase() === name.toLowerCase()) {
                    return (
                        <div key={project.ProjectId} className="flex flex-col">
                            <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                            <img src={logos[project.ProjectId]} alt="logo" className="h-16 w-16 object-contain" />
                            <div className="flex flex-col">
                                <h1 className="text-4xl font-bold">{project.ProjectName}</h1>
                                <h2 className="text-lg text-textSecondary">{project.ProjectTagline}</h2>
                            </div>
                            </div>
                            <div className="flex justify-center gap-4">
                                {project.ProjectLinks.map((link, idx) => (
                                    <div className='relative group overflow-hidden rounded-lg'>
                                    <a key={link} href={link} className="h-12 w-12 flex items-center justify-center border border-textSecondary/10 transition-all duration-300 px-2 py-2 rounded-lg" target='_blank'>{linksicons[idx]}</a>
                                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
                                    </div>
                                    
                                ))}
                            </div>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4">
                                {project.ProjectTechUsed.map((tech) => (
                                    <span key={tech} className="bg-darkCard text-textSecondary px-2 py-1 rounded-md">{tech}</span>
                                ))}
                            </div>
                            <p className="text-lg mt-4" dangerouslySetInnerHTML={{ __html: project.ProjectDescription }}></p>
                            {project.ProjectVideo[0] && (
                                <iframe width="800" height="420" src={project.ProjectVideo[0]} className='mt-8'></iframe>
                            )}
                            <div className="mt-8">
                                {project.ProjectImages.map((image, idx) => (
                                    <img key={image} src={imgs[project.ProjectId][idx]} alt="project" className="w-full rounded-xl shadow-md" />
                                ))}
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
    }

export default ProjectDeets;