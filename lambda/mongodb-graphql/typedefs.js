const { gql } = require("apollo-server-lambda");
require('encoding');

module.exports = gql`
  type Query {
    getQuiz(id: ID!): Quiz
    getQuestion(id: ID!): Question
  }
  type Quiz {
    id: ID!
    name: String
    category: String
    questions: [Question]
    completed: Boolean
    score: String
  }

  type Question {
    id: ID!
    questionText: String
    imageUrl: String
    correctAnswer: String
    falseAnswer: String
    falseAnswer2: String
    falseAnswer3: String
  }
`;
