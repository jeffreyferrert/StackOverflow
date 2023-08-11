import csrfFetch from "./csrf.js";
import { RECEIVE_QUESTION } from "./questions.js";

export const RECEIVE_ANSWERS = "answers/RECEIVE_ANSWERS";
export const RECEIVE_ANSWER = "answers/RECEIVE_ANSWER";
export const REMOVE_ANSWER = "answers/REMOVE_ANSWER";

export const getAnswers = (state) => {
  if (!state.answers) {
    return [];
  } else {
    return Object.values(state.answers);
  }
};

export const getAnswer = (answerId) => {
  return (state) => {
    if (state.answers && state.answers[answerId]) {
      return state.answers[answerId];
    } else {
      return null;
    }
  };
};

export const fetchAnswers = () => async (dispatch) => {
  const response = await fetch("/api/answers");
  const data = await response.json();
  dispatch({
    type: RECEIVE_ANSWERS,
    answers: data,
  });
};

export const fetchAnswer = (answerId) => async (dispatch) => {
  const response = await fetch(`/api/answers/${answerId}`);
  const data = await response.json();

  dispatch({
    type: RECEIVE_ANSWER,
    answer: data,
  });
};

export const createAnswer = (answer) => async (dispatch) => {
  const { body, user_id, question_id } = answer;

  const response = await csrfFetch("/api/answers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      body,
      user_id,
      question_id
     }),
  });
  const data = await response.json();

  dispatch({
    type: RECEIVE_ANSWER,
    answer: data,
  });

  return data;
};

export const updateAnswer = (answer) => async (dispatch) => {
  const { id, body, user_id, question_id, votesCounts } = answer;
  const answerObj = {answer: { body, user_id, question_id, votesCounts }}

  const response = await csrfFetch(`/api/answers/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(answerObj),
  });
  const data = await response.json();
  dispatch({
    type: RECEIVE_ANSWER,
    answer: data,
  });
};

export const deleteAnswer = (answerId) => async (dispatch) => {
  const response = await csrfFetch(`/api/answers/${answerId}`, {
    method: "DELETE",
  });
  dispatch({
    type: REMOVE_ANSWER,
    answerId,
  });
};

const answersReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case RECEIVE_QUESTION:
      newState = { ...newState, ...action.question.answers };
      return newState; 
    case RECEIVE_ANSWER:
      newState = { ...newState, [action.answer.id]: action.answer };
      return newState;
    case RECEIVE_ANSWERS:
      newState = { ...newState, ...action.answers };
      return newState;
    case REMOVE_ANSWER:
      delete newState[action.answerId];
      return newState;
    default:
      return state;
  }
};

export default answersReducer;
