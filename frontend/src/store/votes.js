import csrfFetch from "./csrf.js";
import { RECEIVE_QUESTION } from "./questions.js";
export const VOTE_QUESTION = "questions/VOTE_QUESTION";

export const voteQuestion = (id) => async (dispatch) => {
  const response = await csrfFetch("/api/votes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question_id: id
    }),
  });
  const data = await response.json();
  dispatch({
    type: RECEIVE_QUESTION, //RECEIVE VOTE?
    question: data,
  });
};

export const unVoteQuestion = (id) => async (dispatch) => {
  return;
};

// const votesReducer = (state = {}, action) => {
//   let newState = { ...state };

//   switch (action.type) {
//     case VOTE_QUESTION:
//       newState[action.question.id] = action.question;
//       return newState;
//     case RECEIVE_QUESTION:
//         newState = { ...newState, ...action.votes };
//         return newState;
//     default:
//       return state;
//   }
// };

// export default votesReducer;
