import { getFlowers } from "./flowers/FlowerProvider.js";
import { FlowerList } from "./flowers/FlowerList.js";
import { getRetailers } from "./retailers/RetailerProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";
import { getDistributors } from "./distributors/DistributorProvider.js";

getFlowers()
    .then(getRetailers)
    .then(getDistributors)
    .then(FlowerList)
    .then(RetailerList)