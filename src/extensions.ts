declare global {
    interface Array<T> {
        shuffle(): this;
    }
}

Array.prototype.shuffle = function () {
    let shuffledArray = [...this]
    // Fisher-Yates Shuffle method [https://en.wikipedia.org/wiki/Fisher–Yates_shuffle]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
};

export {};