import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Brands = () => {
  const suburbs = ["Braemar", "Brivis", "Bonaire", "Kaden", "Vulcan", "Omega"];

  const generateSlug = (suburb) => suburb.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <Helmet>
        <title>
          Heating Brands Melbourne | Gas, Ducted & Hydronic Heating Service,
          Repair, Installation & Maintenance
        </title>
        <meta
          name="description"
          content="We service, repair, install, and maintain all major heating brands in Melbourne including Braemar, Brivis, Bonaire, Kaden, Vulcan, Omega. Expert technicians for Gas Heating, Ducted Heating, and Hydronic Heating systems."
        />
        <meta
          name="keywords"
          content="Heating brands Melbourne, Braemar, Brivis, Bonaire, Kaden, Vulcan, Omega, gas heating service, ducted heating service, hydronic heating service, heating repair, heating installation, heating maintenance"
        />
        <meta
          property="og:title"
          content="Heating Brands Melbourne | Gas, Ducted & Hydronic Heating Service, Repair, Installation & Maintenance"
        />
        <meta
          property="og:description"
          content="Expert service, repair, installation, and maintenance for Braemar, Brivis, Bonaire, Kaden, Vulcan, Omega and all major heating brands in Melbourne."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.heatingservicemelbourne.com.au/brands"
        />
        <meta property="og:image" content="/assets/img/about_img_2.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Heating Brands Melbourne | Gas, Ducted & Hydronic Heating Service, Repair, Installation & Maintenance"
        />
        <meta
          name="twitter:description"
          content="We work with Braemar, Brivis, Bonaire, Kaden, Vulcan, Omega and all major heating brands in Melbourne. Service, repair, installation, and maintenance by expert technicians."
        />
        <meta name="twitter:image" content="/assets/img/about_img_2.webp" />
        <link
          rel="canonical"
          href="https://www.heatingservicemelbourne.com.au/brands"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
      </Helmet>
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="text-center cs_mb_50">
            <h2 className="cs_fs_48 cs_mb_20">
              Trusted Heating Brands We Service
            </h2>
            <p className="cs_fs_18">
              We work with leading brands in Gas Heating, Ducted Heating, and
              Hydronic Heating systems. Our expert technicians deliver reliable
              service, repair, installation, and maintenance for all major
              heating brands in Melbourne.
            </p>
          </div>
          <div className="row">
            {suburbs.map((suburb, index) => (
              <div key={index} className="col-lg-4 col-md-6 cs_mb_20">
                <Link
                  to={`/brands/${generateSlug(suburb)}`}
                  className="cs_service_area_link d-block p-3 text-decoration-none border rounded hover-shadow text-center"
                  onClick={() => window.scrollTo(0, 0)}
                  style={{
                    height: "140px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "stretch",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      flex: "0 0 80%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "80%",
                      minHeight: "90px", // ensures enough space for all images
                      background: "#fff", // optional: helps visibility for transparent images
                    }}
                  >
                    <img
                      src={`/assets/img/brands/${generateSlug(suburb)}.png`}
                      alt={suburb}
                      className="cs_section_subheading_icon mb-2"
                      style={{
                        height: "100%",
                        width: "auto",
                        maxWidth: "80%",
                        objectFit: "contain",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flex: "0 0 20%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "20%",
                    }}
                  >
                    <span
                      className="cs_fs_16 cs_medium"
                      style={{ display: "block" }}
                    >
                      {suburb}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </>
  );
};

export default Brands;
