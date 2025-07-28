import { Helmet } from "react-helmet-async";
import About from "../Components/Home/About";
import Choose from "../Components/Home/Choose";
import Faq from "../Components/Home/Faq";
import HomeSlider from "../Components/Home/HomeSlider";
// import Pricing from "../Components/Home/Pricing";
import Process from "../Components/Home/Process";
import Services from "../Components/Home/Services";
// import Team from "../Components/Home/Team";
import Testimonial from "../Components/Home/Testimonial";
import Cta from "../Components/Services/Cta";

const Home = () => {
  return (
    <div className="home-area">
      <Helmet>
        <title>Best Gas and Ducted Heating Service in Melbourne</title>
        <meta
          name="description"
          content="Expert heating and cooling installation, maintenance, and repair in Melbourne. Reliable, energy-efficient solutions for homes and businesses. 24/7 support."
        />
        <meta
          name="keywords"
          content="Heating, Cooling, Air Conditioning, Melbourne, Installation, Repair, Maintenance, Energy Efficient"
        />
        <meta
          property="og:title"
          content="Service First | Best Heating & Cooling Service in Melbourne"
        />
        <meta
          property="og:description"
          content="Expert heating and cooling installation, maintenance, and repair in Melbourne. Reliable, energy-efficient solutions for homes and businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.servicefirst.com.au/" />
        <meta property="og:image" content="/assets/img/hero_img_1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Service First | Best Heating & Cooling Service in Melbourne"
        />
        <meta
          name="twitter:description"
          content="Expert heating and cooling installation, maintenance, and repair in Melbourne. Reliable, energy-efficient solutions for homes and businesses."
        />
        <meta name="twitter:image" content="/assets/img/hero_img_1.png" />
        <link rel="canonical" href="https://www.servicefirst.com.au/" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Service First",
            "image": "/assets/img/hero_img_1.png",
            "@id": "",
            "url": "https://www.servicefirst.com.au/",
            "telephone": "0405 133 761",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "12 The Fairway Hampton Park VIC 3976",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "postalCode": "3976",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -38.033,
              "longitude": 145.270
            },
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "08:00",
              "closes": "20:00"
            }]
          }
        `}</script>
      </Helmet>
      <HomeSlider></HomeSlider>
      <About
        Img="/assets/img/about_img_1.png"
        TitleUp="About Us"
        Title="Melbourne’s Trusted Heating Professionals"
        Content="We specialize in Gas Heating, Ducted Heating, and Hydronic Heating service, repair, installation, and maintenance in Melbourne. Our experienced team delivers reliable, energy-efficient heating solutions for homes and businesses. Choose us for prompt, professional service and expert care for all your heating needs."
        FeatureList={[
          "Gas Heating Service, Repair & Installation",
          "Ducted Heating Service, Repair & Installation",
          "Hydronic Heating Service, Repair & Installation",
          "Expert Heating System Maintenance",
          "Energy-Efficient Heating Solutions",
          "Melbourne Residential & Commercial Heating Specialists",
        ]}
        NumberContent="Call now to book a service"
        Number="0405 133 761"
      ></About>
      <Services></Services>
      <Cta></Cta>
      {/* <Team></Team> */}
      <Choose></Choose>
      <Process></Process>

      {/* <Pricing></Pricing> */}
      <Testimonial></Testimonial>
      <Faq></Faq>
    </div>
  );
};

export default Home;
