import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
import NearbyJobs from "./home/nearby/NearbyJobs";
import PopularJobs from "./home/popular/PopularJobs";

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";
import PopularJobCard from "./common/cards/popular/PopularJobCard";

export {
  ScreenHeaderBtn,
  Welcome,
  NearbyJobs,
  NearbyJobCard,
  PopularJobs,
  PopularJobCard,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
};
