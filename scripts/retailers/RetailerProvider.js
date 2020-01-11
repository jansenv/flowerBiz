let retailers = [];

export const getRetailers = () => {
    return fetch("http://localhost:3000/retailers")
    .then(res => {
        return res.json();
    })
    .then(parsedRetailers => {
        return (retailers = parsedRetailers);
    });
};

export const useRetailers = () => {
    return retailers.slice();
}