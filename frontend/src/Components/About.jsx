import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
const teamMembers = [
  {
    name: "Gautam Sharma",
    role: "Full Stack Developer",
    responsibilities:
      "Responsible for implementing the overall architecture and the system end to end",
    linkedinLink: "https://www.linkedin.com/in/gautam-sharma-8a1a3624b/",
    gihubLink: "https://github.com/GautamSh30",
  },
  {
    name: "Lokendra Tiwari",
    role: "Full Stack Developer",
    responsibilities:
      "Responsible for implementing the overall architecture and the system end to end",
    linkedinLink: "https://www.linkedin.com/in/lokendratiwari/",
    githubLink: "https://github.com/lokendra22844",
  },
  {
    name: "Aditya Singh",
    role: "UI-UX and Frontend Developer",
    responsibilities:
      "Responsible for designing the entire frontend UI and making enhancing the frontend ",
    linkedinLink: "https://www.linkedin.com/in/singhaditya5711/",
    githubLink: "",
  },
  {
    name: "Om Singh",
    role: "ML-AI",
    responsibilities: "Responsible for building the machine learning prospects",
    linkedinLink: "https://www.linkedin.com/in/om-singh-280827257/",
    githubLink: "",
  },
  {
    name: "Aman Jha",
    role: "Android Developer",
    responsibilities: "Responsible for AI integrations in our platform ",
    linkedinLink: "https://www.linkedin.com/in/aman-kumar-jha-461409286/",
    githubLink: "https://github.com/i-aman-jha",
  },
  {
    name: "Sonali",
    role: "Frontend Developer",
    responsibilities:
      "Responsible for improvising ideas and features for improving the overall system",
    linkedinLink: "",
    githubLink: "",
  },
];

function TeamMember({
  name,
  role,
  responsibilities,
  image,
  linkedinLink,
  gihubLink,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md m-4 max-w-xs">
      <img
        src={image}
        className="w-48 h-64 object-cover mx-auto mb-4 rounded-full"
        alt={name}
      />
      <div className="text-center">
        <h1 className="text-xl font-bold mb-2">{name}</h1>
        <h2 className="text-sm text-gray-500 mb-2 font-bold">{role}</h2>
        {responsibilities && (
          <p className="text-sm text-gray-700">{responsibilities}</p>
        )}
        <div className="flex flex-row justify-center gap-6 my-3 ">
          <Link to={linkedinLink}>
            <LinkedInIcon />
          </Link>
          <Link to={gihubLink}>
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-orange-100 min-h-screen">
      <section className="fixed inset-x-0 mx-auto w-full custom-navbar-width z-10 py-5 ">
        <nav className="bg-white text-primary lg:flex hidden flex-row justify-between px-5 py-1 rounded-2xl shadow-md items-center text-para z-10 border-nav">
          <div className="mx-2 w-[200px]">
            <Link to="/" className="text-5xl font-right ">
              Brain<span className="text-theme">IQ</span>
            </Link>
          </div>

          <div className="mx-2 h-20 list-none space-x-10 flex-row-center text-lg text-primary font-comf">
            {/* Static Links */}
            <a href="/">Home</a>
            <a href="/user/book-meeting">Dashboard</a>
            {/* Add more static links as needed */}
          </div>
        </nav>

        <nav className="text-primary flex lg:hidden flex-row justify-between px-5 py-2 my-4 rounded-lg shadow-md items-center text-para z-10 border-nav bg-white space-x-5">
          <div className="mx-2  w-[100px]">
            <Link to="" className="text-4xl font-right ">
              Brain<span className="text-theme">IQ</span>
            </Link>
          </div>
          <div className="mx-2 flex-row-between">
            <p className="text-4xl font-heading">
              <GiHamburgerMenu />
            </p>
          </div>
        </nav>
      </section>

      <div className="flex flex-col justify-center items-center p-40 ">
        <h1 className="text-6xl font-bold bg-orange-300 p-4 rounded-xl">
          We are the people who
        </h1>
        <h1 className="text-2xl font-semibold my-3 text-center">
          Developed BrainIQ
        </h1>
        <img
          class=" sm:block w-56 mx-6 object-cover rounded-full mb-5"
          src="https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?fit=327%2C345&ssl=1"
        />
        <h1 className="text-3xl font-bold mb-5">Team - Techy Blinders</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default About;
