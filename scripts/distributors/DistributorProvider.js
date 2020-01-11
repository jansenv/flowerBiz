let distributors = [];

export const getDistributors = () => {
    return fetch("http://localhost:3000/distributors")
    .then(res => {
        return res.json()
    })
    .then(parsedDistributors => {
        return (distributors = parsedDistributors)
    })
}

export const useDistributors = () => {
    return distributors.slice()
}