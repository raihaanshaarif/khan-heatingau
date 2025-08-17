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
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N3J3C7NB"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <Helmet>
        {/* Google Tag Manager */}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N3J3C7NB');
          `}
        </script>
        {/* End Google Tag Manager */}
        <title>
          Heating Service Melbourne | Gas, Ducted & Hydronic Heating Repair,
          Service & Installation
        </title>
        <meta
          name="description"
          content="Heating Service Melbourne are your local experts for Gas Heating, Ducted Heating, and Hydronic Heating repair, service, installation, and maintenance. Fast, affordable, and reliable heating solutions for homes and businesses. Call 0405 133 761 for same-day service."
        />
        <meta
          name="keywords"
          content="Heating Service Melbourne, Gas Heating Melbourne, Ducted Heating Melbourne, Hydronic Heating Melbourne, Heating Repair Melbourne, Heating Installation Melbourne, Heating Maintenance Melbourne, Emergency Heating Service, Best Heating Company Melbourne, Local Heating Experts, Gas Heater Repair, Ducted Heater Service, Hydronic Heater Installation, Affordable Heating Melbourne, Same Day Heating Service"
        />
        <meta
          property="og:title"
          content="Heating Service Melbourne | Gas, Ducted & Hydronic Heating Experts"
        />
        <meta
          property="og:description"
          content="Melbourne’s #1 for Gas, Ducted & Hydronic Heating repair, service, installation & maintenance. Trusted, local, and affordable heating specialists. Book your service today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://heaterservicemelbourne.com.au/"
        />
        <meta
          property="og:image"
          content="https://heaterservicemelbourne.com.au/assets/img/hero_img_1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Heating Service Melbourne | Gas, Ducted & Hydronic Heating Experts"
        />
        <meta
          name="twitter:description"
          content="Melbourne’s best for Gas, Ducted & Hydronic Heating repair, service, installation & maintenance. Fast, affordable, and reliable heating solutions. Call now!"
        />
        <meta
          name="twitter:image"
          content="https://heaterservicemelbourne.com.au/assets/img/hero_img_1.png"
        />
        <link rel="canonical" href="https://heaterservicemelbourne.com.au/" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Heating Service Melbourne",
            "image": "https://heaterservicemelbourne.com.au/assets/img/hero_img_1.png",
            "imageAlt": "Heating Service Melbourne - Gas, Ducted & Hydronic Heating Experts",
            "@id": "",
            "url": "https://heaterservicemelbourne.com.au/",
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
            }],
            "description": "Heating Service Melbourne are your trusted local experts for Gas Heating, Ducted Heating, and Hydronic Heating repair, service, installation, and maintenance. We provide fast, affordable, and reliable heating solutions for homes and businesses across Melbourne. Call 0405 133 761 for same-day service.",
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": "Melbourne"
            },
            "serviceType": [
              "Gas Heating Repair",
              "Gas Heating Service",
              "Gas Heating Installation",
              "Ducted Heating Repair",
              "Ducted Heating Service",
              "Ducted Heating Installation",
              "Hydronic Heating Repair",
              "Hydronic Heating Service",
              "Hydronic Heating Installation",
              "Heating Maintenance"
            ]
          }
        `}</script>
      </Helmet>
      <HomeSlider></HomeSlider>
      <About
        Img="/assets/img/about_img_1.webp"
        TitleUp="About Us"
        Title="Melbourne’s Trusted Heating Professionals"
        Content="Heating Service Melbourne specialises in Gas Heating, Ducted Heating, and Hydronic Heating repair, service, installation, and maintenance. Our certified technicians deliver fast, affordable, and reliable heating solutions for homes and businesses across Melbourne. Choose us for expert care, energy-efficient systems, and same-day service."
        FeatureList={[
          "Gas Heating Repair, Service & Installation",
          "Ducted Heating Repair, Service & Installation",
          "Hydronic Heating Repair, Service & Installation",
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
