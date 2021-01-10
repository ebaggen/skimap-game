// Fisher-Yates Shuffle method [https://en.wikipedia.org/wiki/Fisher–Yates_shuffle]
const shuffle = (array) => {
    let shuffledArray = [...array];

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
};

export const resorts = [
    {
        name: "Crystal",
        img: "https://cdn.shopify.com/s/files/1/0102/5871/0587/products/141crystal_thumbnail_1080x.jpg?v=1566769751"
    },
    {
        name: "Sunday River",
        img: "https://cdn.shopify.com/s/files/1/0102/5871/0587/products/Sunday_River_2002-optimized_1080x.jpg?v=1563127891"
    },
    {
        name: "Okemo",
        img: "https://cdn.shopify.com/s/files/1/0102/5871/0587/products/Okemo-optimized.jpg?v=1563750368"
    }
];

// Generate a shuffled n-array of resorts
export const generateMapIndicies = () => {
    let indicies = [...Array(resorts.length).keys()];
    return shuffle(indicies);
};