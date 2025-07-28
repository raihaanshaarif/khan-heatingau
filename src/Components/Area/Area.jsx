import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Area = () => {
  const suburbs = [
    "Armadale",
    "Ashwood",
    "Attwood",
    "Avonsleigh",
    "Badger Creek",
    "Bayswater",
    "Baxter",
    "Beaconsfield",
    "Belgrave",
    "Bentleigh",
    "Bentleigh East",
    "Berwick",
    "Beaumaris",
    "Bittern",
    "Black Rock",
    "Blackburn North",
    "Blairgowrie",
    "Boneo",
    "Boronia",
    "Botanic Ridge",
    "Box Hill",
    "Briar Hill",
    "Broadmeadows",
    "Brighton",
    "Brighton East",
    "Bundoora",
    "Burwood 3125",
    "Burwood Chadstone",
    "Burwood East",
    "Caulfield",
    "Caulfield East",
    "Caulfield Junction",
    "Caulfield North",
    "Caulfield South",
    "Capel Sound",
    "Carnegie",
    "Carrum Downs",
    "Cheltenham",
    "Chirnside Park",
    "Chum Creek",
    "Christmas Hills",
    "Clayton",
    "Clayton South",
    "Cleeland",
    "Clematis",
    "Cockatoo",
    "Coldstream",
    "Cranbourne",
    "Cranbourne East",
    "Cranbourne North",
    "Cranbourne South",
    "Cremorne",
    "Croydon Hills",
    "Crib Point",
    "Dandenong 3175",
    "Dandenong East",
    "Dandenong North",
    "Dandenong South",
    "Dingley Village",
    "Dixons Creek",
    "Doncaster",
    "Doncaster Hill",
    "Donvale",
    "Doveton",
    "Dromana",
    "Dunearn",
    "Elsternwick",
    "Eltham",
    "Elwood",
    "Emerald",
    "Endeavour Hills",
    "Essendon",
    "Eumemmerring",
    "Fairfield",
    "Ferny Creek",
    "Fitzroy",
    "Flemington",
    "Form2",
    "Frankston",
    "Gembrook",
    "Gilderoy",
    "Gladysvale",
    "Glen Iris",
    "Glen Waverley",
    "Greensborough",
    "Gruyere",
    "Hallam",
    "Hampton",
    "Hampton Park",
    "Hawthorn",
    "Healesville",
    "Heatherton",
    "Heidelberg",
    "Hoddles creek",
    "Hughesdale",
    "Huntingdale",
    "Ivanhoe",
    "Junction Village",
    "Kalorama",
    "Kallista",
    "Kensington",
    "Keysborough",
    "Kilsyth",
    "Kinglake",
    "Knox Knoxfield",
    "Knoxfield",
    "Launching Place",
    "Langwarrin",
    "Lilydale",
    "Lower Plenty",
    "Lynbrook",
    "Lyndhurst",
    "Lyndhurst 3975",
    "Lysterfield",
    "Macclesfield",
    "Macleod",
    "Malvern East",
    "Malvern North",
    "Menzies creek",
    "Mentone",
    "Millgrove",
    "Mitcham",
    "Monbulk",
    "Mont Albert",
    "Montmorency",
    "Montrose",
    "Moorabbin",
    "Moorabbin East",
    "Mooroolbark",
    "Mornington",
    "Mount Burnett",
    "Mount Dandenong",
    "Mount Eliza",
    "Mount Evelyn",
    "Mount Toolebewong",
    "Mount Waverley",
    "Mount waverley",
    "Mulgrave",
    "Murrumbeena",
    "Narre Warren",
    "Narre Warren East",
    "Narre Warren North",
    "Narre Warren South",
    "North Melbourne",
    "Northcote",
    "Notting Hill",
    "Nunawading",
    "Oakleigh",
    "Oakleigh East",
    "Oakleigh South",
    "Olinda",
    "Ormond",
    "Park Orchards",
    "Parkdale",
    "Parkdale",
    "Port Melbourne",
    "Portsea",
    "Powellton",
    "Prahran",
    "Preston",
    "Red Hill",
    "Red Hill South",
    "Reservoir",
    "Richmond",
    "Richmond East",
    "Ringwood",
    "Ringwood North",
    "Rosebud",
    "Rosanna",
    "Rowville",
    "Rye",
    "Safety Beach",
    "Sandringham",
    "Sassafras",
    "Scoresby",
    "Seville",
    "Selby",
    "Sherbrooke",
    "Silvan",
    "Skye",
    "South Melbourne",
    "South Yarra",
    "Southbank",
    "Springvale",
    "Springvale South",
    "St Andrews",
    "St Helena",
    "St Kilda",
    "Steels Creek",
    "Surrey Hills",
    "Surrey Hills South",
    "Tecoma",
    "The Basin",
    "The Patch",
    "Thornbury",
    "Toolangi",
    "Toorak",
    "Tootgarook",
    "Upwey",
    "Upper Ferntree Gully",
    "Vermont",
    "Viewbank",
    "Wandin North",
    "Wantirna",
    "Warburton",
    "Warrandyte",
    "Warranwood",
    "Watsonia",
    "Waverley Park",
    "Wesburn",
    "Westall",
    "Wheelers Hill",
    "Wheelers hill",
    "Wonga Park",
    "Woori Yallock",
    "Yarra Glen",
    "Yarra Junction",
    "Yellingbo",
    "Yering",
  ];

  const generateSlug = (suburb) => suburb.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <Helmet>
        <title>
          Melbourne Heating Service Areas | Gas, Ducted & Hydronic Heating
          Specialists
        </title>
        <meta
          name="description"
          content="Find expert Gas Heating, Ducted Heating, and Hydronic Heating service, repair, installation, and maintenance in all Melbourne suburbs. Trusted heating specialists for homes and businesses."
        />
        <meta
          name="keywords"
          content="Heating Service Melbourne, gas heating Melbourne, ducted heating Melbourne, hydronic heating Melbourne, heating repair, heating installation, heating maintenance, Melbourne suburbs, heater service, heater repair, heater installation, heater maintenance"
        />
        <meta
          property="og:title"
          content="Melbourne Heating Service Areas | Gas, Ducted & Hydronic Heating Specialists"
        />
        <meta
          property="og:description"
          content="We provide Gas Heating, Ducted Heating, and Hydronic Heating service, repair, installation, and maintenance across all Melbourne suburbs. Reliable, energy-efficient heating solutions for homes and businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.heatingservicemelbourne.com.au/service-area"
        />
        <meta property="og:image" content="/assets/img/about_img_2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Melbourne Heating Service Areas | Gas, Ducted & Hydronic Heating Specialists"
        />
        <meta
          name="twitter:description"
          content="Expert heating service, repair, installation, and maintenance for Gas, Ducted & Hydronic Heating systems in all Melbourne suburbs."
        />
        <meta name="twitter:image" content="/assets/img/about_img_2.png" />
        <link
          rel="canonical"
          href="https://www.heatingservicemelbourne.com.au/service-area"
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
            <h2 className="cs_fs_48 cs_mb_20">Melbourne Service Areas</h2>
            <p className="cs_fs_18">
              We provide Gas Heating, Ducted Heating, and Hydronic Heating
              service, repair, installation, and maintenance across all
              Melbourne suburbs. Our certified technicians deliver reliable,
              energy-efficient heating solutions for homes and businesses.
            </p>
          </div>
          <div className="row">
            {suburbs.map((suburb, index) => (
              <div key={index} className="col-lg-4 col-md-6 cs_mb_20">
                <Link
                  to={`/service-area/${generateSlug(suburb)}`}
                  className="cs_service_area_link d-block p-3 text-decoration-none border rounded hover-shadow"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span className="cs_fs_16 cs_medium">{suburb}</span>
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

export default Area;
