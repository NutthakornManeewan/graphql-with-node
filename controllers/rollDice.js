const rollDice = ({ numDice, numSides }) => {
    let output = [];
    for (let i = 0; i < numDice; i++) {
        output.push(1 + Math.floor(Math.random() * numSides));
    }
    return output;
}

module.exports = { rollDice };

