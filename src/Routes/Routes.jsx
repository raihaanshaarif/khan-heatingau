import { createBrowserRouter } from "react-router-dom";
// --- AUTO-GENERATED AREA IMPORTS START ---
import Armadale from "../Components/AreaDetails/armadale";
import Ashwood from "../Components/AreaDetails/ashwood";
import Attwood from "../Components/AreaDetails/attwood";
import Avonsleigh from "../Components/AreaDetails/avonsleigh";
import Baxter from "../Components/AreaDetails/baxter";
import Beaconsfield from "../Components/AreaDetails/beaconsfield";
import Beaumaris from "../Components/AreaDetails/beaumaris";
import Bentleigh from "../Components/AreaDetails/bentleigh";
import BentleighEast from "../Components/AreaDetails/bentleigh-east";
import Berwick from "../Components/AreaDetails/berwick";
import Bittern from "../Components/AreaDetails/bittern";
import BlackburnNorth from "../Components/AreaDetails/blackburn-north";
import Blairgowrie from "../Components/AreaDetails/blairgowrie";
import Boneo from "../Components/AreaDetails/boneo";
import BotanicRidge from "../Components/AreaDetails/botanic-ridge";
import BoxHill from "../Components/AreaDetails/box-hill";
import BriarHill from "../Components/AreaDetails/briar-hill";
import BrightonEast from "../Components/AreaDetails/brighton-east";
import Broadmeadows from "../Components/AreaDetails/broadmeadows";
import Bundoora from "../Components/AreaDetails/bundoora";
import Burwood3125 from "../Components/AreaDetails/burwood-3125";
import BurwoodChadstone from "../Components/AreaDetails/burwood-chadstone";
import BurwoodEast from "../Components/AreaDetails/burwood-east";
import CapeSchanck from "../Components/AreaDetails/cape-schanck";
import CapelSound from "../Components/AreaDetails/capel-sound";
import Carnegie from "../Components/AreaDetails/carnegie";
import CarrumDowns from "../Components/AreaDetails/carrum-downs";
import CaulfieldEast from "../Components/AreaDetails/caulfield-east";
import CaulfieldJunction from "../Components/AreaDetails/caulfield-junction";
import CaulfieldNorth from "../Components/AreaDetails/caulfield-north";
import CaulfieldSouth from "../Components/AreaDetails/caulfield-south";
import Cheltenham from "../Components/AreaDetails/cheltenham";
import Clayton from "../Components/AreaDetails/clayton";
import ClaytonSouth from "../Components/AreaDetails/clayton-south";
import Cleeland from "../Components/AreaDetails/cleeland";
import Clyde from "../Components/AreaDetails/clyde";
import ClydeNorth from "../Components/AreaDetails/clyde-north";
import Cremorne from "../Components/AreaDetails/cremorne";
import CribPoint from "../Components/AreaDetails/crib-point";
import Dandenong3175 from "../Components/AreaDetails/dandenong-3175";
import DandenongEast from "../Components/AreaDetails/dandenong-east";
import DandenongNorth from "../Components/AreaDetails/dandenong-north";
import DandenongSouth from "../Components/AreaDetails/dandenong-south";
import DingleyVillage from "../Components/AreaDetails/dingley-village";
import Doncaster from "../Components/AreaDetails/doncaster";
import DoncasterHill from "../Components/AreaDetails/doncaster-hill";
import Donvale from "../Components/AreaDetails/donvale";
import Doveton from "../Components/AreaDetails/doveton";
import Dromana from "../Components/AreaDetails/dromana";
import Dunearn from "../Components/AreaDetails/dunearn";
import Edithvale from "../Components/AreaDetails/edithvale";
import Elsternwick from "../Components/AreaDetails/elsternwick";
import Eltham from "../Components/AreaDetails/eltham";
import EndeavourHills from "../Components/AreaDetails/endeavour-hills";
import Eumemmerring from "../Components/AreaDetails/eumemmerring";
import Fairfield from "../Components/AreaDetails/fairfield";
import Flemington from "../Components/AreaDetails/flemington";
import Frankston from "../Components/AreaDetails/frankston";
import GlenIris from "../Components/AreaDetails/glen-iris";
import Greensborough from "../Components/AreaDetails/greensborough";
import Hallam from "../Components/AreaDetails/hallam";
import HamptonPark from "../Components/AreaDetails/hampton-park";
import Hawthorn from "../Components/AreaDetails/hawthorn";
import Heatherton from "../Components/AreaDetails/heatherton";
import Heidelberg from "../Components/AreaDetails/heidelberg";
import Hughesdale from "../Components/AreaDetails/hughesdale";
import Huntingdale from "../Components/AreaDetails/huntingdale";
import Ivanhoe from "../Components/AreaDetails/ivanhoe";
import JunctionVillage from "../Components/AreaDetails/junction-village";
import Kallista from "../Components/AreaDetails/kallista";
import Kew from "../Components/AreaDetails/kew";
import Kensington from "../Components/AreaDetails/kensington";
import Keysborough from "../Components/AreaDetails/keysborough";
import Kilsyth from "../Components/AreaDetails/kilsyth";
import Knoxfield from "../Components/AreaDetails/knoxfield";
import Langwarrin from "../Components/AreaDetails/langwarrin";
import Lilydale from "../Components/AreaDetails/lilydale";
import LowerPlenty from "../Components/AreaDetails/lower-plenty";
import Lynbrook from "../Components/AreaDetails/lynbrook";
import Lyndhurst from "../Components/AreaDetails/lyndhurst";
import Lyndhurst3975 from "../Components/AreaDetails/lyndhurst-3975";
import Macleod from "../Components/AreaDetails/macleod";
import MalvernEast from "../Components/AreaDetails/malvern-east";
import MalvernNorth from "../Components/AreaDetails/malvern-north";
import Mentone from "../Components/AreaDetails/mentone";
import MenziesCreek from "../Components/AreaDetails/menzies-creek";
import Millgrove from "../Components/AreaDetails/millgrove";
import Mitcham from "../Components/AreaDetails/mitcham";
import Monbulk from "../Components/AreaDetails/monbulk";
import MontAlbert from "../Components/AreaDetails/mont-albert";
import Montmorency from "../Components/AreaDetails/montmorency";
import Moorabbin from "../Components/AreaDetails/moorabbin";
import MoorabbinEast from "../Components/AreaDetails/moorabbin-east";
import Mooroolbark from "../Components/AreaDetails/mooroolbark";
import Mornington from "../Components/AreaDetails/mornington";
import MountBurnett from "../Components/AreaDetails/mount-burnett";
import MountEliza from "../Components/AreaDetails/mount-eliza";
import MountEvelyn from "../Components/AreaDetails/mount-evelyn";
import MountToolebewong from "../Components/AreaDetails/mount-toolebewong";
import Mulgrave from "../Components/AreaDetails/mulgrave";
import Murrumbeena from "../Components/AreaDetails/murrumbeena";
import NarreWarren from "../Components/AreaDetails/narre-warren";
import NarreWarrenEast from "../Components/AreaDetails/narre-warren-east";
import NarreWarrenNorth from "../Components/AreaDetails/narre-warren-north";
import NarreWarrenSouth from "../Components/AreaDetails/narre-warren-south";
import NoblePark from "../Components/AreaDetails/noble-park";
import NobleParkNorth from "../Components/AreaDetails/noble-park-north";
import NorthMelbourne from "../Components/AreaDetails/north-melbourne";
import Northcote from "../Components/AreaDetails/northcote";
import NottingHill from "../Components/AreaDetails/notting-hill";
import Nunawading from "../Components/AreaDetails/nunawading";
import Oakleigh from "../Components/AreaDetails/oakleigh";
import OakleighEast from "../Components/AreaDetails/oakleigh-east";
import OakleighSouth from "../Components/AreaDetails/oakleigh-south";
import Olinda from "../Components/AreaDetails/olinda";
import Ormond from "../Components/AreaDetails/ormond";
import ParkOrchards from "../Components/AreaDetails/park-orchards";
import PortMelbourne from "../Components/AreaDetails/port-melbourne";
import Portsea from "../Components/AreaDetails/portsea";
import Prahran from "../Components/AreaDetails/prahran";
import Preston from "../Components/AreaDetails/preston";
import RedHill from "../Components/AreaDetails/red-hill";
import RedHillSouth from "../Components/AreaDetails/red-hill-south";
import Reservoir from "../Components/AreaDetails/reservoir";
import RichmondEast from "../Components/AreaDetails/richmond-east";
import RingwoodNorth from "../Components/AreaDetails/ringwood-north";
import Rosanna from "../Components/AreaDetails/rosanna";
import Rosebud from "../Components/AreaDetails/rosebud";
import Rowville from "../Components/AreaDetails/rowville";
import Rye from "../Components/AreaDetails/rye";
import SafetyBeach from "../Components/AreaDetails/safety-beach";
import Sandringham from "../Components/AreaDetails/sandringham";
import Selby from "../Components/AreaDetails/selby";
import Skye from "../Components/AreaDetails/skye";
import Sorrento from "../Components/AreaDetails/sorrento";
import SouthMelbourne from "../Components/AreaDetails/south-melbourne";
import SouthYarra from "../Components/AreaDetails/south-yarra";
import Southbank from "../Components/AreaDetails/southbank";
import Springvale from "../Components/AreaDetails/springvale";
import SpringvaleSouth from "../Components/AreaDetails/springvale-south";
import StHelena from "../Components/AreaDetails/st-helena";
import SurreyHills from "../Components/AreaDetails/surrey-hills";
import SurreyHillsSouth from "../Components/AreaDetails/surrey-hills-south";
import Tecoma from "../Components/AreaDetails/tecoma";
import TheBasin from "../Components/AreaDetails/the-basin";
import ThePatch from "../Components/AreaDetails/the-patch";
import Thornbury from "../Components/AreaDetails/thornbury";
import Toorak from "../Components/AreaDetails/toorak";
import Tootgarook from "../Components/AreaDetails/tootgarook";
import Tyabb from "../Components/AreaDetails/tyabb";
import TyabbEast from "../Components/AreaDetails/tyabb-east";
import UpperFerntreeGully from "../Components/AreaDetails/upper-ferntree-gully";
import Upwey from "../Components/AreaDetails/upwey";
import Vermont from "../Components/AreaDetails/vermont";
import Viewbank from "../Components/AreaDetails/viewbank";
import WandinNorth from "../Components/AreaDetails/wandin-north";
import Wantirna from "../Components/AreaDetails/wantirna";
import Warburton from "../Components/AreaDetails/warburton";
import Warrandyte from "../Components/AreaDetails/warrandyte";
import Warranwood from "../Components/AreaDetails/warranwood";
import Watsonia from "../Components/AreaDetails/watsonia";
import WaverleyPark from "../Components/AreaDetails/waverley-park";
import Wesburn from "../Components/AreaDetails/wesburn";
import Westall from "../Components/AreaDetails/westall";
import WheelersHill from "../Components/AreaDetails/wheelers-hill";
import WongaPark from "../Components/AreaDetails/wonga-park";
import WooriYallock from "../Components/AreaDetails/woori-yallock";
import YarraGlen from "../Components/AreaDetails/yarra-glen";
import YarraJunction from "../Components/AreaDetails/yarra-junction";
import Yellingbo from "../Components/AreaDetails/yellingbo";
import Yering from "../Components/AreaDetails/yering";
// --- AUTO-GENERATED AREA IMPORTS END ---
// --- AUTO-GENERATED AREA ROUTES START ---

// --- AUTO-GENERATED AREA ROUTES END ---
import Main from "../Layout/Main";
import Parkdale from "../Components/AreaDetails/parkdale";
import BlackRock from "../Components/AreaDetails/black-rock";

import Scoresby from "../Components/AreaDetails/scoresby";
import KnoxKnoxfield from "../Components/AreaDetails/knox-knoxfield";
import StAndrews from "../Components/AreaDetails/st-andrews";
import Montrose from "../Components/AreaDetails/montrose";
import Kalorama from "../Components/AreaDetails/kalorama";
import MountDandenong from "../Components/AreaDetails/mount-dandenong";

import Gruyere from "../Components/AreaDetails/gruyere";
import Coldstream from "../Components/AreaDetails/coldstream";

import SteelsCreek from "../Components/AreaDetails/steels-creek";
import DixonsCreek from "../Components/AreaDetails/dixons-creek";
import ChristmasHills from "../Components/AreaDetails/christmas-hills";
import Toolangi from "../Components/AreaDetails/toolangi";

import LaunchingPlace from "../Components/AreaDetails/launching-place";
import ChumCreek from "../Components/AreaDetails/chum-creek";
import BadgerCreek from "../Components/AreaDetails/badger-creek";

import Cockatoo from "../Components/AreaDetails/cockatoo";
import Macclesfield from "../Components/AreaDetails/macclesfield";
import MountWaverley from "../Components/AreaDetails/mount-waverley";
import Clematis from "../Components/AreaDetails/clematis";

import Gembrook from "../Components/AreaDetails/gembrook";

import FernyCreek from "../Components/AreaDetails/ferny-creek";
import Sassafras from "../Components/AreaDetails/sassafras";

import Sherbrooke from "../Components/AreaDetails/sherbrooke";

import GlenWaverley from "../Components/AreaDetails/glen-waverley";
import Silvan from "../Components/AreaDetails/silvan";

import Bayswater from "../Components/AreaDetails/bayswater";

import Powellton from "../Components/AreaDetails/powellton";
import Gladysvale from "../Components/AreaDetails/gladysvale";
import Boronia from "../Components/AreaDetails/boronia";

import Lysterfield from "../Components/AreaDetails/lysterfield";

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
import Brands from "../Components/Brands/Brands";
import HydronicHeating from "../Components/ServiceDetails/HydronicHeating";
import SplitSystem from "../Components/ServiceDetails/SplitSystem";
import DuctedHeating from "../Components/ServiceDetails/GasHeating";
import Area from "../Components/Area/Area";
import Seville from "../Components/AreaDetails/seville";

import ChirnsidePark from "../Components/AreaDetails/chirnside-park";
import CroydonHills from "../Components/AreaDetails/croydon-hills";

import Elwood from "../Components/AreaDetails/elwood";
import Emerald from "../Components/AreaDetails/emerald";

import Gilderoy from "../Components/AreaDetails/gilderoy";

import Ringwood from "../Components/AreaDetails/ringwood";

import Healesville from "../Components/AreaDetails/healesville";

import FerntreeGully from "../Components/AreaDetails/ferntree-gully";
import Belgrave from "../Components/AreaDetails/belgrave";
import Kinglake from "../Components/AreaDetails/kinglake";

import Hampton from "../Components/AreaDetails/hampton";
import StKilda from "../Components/AreaDetails/st-kilda";
import Caulfield from "../Components/AreaDetails/caulfield";
import Brighton from "../Components/AreaDetails/brighton";
import HoddlesCreek from "../Components/AreaDetails/hoddles-creek";
import Essendon from "../Components/AreaDetails/essendon";
import Carlton from "../Components/AreaDetails/carlton";
import Richmond from "../Components/AreaDetails/richmond";
import Fitzroy from "../Components/AreaDetails/fitzroy";
import Braemar from "../Components/BrandsDetails/Braemar";
import Brivis from "../Components/BrandsDetails/Brivis";
import Bonaire from "../Components/BrandsDetails/Bonaire";
import Kaden from "../Components/BrandsDetails/Kaden";

import Omega from "../Components/BrandsDetails/Omega";
import Vulcan from "../Components/BrandsDetails/Vulkan";

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
        path: "/brands",
        element: <Brands></Brands>,
      },
      {
        path: "/brands/braemar",
        element: <Braemar></Braemar>,
      },
      {
        path: "/brands/brivis",
        element: <Brivis></Brivis>,
      },
      {
        path: "/brands/kaden",
        element: <Kaden></Kaden>,
      },
      {
        path: "/brands/vulcan",
        element: <Vulcan></Vulcan>,
      },
      {
        path: "/brands/omega",
        element: <Omega></Omega>,
      },
      {
        path: "/brands/bonaire",
        element: <Bonaire></Bonaire>,
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
        element: <Essendon />,
      },
      {
        path: "service-area/carlton",
        element: <Carlton />,
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
      { path: "service-area/armadale", element: <Armadale /> },
      { path: "service-area/ashwood", element: <Ashwood /> },
      { path: "service-area/attwood", element: <Attwood /> },
      { path: "service-area/avonsleigh", element: <Avonsleigh /> },
      { path: "service-area/baxter", element: <Baxter /> },
      { path: "service-area/beaconsfield", element: <Beaconsfield /> },
      { path: "service-area/beaumaris", element: <Beaumaris /> },
      { path: "service-area/bentleigh", element: <Bentleigh /> },
      { path: "service-area/bentleigh-east", element: <BentleighEast /> },
      { path: "service-area/berwick", element: <Berwick /> },
      { path: "service-area/bittern", element: <Bittern /> },
      { path: "service-area/blackburn-north", element: <BlackburnNorth /> },
      { path: "service-area/blairgowrie", element: <Blairgowrie /> },
      { path: "service-area/boneo", element: <Boneo /> },
      { path: "service-area/botanic-ridge", element: <BotanicRidge /> },
      { path: "service-area/box-hill", element: <BoxHill /> },
      { path: "service-area/briar-hill", element: <BriarHill /> },
      { path: "service-area/brighton-east", element: <BrightonEast /> },
      { path: "service-area/broadmeadows", element: <Broadmeadows /> },
      { path: "service-area/bundoora", element: <Bundoora /> },
      { path: "service-area/burwood-3125", element: <Burwood3125 /> },
      { path: "service-area/burwood-chadstone", element: <BurwoodChadstone /> },
      { path: "service-area/burwood-east", element: <BurwoodEast /> },
      { path: "service-area/cape-schanck", element: <CapeSchanck /> },
      { path: "service-area/capel-sound", element: <CapelSound /> },
      { path: "service-area/carnegie", element: <Carnegie /> },
      { path: "service-area/carrum-downs", element: <CarrumDowns /> },
      { path: "service-area/caulfield-east", element: <CaulfieldEast /> },
      {
        path: "service-area/caulfield-junction",
        element: <CaulfieldJunction />,
      },
      { path: "service-area/caulfield-north", element: <CaulfieldNorth /> },
      { path: "service-area/caulfield-south", element: <CaulfieldSouth /> },
      { path: "service-area/cheltenham", element: <Cheltenham /> },
      { path: "service-area/clayton", element: <Clayton /> },
      { path: "service-area/clayton-south", element: <ClaytonSouth /> },
      { path: "service-area/cleeland", element: <Cleeland /> },
      { path: "service-area/clyde", element: <Clyde /> },
      { path: "service-area/clyde-north", element: <ClydeNorth /> },
      { path: "service-area/cremorne", element: <Cremorne /> },
      { path: "service-area/crib-point", element: <CribPoint /> },
      { path: "service-area/dandenong-3175", element: <Dandenong3175 /> },
      { path: "service-area/dandenong-east", element: <DandenongEast /> },
      { path: "service-area/dandenong-north", element: <DandenongNorth /> },
      { path: "service-area/dandenong-south", element: <DandenongSouth /> },
      { path: "service-area/dingley-village", element: <DingleyVillage /> },
      { path: "service-area/doncaster", element: <Doncaster /> },
      { path: "service-area/doncaster-hill", element: <DoncasterHill /> },
      { path: "service-area/donvale", element: <Donvale /> },
      { path: "service-area/doveton", element: <Doveton /> },
      { path: "service-area/dromana", element: <Dromana /> },
      { path: "service-area/dunearn", element: <Dunearn /> },
      { path: "service-area/edithvale", element: <Edithvale /> },
      { path: "service-area/elsternwick", element: <Elsternwick /> },
      { path: "service-area/eltham", element: <Eltham /> },
      { path: "service-area/endeavour-hills", element: <EndeavourHills /> },
      { path: "service-area/eumemmerring", element: <Eumemmerring /> },
      { path: "service-area/fairfield", element: <Fairfield /> },
      { path: "service-area/flemington", element: <Flemington /> },
      { path: "service-area/frankston", element: <Frankston /> },
      { path: "service-area/glen-iris", element: <GlenIris /> },
      { path: "service-area/greensborough", element: <Greensborough /> },
      { path: "service-area/hallam", element: <Hallam /> },
      { path: "service-area/hampton-park", element: <HamptonPark /> },
      { path: "service-area/hawthorn", element: <Hawthorn /> },
      { path: "service-area/heatherton", element: <Heatherton /> },
      { path: "service-area/heidelberg", element: <Heidelberg /> },
      { path: "service-area/hughesdale", element: <Hughesdale /> },
      { path: "service-area/huntingdale", element: <Huntingdale /> },
      { path: "service-area/ivanhoe", element: <Ivanhoe /> },
      { path: "service-area/junction-village", element: <JunctionVillage /> },
      { path: "service-area/kallista", element: <Kallista /> },
      { path: "service-area/kew", element: <Kew /> },
      { path: "service-area/kensington", element: <Kensington /> },
      { path: "service-area/keysborough", element: <Keysborough /> },
      { path: "service-area/knoxfield", element: <Knoxfield /> },
      { path: "service-area/langwarrin", element: <Langwarrin /> },
      { path: "service-area/lilydale", element: <Lilydale /> },
      { path: "service-area/lower-plenty", element: <LowerPlenty /> },
      { path: "service-area/lynbrook", element: <Lynbrook /> },
      { path: "service-area/lyndhurst", element: <Lyndhurst /> },
      { path: "service-area/lyndhurst-3975", element: <Lyndhurst3975 /> },
      { path: "service-area/macleod", element: <Macleod /> },
      { path: "service-area/malvern-east", element: <MalvernEast /> },
      { path: "service-area/malvern-north", element: <MalvernNorth /> },
      { path: "service-area/mentone", element: <Mentone /> },
      { path: "service-area/menzies-creek", element: <MenziesCreek /> },
      { path: "service-area/millgrove", element: <Millgrove /> },
      { path: "service-area/mitcham", element: <Mitcham /> },
      { path: "service-area/monbulk", element: <Monbulk /> },
      { path: "service-area/mont-albert", element: <MontAlbert /> },
      { path: "service-area/montmorency", element: <Montmorency /> },
      { path: "service-area/moorabbin", element: <Moorabbin /> },
      { path: "service-area/moorabbin-east", element: <MoorabbinEast /> },
      { path: "service-area/mooroolbark", element: <Mooroolbark /> },
      { path: "service-area/mornington", element: <Mornington /> },
      { path: "service-area/mount-burnett", element: <MountBurnett /> },
      { path: "service-area/mount-eliza", element: <MountEliza /> },
      { path: "service-area/mount-evelyn", element: <MountEvelyn /> },
      { path: "service-area/mount-toolebewong", element: <MountToolebewong /> },
      { path: "service-area/mulgrave", element: <Mulgrave /> },
      { path: "service-area/murrumbeena", element: <Murrumbeena /> },
      { path: "service-area/narre-warren", element: <NarreWarren /> },
      { path: "service-area/narre-warren-east", element: <NarreWarrenEast /> },
      {
        path: "service-area/narre-warren-north",
        element: <NarreWarrenNorth />,
      },
      {
        path: "service-area/narre-warren-south",
        element: <NarreWarrenSouth />,
      },
      { path: "service-area/noble-park", element: <NoblePark /> },
      { path: "service-area/noble-park-north", element: <NobleParkNorth /> },
      { path: "service-area/north-melbourne", element: <NorthMelbourne /> },
      { path: "service-area/northcote", element: <Northcote /> },
      { path: "service-area/notting-hill", element: <NottingHill /> },
      { path: "service-area/nunawading", element: <Nunawading /> },
      { path: "service-area/oakleigh", element: <Oakleigh /> },
      { path: "service-area/oakleigh-east", element: <OakleighEast /> },
      { path: "service-area/oakleigh-south", element: <OakleighSouth /> },
      { path: "service-area/olinda", element: <Olinda /> },
      { path: "service-area/ormond", element: <Ormond /> },
      { path: "service-area/port-melbourne", element: <PortMelbourne /> },
      { path: "service-area/portsea", element: <Portsea /> },
      { path: "service-area/prahran", element: <Prahran /> },
      { path: "service-area/preston", element: <Preston /> },
      { path: "service-area/red-hill", element: <RedHill /> },
      { path: "service-area/red-hill-south", element: <RedHillSouth /> },
      { path: "service-area/reservoir", element: <Reservoir /> },
      { path: "service-area/richmond-east", element: <RichmondEast /> },
      { path: "service-area/ringwood-north", element: <RingwoodNorth /> },
      { path: "service-area/rosanna", element: <Rosanna /> },
      { path: "service-area/rosebud", element: <Rosebud /> },
      { path: "service-area/rowville", element: <Rowville /> },
      { path: "service-area/rye", element: <Rye /> },
      { path: "service-area/safety-beach", element: <SafetyBeach /> },
      { path: "service-area/sandringham", element: <Sandringham /> },
      { path: "service-area/selby", element: <Selby /> },
      { path: "service-area/skye", element: <Skye /> },
      { path: "service-area/sorrento", element: <Sorrento /> },
      { path: "service-area/south-melbourne", element: <SouthMelbourne /> },
      { path: "service-area/south-yarra", element: <SouthYarra /> },
      { path: "service-area/southbank", element: <Southbank /> },
      { path: "service-area/springvale", element: <Springvale /> },
      { path: "service-area/springvale-south", element: <SpringvaleSouth /> },
      { path: "service-area/st-helena", element: <StHelena /> },
      { path: "service-area/surrey-hills", element: <SurreyHills /> },
      {
        path: "service-area/surrey-hills-south",
        element: <SurreyHillsSouth />,
      },
      { path: "service-area/tecoma", element: <Tecoma /> },
      { path: "service-area/the-basin", element: <TheBasin /> },
      { path: "service-area/the-patch", element: <ThePatch /> },
      { path: "service-area/thornbury", element: <Thornbury /> },
      { path: "service-area/toorak", element: <Toorak /> },
      { path: "service-area/tootgarook", element: <Tootgarook /> },
      { path: "service-area/tyabb", element: <Tyabb /> },
      { path: "service-area/tyabb-east", element: <TyabbEast /> },
      {
        path: "service-area/upper-ferntree-gully",
        element: <UpperFerntreeGully />,
      },
      { path: "service-area/upwey", element: <Upwey /> },
      { path: "service-area/vermont", element: <Vermont /> },
      { path: "service-area/viewbank", element: <Viewbank /> },
      { path: "service-area/wandin-north", element: <WandinNorth /> },
      { path: "service-area/wantirna", element: <Wantirna /> },
      { path: "service-area/warburton", element: <Warburton /> },
      { path: "service-area/warrandyte", element: <Warrandyte /> },
      { path: "service-area/warranwood", element: <Warranwood /> },
      { path: "service-area/watsonia", element: <Watsonia /> },
      { path: "service-area/waverley-park", element: <WaverleyPark /> },
      { path: "service-area/wesburn", element: <Wesburn /> },
      { path: "service-area/westall", element: <Westall /> },
      { path: "service-area/wheelers-hill", element: <WheelersHill /> },
      { path: "service-area/wonga-park", element: <WongaPark /> },
      { path: "service-area/woori-yallock", element: <WooriYallock /> },
      { path: "service-area/yarra-glen", element: <YarraGlen /> },
      { path: "service-area/yarra-junction", element: <YarraJunction /> },
      { path: "service-area/yellingbo", element: <Yellingbo /> },
      { path: "service-area/yering", element: <Yering /> },
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
