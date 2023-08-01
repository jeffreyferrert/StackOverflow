import csrfFetch from "./csrf.js";

export const RECEIVE_QUESTIONS = "questions/RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "questions/RECEIVE_QUESTION";
export const REMOVE_QUESTION = "questions/REMOVE_QUESTION";

export const VOTE_QUESTION_UP = "questions/VOTE_QUESTION_UP";
export const VOTE_QUESTION_DOWN = "questions/VOTE_QUESTION_DOWN";


export const voteQuestionUp = (questionId) => ({
  type: VOTE_QUESTION_UP,
  questionId,
});

export const voteQuestionDown = (questionId) => ({
  type: VOTE_QUESTION_DOWN,
  questionId,
});

export const getQuestions = (state) => {
  if (!state.questions) {
    return [];
  } else {
    return Object.values(state.questions);
  }
};

export const getQuestion = (questionId) => {
  return (state) => {
    if (state.questions && state.questions[questionId]) {
      return state.questions[questionId];
    } else {
      return null;
    }
  };
};

export const fetchQuestions = () => async (dispatch) => {
  const response = await fetch("/api/questions");
  const data = await response.json();

  dispatch({
    type: RECEIVE_QUESTIONS,
    questions: data.questions
  });
};

export const fetchQuestion = (questionId) => async (dispatch) => {
  const response = await fetch(`/api/questions/${questionId}`);
  const data = await response.json();

  dispatch({
    type: RECEIVE_QUESTION,
    question: data,
  });
};

export const createQuestion = (question) => async (dispatch) => {
  const { title, body, user_id } = question;

  const response = await csrfFetch("/api/questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      body,
      user_id,
    }),
  });
  const data = await response.json();

  dispatch({
    type: RECEIVE_QUESTION,
    question: data,
  });

  return data;
};

export const updateQuestion = (question) => async (dispatch) => {
  const { id, title, body, user_id, votesCounts } = question;
const questionObj = {question: {id, title, body,  user_id,  votesCounts}}

  const response = await csrfFetch(`/api/questions/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(questionObj),
  });
  const data = await response.json();
  dispatch({
    type: RECEIVE_QUESTION,
    question: data,
  });
};

export const deleteQuestion = (questionId) => async (dispatch) => {
  const response = await csrfFetch(`/api/questions/${questionId}`, {
    method: "DELETE",
  });
  dispatch({
    type: REMOVE_QUESTION,
    questionId,
  });
};


const questionsReducer = (state = {}, action) => {
  let newState = { ...state };

  switch (action.type) {
    case RECEIVE_QUESTION:
      newState = { ...newState, ...action.question.question };
      return newState;
    case RECEIVE_QUESTIONS:
      newState = { ...newState, ...action.questions };
      return newState;
    case REMOVE_QUESTION:
      delete newState[action.questionId];
      return newState;
    case VOTE_QUESTION_UP:
      newState[action.questionId].votesCounts += 1;
      return newState;
    case VOTE_QUESTION_DOWN:
      newState[action.questionId].votesCounts -= 1;
      return newState;
    default:
      return state;
  }
};

export default questionsReducer;
