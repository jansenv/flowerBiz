const Retailer = (retailer, distributor) => {
    return `
        <h2>${retailer.name}</h2>
        Flower stock purchased from ${distributor.name}
    `
}

export default Retailer