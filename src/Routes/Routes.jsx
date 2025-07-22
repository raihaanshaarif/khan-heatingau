import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Parkdale from "../Components/AreaDetails/parkdale";
import BlackRock from "../Components/AreaDetails/black-rock";
import Rowville from "../Components/AreaDetails/rowville";
import Scoresby from "../Components/AreaDetails/scoresby";
import KnoxKnoxfield from "../Components/AreaDetails/knox-knoxfield";
import StAndrews from "../Components/AreaDetails/st-andrews";
import Montrose from "../Components/AreaDetails/montrose";
import Kalorama from "../Components/AreaDetails/kalorama";
import MountDandenong from "../Components/AreaDetails/mount-dandenong";
import Yering from "../Components/AreaDetails/yering";
import Gruyere from "../Components/AreaDetails/gruyere";
import Coldstream from "../Components/AreaDetails/coldstream";
import Yellingbo from "../Components/AreaDetails/yellingbo";
import SteelsCreek from "../Components/AreaDetails/steels-creek";
import DixonsCreek from "../Components/AreaDetails/dixons-creek";
import ChristmasHills from "../Components/AreaDetails/christmas-hills";
import Toolangi from "../Components/AreaDetails/toolangi";
import MountToolebewong from "../Components/AreaDetails/mount-toolebewong";
import LaunchingPlace from "../Components/AreaDetails/launching-place";
import ChumCreek from "../Components/AreaDetails/chum-creek";
import BadgerCreek from "../Components/AreaDetails/badger-creek";
import MountBurnett from "../Components/AreaDetails/mount-burnett";
import Cockatoo from "../Components/AreaDetails/cockatoo";
import Macclesfield from "../Components/AreaDetails/macclesfield";
import MountWaverley from "../Components/AreaDetails/mount-waverley";
import Clematis from "../Components/AreaDetails/clematis";
import Avonsleigh from "../Components/AreaDetails/avonsleigh";
import Gembrook from "../Components/AreaDetails/gembrook";
import WheelersHill from "../Components/AreaDetails/wheelers-hill";
import FernyCreek from "../Components/AreaDetails/ferny-creek";
import Sassafras from "../Components/AreaDetails/sassafras";
import Olinda from "../Components/AreaDetails/olinda";
import Sherbrooke from "../Components/AreaDetails/sherbrooke";
import Kallista from "../Components/AreaDetails/kallista";
import ThePatch from "../Components/AreaDetails/the-patch";
import GlenWaverley from "../Components/AreaDetails/glen-waverley";
import Silvan from "../Components/AreaDetails/silvan";
import Wantirna from "../Components/AreaDetails/wantirna";
import Bayswater from "../Components/AreaDetails/bayswater";
import TheBasin from "../Components/AreaDetails/the-basin";
import Powellton from "../Components/AreaDetails/powellton";
import Gladysvale from "../Components/AreaDetails/gladysvale";
import Boronia from "../Components/AreaDetails/boronia";
import Wesburn from "../Components/AreaDetails/wesburn";
import Lysterfield from "../Components/AreaDetails/lysterfield";
import Upwey from "../Components/AreaDetails/upwey";
import Millgrove from "../Components/AreaDetails/millgrove";
import Selby from "../Components/AreaDetails/selby";
import Tecoma from "../Components/AreaDetails/tecoma";
import MenziesCreek from "../Components/AreaDetails/menzies-creek";
import Warrandyte from "../Components/AreaDetails/warrandyte";
import ParkOrchards from "../Components/AreaDetails/park-orchards";
import WongaPark from "../Components/AreaDetails/wonga-park";
import Fitzroy from "../Components/AreaDetails/fitzroy";
import Vermont from "../Components/AreaDetails/vermont";
import Warranwood from "../Components/AreaDetails/warranwood";
import Essendon from "../Components/AreaDetails/essendon";
import Carlton from "../Components/AreaDetails/carlton";
import Richmond from "../Components/AreaDetails/richmond";
import Kilsyth from "../Components/AreaDetails/kilsyth";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import TeamDetails from "../Components/TeamDetails/TeamDetails";
import Project from "../Pages/Project";
import ProjectDetails from "../Components/ProjectDetails/ProjectDetails";
import Blog from "../Pages/Blog";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
// import AirConditioning from "../Components/ServiceDetails/airConditioning";
import DuctedGasHeating from "../Components/ServiceDetails/DuctedGasHeating";
import EvaporativeCoolers from "../Components/ServiceDetails/EvaporativeCoolers";
import WallFurnase_SpaceHeater from "../Components/ServiceDetails/WallFurnase_SpaceHeater";
import Cleaning from "../Components/ServiceDetails/Cleaning";
import Repairs from "../Components/ServiceDetails/Repairs";
import Brands from "../Pages/Team";
import HydronicHeating from "../Components/ServiceDetails/HydronicHeating";
import SplitSystem from "../Components/ServiceDetails/SplitSystem";
import DuctedHeating from "../Components/ServiceDetails/GasHeating";
import Area from "../Components/Area/Area";
import Seville from "../Components/AreaDetails/seville";
import YarraGlen from "../Components/AreaDetails/yarra-glen";
import ChirnsidePark from "../Components/AreaDetails/chirnside-park";
import CroydonHills from "../Components/AreaDetails/croydon-hills";
import Mitcham from "../Components/AreaDetails/mitcham";
import Elwood from "../Components/AreaDetails/elwood";
import Emerald from "../Components/AreaDetails/emerald";
import Lilydale from "../Components/AreaDetails/lilydale";
import SouthMelbourne from "../Components/AreaDetails/south-melbourne";
import WandinNorth from "../Components/AreaDetails/wandin-north";
import Gilderoy from "../Components/AreaDetails/gilderoy";
import MountEvelyn from "../Components/AreaDetails/mount-evelyn";
import Mooroolbark from "../Components/AreaDetails/mooroolbark";
import Ringwood from "../Components/AreaDetails/ringwood";
import Monbulk from "../Components/AreaDetails/monbulk";
import Healesville from "../Components/AreaDetails/healesville";
import WooriYallock from "../Components/AreaDetails/woori-yallock";
import FerntreeGully from "../Components/AreaDetails/ferntree-gully";
import Belgrave from "../Components/AreaDetails/belgrave";
import Kinglake from "../Components/AreaDetails/kinglake";
import YarraJunction from "../Components/AreaDetails/yarra-junction";
import Warburton from "../Components/AreaDetails/warburton";
import Hampton from "../Components/AreaDetails/hampton";
import StKilda from "../Components/AreaDetails/st-kilda";
import Caulfield from "../Components/AreaDetails/caulfield";
import Brighton from "../Components/AreaDetails/brighton";
import HoddlesCreek from "../Components/AreaDetails/hoddles-creek";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/service/service-details",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/service/gas-heating",
        element: <DuctedHeating></DuctedHeating>,
      },
      {
        path: "/service/split-system",
        element: <SplitSystem></SplitSystem>,
      },
      {
        path: "/service/hydronic-heating",
        element: <HydronicHeating></HydronicHeating>,
      },
      {
        path: "/service/ducted-heating",
        element: <DuctedGasHeating></DuctedGasHeating>,
      },
      {
        path: "/service/evaporative-coolers",
        element: <EvaporativeCoolers></EvaporativeCoolers>,
      },
      {
        path: "/service/wall-furnace-space-heater",
        element: <WallFurnase_SpaceHeater></WallFurnase_SpaceHeater>,
      },
      {
        path: "/service/cleaning",
        element: <Cleaning></Cleaning>,
      },
      {
        path: "/service/repairs",
        element: <Repairs></Repairs>,
      },

      {
        path: "/brands",
        element: <Brands></Brands>,
      },
      {
        path: "/team/team-details",
        element: <TeamDetails></TeamDetails>,
      },
      {
        path: "/project",
        element: <Project></Project>,
      },
      {
        path: "/project/project-details",
        element: <ProjectDetails></ProjectDetails>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog/blog-details",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/service-area",
        element: <Area></Area>,
      },
      {
        path: "service-area/seville",
        element: <Seville></Seville>,
      },
      {
        path: "service-area/yarra-glen",
        element: <YarraGlen></YarraGlen>,
      },
      {
        path: "service-area/chirnside-park",
        element: <ChirnsidePark></ChirnsidePark>,
      },
      {
        path: "service-area/croydon-hills",
        element: <CroydonHills></CroydonHills>,
      },
      {
        path: "service-area/mitcham",
        element: <Mitcham></Mitcham>,
      },
      {
        path: "service-area/elwood",
        element: <Elwood></Elwood>,
      },
      {
        path: "service-area/emerald",
        element: <Emerald></Emerald>,
      },
      {
        path: "service-area/lilydale",
        element: <Lilydale></Lilydale>,
      },
      {
        path: "service-area/south-melbourne",
        element: <SouthMelbourne></SouthMelbourne>,
      },
      {
        path: "service-area/wandin-north",
        element: <WandinNorth></WandinNorth>,
      },
      {
        path: "service-area/gilderoy",
        element: <Gilderoy></Gilderoy>,
      },
      {
        path: "service-area/mount-evelyn",
        element: <MountEvelyn></MountEvelyn>,
      },
      {
        path: "service-area/mooroolbark",
        element: <Mooroolbark></Mooroolbark>,
      },
      {
        path: "service-area/ringwood",
        element: <Ringwood></Ringwood>,
      },
      {
        path: "service-area/monbulk",
        element: <Monbulk></Monbulk>,
      },
      {
        path: "service-area/healesville",
        element: <Healesville></Healesville>,
      },
      {
        path: "service-area/woori-yallock",
        element: <WooriYallock></WooriYallock>,
      },
      {
        path: "service-area/ferntree-gully",
        element: <FerntreeGully></FerntreeGully>,
      },
      {
        path: "service-area/belgrave",
        element: <Belgrave></Belgrave>,
      },
      {
        path: "service-area/kinglake",
        element: <Kinglake></Kinglake>,
      },
      {
        path: "service-area/yarra-junction",
        element: <YarraJunction></YarraJunction>,
      },
      {
        path: "service-area/warburton",
        element: <Warburton></Warburton>,
      },
      {
        path: "service-area/hampton",
        element: <Hampton></Hampton>,
      },
      {
        path: "service-area/st-kilda",
        element: <StKilda></StKilda>,
      },
      {
        path: "service-area/caulfield",
        element: <Caulfield></Caulfield>,
      },
      {
        path: "service-area/brighton",
        element: <Brighton></Brighton>,
      },
      {
        path: "service-area/hoddles-creek",
        element: <HoddlesCreek></HoddlesCreek>,
      },
      {
        path: "service-area/parkdale",
        element: <Parkdale></Parkdale>,
      },
      {
        path: "service-area/black-rock",
        element: <BlackRock></BlackRock>,
      },
      {
        path: "service-area/rowville",
        element: <Rowville></Rowville>,
      },
      {
        path: "service-area/scoresby",
        element: <Scoresby></Scoresby>,
      },
      {
        path: "service-area/knox-knoxfield",
        element: <KnoxKnoxfield></KnoxKnoxfield>,
      },
      {
        path: "service-area/st-andrews",
        element: <StAndrews></StAndrews>,
      },
      {
        path: "service-area/montrose",
        element: <Montrose></Montrose>,
      },
      {
        path: "service-area/kalorama",
        element: <Kalorama></Kalorama>,
      },
      {
        path: "service-area/mount-dandenong",
        element: <MountDandenong></MountDandenong>,
      },
      {
        path: "service-area/yering",
        element: <Yering></Yering>,
      },
      {
        path: "service-area/gruyere",
        element: <Gruyere></Gruyere>,
      },
      {
        path: "service-area/coldstream",
        element: <Coldstream></Coldstream>,
      },
      {
        path: "service-area/yellingbo",
        element: <Yellingbo></Yellingbo>,
      },
      {
        path: "service-area/steels-creek",
        element: <SteelsCreek></SteelsCreek>,
      },
      {
        path: "service-area/dixons-creek",
        element: <DixonsCreek></DixonsCreek>,
      },
      {
        path: "service-area/christmas-hills",
        element: <ChristmasHills></ChristmasHills>,
      },
      {
        path: "service-area/toolangi",
        element: <Toolangi></Toolangi>,
      },
      {
        path: "service-area/mount-toolebewong",
        element: <MountToolebewong></MountToolebewong>,
      },
      {
        path: "service-area/launching-place",
        element: <LaunchingPlace></LaunchingPlace>,
      },
      {
        path: "service-area/chum-creek",
        element: <ChumCreek></ChumCreek>,
      },
      {
        path: "service-area/badger-creek",
        element: <BadgerCreek></BadgerCreek>,
      },
      {
        path: "service-area/mount-burnett",
        element: <MountBurnett></MountBurnett>,
      },
      {
        path: "service-area/cockatoo",
        element: <Cockatoo></Cockatoo>,
      },
      {
        path: "service-area/macclesfield",
        element: <Macclesfield></Macclesfield>,
      },
      {
        path: "service-area/mount-waverley",
        element: <MountWaverley></MountWaverley>,
      },
      {
        path: "service-area/clematis",
        element: <Clematis></Clematis>,
      },
      {
        path: "service-area/avonsleigh",
        element: <Avonsleigh></Avonsleigh>,
      },
      {
        path: "service-area/gembrook",
        element: <Gembrook></Gembrook>,
      },
      {
        path: "service-area/wheelers-hill",
        element: <WheelersHill></WheelersHill>,
      },
      {
        path: "service-area/ferny-creek",
        element: <FernyCreek></FernyCreek>,
      },
      {
        path: "service-area/sassafras",
        element: <Sassafras></Sassafras>,
      },
      {
        path: "service-area/olinda",
        element: <Olinda></Olinda>,
      },
      {
        path: "service-area/sherbrooke",
        element: <Sherbrooke></Sherbrooke>,
      },
      {
        path: "service-area/kallista",
        element: <Kallista></Kallista>,
      },
      {
        path: "service-area/the-patch",
        element: <ThePatch></ThePatch>,
      },
      {
        path: "service-area/glen-waverley",
        element: <GlenWaverley></GlenWaverley>,
      },
      {
        path: "service-area/silvan",
        element: <Silvan></Silvan>,
      },
      {
        path: "service-area/wantirna",
        element: <Wantirna></Wantirna>,
      },
      {
        path: "service-area/bayswater",
        element: <Bayswater></Bayswater>,
      },
      {
        path: "service-area/the-basin",
        element: <TheBasin></TheBasin>,
      },
      {
        path: "service-area/powellton",
        element: <Powellton></Powellton>,
      },
      {
        path: "service-area/gladysvale",
        element: <Gladysvale></Gladysvale>,
      },
      {
        path: "service-area/boronia",
        element: <Boronia></Boronia>,
      },
      {
        path: "service-area/wesburn",
        element: <Wesburn></Wesburn>,
      },
      {
        path: "service-area/lysterfield",
        element: <Lysterfield></Lysterfield>,
      },
      {
        path: "service-area/upwey",
        element: <Upwey></Upwey>,
      },
      {
        path: "service-area/millgrove",
        element: <Millgrove></Millgrove>,
      },
      {
        path: "service-area/selby",
        element: <Selby></Selby>,
      },
      {
        path: "service-area/tecoma",
        element: <Tecoma></Tecoma>,
      },
      {
        path: "service-area/menzies-creek",
        element: <MenziesCreek></MenziesCreek>,
      },
      {
        path: "service-area/warrandyte",
        element: <Warrandyte></Warrandyte>,
      },
      {
        path: "service-area/park-orchards",
        element: <ParkOrchards></ParkOrchards>,
      },
      {
        path: "service-area/wonga-park",
        element: <WongaPark></WongaPark>,
      },
      {
        path: "service-area/fitzroy",
        element: <Fitzroy></Fitzroy>,
      },
      {
        path: "service-area/vermont",
        element: <Vermont></Vermont>,
      },
      {
        path: "service-area/warranwood",
        element: <Warranwood></Warranwood>,
      },
      {
        path: "service-area/essendon",
        element: <Essendon></Essendon>,
      },
      {
        path: "service-area/carlton",
        element: <Carlton></Carlton>,
      },
      {
        path: "service-area/richmond",
        element: <Richmond></Richmond>,
      },
      {
        path: "service-area/kilsyth",
        element: <Kilsyth></Kilsyth>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "home2",
    element: <Layout2></Layout2>,
    children: [
      {
        index: true,
        element: <Home2></Home2>,
      },
    ],
  },
]);
