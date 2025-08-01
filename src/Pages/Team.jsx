import { Helmet } from "react-helmet-async";
import BreadCumb from "../Components/Common/BreadCumb";
import Brand1 from "../Components/Team/Brand1";

const Brands = () => {
  return (
    <div className="team-area">
      <Helmet>
        <title>
          Our Team | Service First - Heating & Cooling Experts in Melbourne
        </title>
        <meta
          name="description"
          content="Meet the Service First team. Experienced, certified professionals providing top-quality heating and cooling services in Melbourne."
        />
        <meta
          name="keywords"
          content="Team, Experts, Heating, Cooling, Melbourne, Professionals"
        />
        <meta
          property="og:title"
          content="Our Team | Service First - Heating & Cooling Experts in Melbourne"
        />
        <meta
          property="og:description"
          content="Meet the Service First team. Experienced, certified professionals providing top-quality heating and cooling services in Melbourne."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.servicefirst.com.au/team"
        />
        <meta property="og:image" content="/assets/img/hero_img_1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Team | Service First - Heating & Cooling Experts in Melbourne"
        />
        <meta
          name="twitter:description"
          content="Meet the Service First team. Experienced, certified professionals providing top-quality heating and cooling services in Melbourne."
        />
        <meta name="twitter:image" content="/assets/img/hero_img_1.png" />
        <link rel="canonical" href="https://www.servicefirst.com.au/team" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
      </Helmet>
      <BreadCumb Title="Brands"></BreadCumb>
      <Brand1></Brand1>
    </div>
  );
};

export default Brands;
