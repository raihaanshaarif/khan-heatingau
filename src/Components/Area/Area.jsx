import { Link } from "react-router-dom";

const Area = () => {
  const suburbs = [
    "Seville",
    "Yarra Glen",
    "Chirnside Park",
    "Croydon Hills",
    "Mitcham",
    "Elwood",
    "Emerald",
    "Lilydale",
    "South Melbourne",
    "Wandin North",
    "Gilderoy",
    "Mount Evelyn",
    "Mooroolbark",
    "Ringwood",
    "Monbulk",
    "Healesville",
    "Woori Yallock",
    "Ferntree Gully",
    "Belgrave",
    "Kinglake",
    "Yarra Junction",
    "Warburton",
    "Hoddles creek",
    "Brighton",
    "Caulfield",
    "St Kilda",
    "Hampton",
    "Black Rock",
    "Parkdale",
    "Rowville",
    "Scoresby",
    "Knox Knoxfield",
    "St Andrews",
    "Kinglake",
    "Montrose",
    "Kalorama",
    "Mount Dandenong",
    "Yering",
    "Gruyere",
    "Coldstream",
    "Yellingbo",
    "Steels Creek",
    "Dixons Creek",
    "Christmas Hills",
    "Toolangi",
    "Mount Toolebewong",
    "Launching Place",
    "Chum Creek",
    "Badger Creek",
    "Mount Burnett",
    "Cockatoo",
    "Macclesfield",
    "Mount waverley",
    "Clematis",
    "Avonsleigh",
    "Gembrook",
    "Wheelers hill",
    "Ferny Creek",
    "Sassafras",
    "Olinda",
    "Sherbrooke",
    "Kallista",
    "The Patch",
    "Glen Waverley",
    "Silvan",
    "Wantirna",
    "Bayswater",
    "The Basin",
    "Powellton",
    "Gladysvale",
    "Boronia",
    "Wesburn",
    "Lysterfield",
    "Upwey",
    "Millgrove",
    "Selby",
    "Tecoma",
    "Menzies creek",
    "Warrandyte",
    "Park Orchards",
    "Wonga Park",
    "Fitzroy",
    "Vermont",
    "Warranwood",
    "Essendon",
    "Carlton",
    "Richmond",
    "Kilsyth",
  ];

  const generateSlug = (suburb) => suburb.toLowerCase().replace(/\s+/g, "-");

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="text-center cs_mb_50">
          <h2 className="cs_fs_48 cs_mb_20">Service Areas</h2>
          <p className="cs_fs_18">
            We proudly serve heating and cooling services across Melbourne and
            surrounding suburbs
          </p>
        </div>
        <div className="row">
          {suburbs.map((suburb, index) => (
            <div key={index} className="col-lg-4 col-md-6 cs_mb_20">
              <Link
                to={`/service-area/${generateSlug(suburb)}`}
                className="cs_service_area_link d-block p-3 text-decoration-none border rounded hover-shadow"
              >
                <span className="cs_fs_16 cs_medium">{suburb}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Area;
