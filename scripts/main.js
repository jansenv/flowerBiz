import { getFlowers } from "./flowers/FlowerProvider.js";
import { FlowerList } from "./flowers/FlowerList.js";
import { getRetailers } from "./retailers/RetailerProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";

getFlowers()
    .then(getRetailers)
    .then(FlowerList)
    .then(RetailerList)