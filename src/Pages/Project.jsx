import BreadCumb from "../Components/Common/BreadCumb";
import Project1 from "../Components/Project/Project1";
import { Helmet } from "react-helmet-async";

const Project = () => {
  return (
    <div className="project-area">
      <Helmet>
        <title>
          Projects | Service First - Our Heating & Cooling Work in Melbourne
        </title>
        <meta
          name="description"
          content="View our completed heating and cooling projects across Melbourne. See why Service First is trusted for quality installations and repairs."
        />
        <meta
          name="keywords"
          content="Projects, Heating, Cooling, Installation, Repair, Melbourne"
        />
        <meta
          property="og:title"
          content="Projects | Service First - Our Heating & Cooling Work in Melbourne"
        />
        <meta
          property="og:description"
          content="View our completed heating and cooling projects across Melbourne. See why Service First is trusted for quality installations and repairs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.servicefirst.com.au/projects"
        />
        <meta property="og:image" content="/assets/img/hero_img_1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projects | Service First - Our Heating & Cooling Work in Melbourne"
        />
        <meta
          name="twitter:description"
          content="View our completed heating and cooling projects across Melbourne. See why Service First is trusted for quality installations and repairs."
        />
        <meta name="twitter:image" content="/assets/img/hero_img_1.png" />
        <link rel="canonical" href="https://www.servicefirst.com.au/projects" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
      </Helmet>
      <BreadCumb Title="Project"></BreadCumb>
      <Project1></Project1>
    </div>
  );
};

export default Project;
