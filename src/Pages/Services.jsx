import { Helmet } from "react-helmet-async";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta from "../Components/Services/Cta";
import Services2 from "../Components/Services/Services2";

const Services = () => {
  return (
    <div className="service-area">
      <Helmet>
        <title>
          Heating Services Melbourne | Gas, Ducted & Hydronic Heating - Service,
          Repair, Installation & Maintenance
        </title>
        <meta
          name="description"
          content="Discover expert Gas Heating, Ducted Heating, and Hydronic Heating service, repair, installation, and maintenance in Melbourne. Reliable heating solutions for homes and businesses."
        />
        <meta
          name="keywords"
          content="Gas Heating Melbourne, Ducted Heating Melbourne, Hydronic Heating Melbourne, heating service, heating repair, heating installation, heating maintenance, heater service, heater repair, heater installation, heater maintenance"
        />
        <meta
          property="og:title"
          content="Heating Services Melbourne | Gas, Ducted & Hydronic Heating - Service, Repair, Installation & Maintenance"
        />
        <meta
          property="og:description"
          content="Expert Gas Heating, Ducted Heating, and Hydronic Heating service, repair, installation, and maintenance in Melbourne. Trusted heating specialists for homes and businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.heatingservicemelbourne.com.au/service"
        />
        <meta property="og:image" content="/assets/img/hero_img_1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Heating Services Melbourne | Gas, Ducted & Hydronic Heating - Service, Repair, Installation & Maintenance"
        />
        <meta
          name="twitter:description"
          content="Heating Service Melbourne offers Gas Heating, Ducted Heating, and Hydronic Heating service, repair, installation, and maintenance for Melbourne homes and businesses."
        />
        <meta name="twitter:image" content="/assets/img/hero_img_1.png" />
        <link
          rel="canonical"
          href="https://www.heatingservicemelbourne.com.au/service"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
      </Helmet>
      <BreadCumb Title="Services"></BreadCumb>
      <Services2></Services2>
      <Cta></Cta>
      {/* <Pricing></Pricing> */}
    </div>
  );
};

export default Services;
