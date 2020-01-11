let flowers = [];

export const getFlowers = () => {
    return fetch("http://localhost:3000/flowers")
    .then(res => {
        return res.json();
    })
    .then(parsedFlowers => {
        return (flowers = parsedFlowers);
    });
};

export const useFlowers = () => {
    return flowers.slice();
};