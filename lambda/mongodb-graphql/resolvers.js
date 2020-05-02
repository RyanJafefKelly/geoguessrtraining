require('encoding');

module.exports = db => ({
  Query: {
    hello: () => {
      return "Hello, world!";
    }
  }
    
    // getQuiz: () => {},
    // getQuestion: () => {}
  //   getQuiz: async (_,{id}) => {
  //       var result = await Quiz.findById(id);
  //       return result;
  //   },
  //   getQuestion: async (_,{id}) => {
  //     var result = await Question.findById(id);
  //     return result;
  // }
  , Mutation: {
    addQuiz: () => {},
    addQuestion: () => {}
  }
});
