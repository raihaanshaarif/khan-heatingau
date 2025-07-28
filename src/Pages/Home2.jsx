import { Helmet } from "react-helmet-async";
import About2 from "../Components/About/About2";
import Blog2 from "../Components/Home2/Blog2";
import Choose2 from "../Components/Home2/Choose2";
import Contact2 from "../Components/Home2/Contact2";
import HomeSlider2 from "../Components/Home2/HomeSlider2";
import Project2 from "../Components/Home2/Project2";
import Services2 from "../Components/Home2/Services2";
import Team from "../Components/Home2/Team";
import Testimonial3 from "../Components/Home2/Testimonial3";
import Cta from "../Components/Services/Cta";

const Home2 = () => {
  return (
    <div>
      <Helmet>
        <title>
          Heating Service Melbourne | Gas, Ducted & Hydronic Heating - Service,
          Repair, Installation & Maintenance
        </title>
        <meta
          name="description"
          content="Heating Service Melbourne are experts in Gas Heating, Ducted Heating, and Hydronic Heating service, repair, installation, and maintenance for homes and businesses. Reliable, energy-efficient heating solutions in Melbourne."
        />
        <meta
          name="keywords"
          content="Gas Heating Melbourne, Ducted Heating Melbourne, Hydronic Heating Melbourne, heating service, heating repair, heating installation, heating maintenance, heater service, heater repair, heater installation, heater maintenance"
        />
        <meta
          property="og:title"
          content="Heating Service Melbourne | Gas, Ducted & Hydronic Heating - Service, Repair, Installation & Maintenance"
        />
        <meta
          property="og:description"
          content="Expert Gas Heating, Ducted Heating, and Hydronic Heating service, repair, installation, and maintenance in Melbourne. Trusted heating specialists for homes and businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.heatingservicemelbourne.com.au/home2"
        />
        <meta property="og:image" content="/assets/img/about_img_2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Heating Service Melbourne | Gas, Ducted & Hydronic Heating - Service, Repair, Installation & Maintenance"
        />
        <meta
          name="twitter:description"
          content="Heating Service Melbourne offers Gas Heating, Ducted Heating, and Hydronic Heating service, repair, installation, and maintenance for Melbourne homes and businesses."
        />
        <meta name="twitter:image" content="/assets/img/about_img_2.png" />
        <link
          rel="canonical"
          href="https://www.heatingservicemelbourne.com.au/home2"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
      </Helmet>
      <HomeSlider2></HomeSlider2>
      <About2
        Img="/assets/img/about_img_2.png"
        TitleUp="About us"
        Title="Turning up the chill factor in your home or office"
        Content="This involves setting up a new air conditioning system in your home or office. It's crucial to ensure that the unit is properly sized for the space and installed correctly for optimal efficiency"
        FeatureList={[
          "Ventilation System Maintenance",
          "Indoor Air Quality Testing",
          "Cool Craft Custom Solutions",
        ]}
        Experience="25+"
        BioImg="/assets/img/avatar_1.png"
        BioName="Roberto Ramon"
        BioContent="Call any time for services"
      ></About2>
      <Services2></Services2>
      <Choose2></Choose2>
      <Cta></Cta>
      <Team></Team>
      <Contact2></Contact2>
      <Project2></Project2>
      <Testimonial3></Testimonial3>
      <Blog2></Blog2>
    </div>
  );
};

export default Home2;
