const express = require("express");
const graphqlHTTP = require('express-graphql');
const Controllers = require("./controllers");
const { buildSchema } = require("graphql");

const projectSchema = buildSchema(`
    type Query {
        game: Game
    }

    type Game {
        quoteOfTheDay: String,
        random: Float!,
        rollDice (numDice: Int!, numSides: Int): [Int!]
    }
`);

const rootSchema = {
    game: {
        quoteOfTheDay: Controllers.quoteOfTheDay,
        random: Controllers.simpleRandom,
        rollDice: Controllers.rollDice 
    }
}

const app = express();
app.use("/graphql", graphqlHTTP({
    schema: projectSchema,
    rootValue: rootSchema,
    graphiql: true
}));

app.listen(
    3000,
    () => console.log("Running a GraphQL API server at localhost:3000/graphql")
)