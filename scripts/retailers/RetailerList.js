import { useRetailers } from "./RetailerProvider.js"
import Retailer from "./Retailer.js"
import { useDistributors } from "../distributors/DistributorProvider.js"

const contentTarget = document.querySelector(".retailers")

export const RetailerList = () => {
    const retailers = useRetailers()
    const distributors = useDistributors()

    const render = () => {
        contentTarget.innerHTML = retailers.map(retailer => {
            const distributor = distributors.find(distributor => {
                return distributor.id === retailer.distributorId
            })
            const html = Retailer(retailer, distributor);
            return html
        }
        ).join("")
    } 

    render()
    
}