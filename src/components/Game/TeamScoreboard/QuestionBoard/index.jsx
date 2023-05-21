import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getQuestionsCount } from "../../../../store/slices/general/selectors";
import generalSlice from "../../../../store/slices/general";

const QuestionBoard = () => {
  const dispatch = useDispatch();
  const questionsCount = useSelector(getQuestionsCount);

  const handleQuestionCountChange = useCallback(e => {
    const { value } = e.target;
    const numericValue = Number(value.replace(/\D/, ''));

    dispatch(generalSlice.actions.setQuestionsCount(numericValue));
  }, [dispatch]);

  return (
    <div>
      <span>Questions</span>
      <input
        value={questionsCount}
        onChange={handleQuestionCountChange}
      />
    </div>
  )
};

export default QuestionBoard;
