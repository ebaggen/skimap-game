import resorts, { nullResort } from './resorts';

// Fisher-Yates Shuffle method [https://en.wikipedia.org/wiki/Fisher–Yates_shuffle]
const shuffle = (array) => {
    let shuffledArray = [...array];

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
};

const sleep = (ms) => {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

export { resorts, nullResort, sleep };

// Generate a shuffled n-array of resorts
export const generateMapIndicies = () => {
    let indicies = [...Array(resorts.length).keys()];
    return shuffle(indicies);
};