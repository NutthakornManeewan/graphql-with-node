const quoteOfTheDay = () => {
    const chance = (Math.random() < 0.5) ? ("Good luck"):("Back luck");
    return chance;
}

module.exports = { quoteOfTheDay };
