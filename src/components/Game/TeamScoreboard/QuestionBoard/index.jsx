import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getQuestionsCount } from "../../../../store/slices/general/selectors";
import generalSlice from "../../../../store/slices/general";
import useStyles from "./styles";

const QuestionBoard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const questionsCount = useSelector(getQuestionsCount);

  const handleQuestionCountChange = useCallback(e => {
    const { value } = e.target;
    const numericValue = Number(value.replace(/\D/, ''));

    dispatch(generalSlice.actions.setQuestionsCount(numericValue));
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <input
        size={2}
        value={questionsCount}
        className={classes.questionInput}
        onChange={handleQuestionCountChange}
      />
      <span>Questions</span>
    </div>
  )
};

export default QuestionBoard;
