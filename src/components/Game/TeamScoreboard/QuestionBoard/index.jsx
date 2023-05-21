import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getQuestionsCount } from "../../../../store/slices/general/selectors";
import generalSlice from "../../../../store/slices/general";

const QuestionBoard = () => {
  const dispatch = useDispatch();
  const questionsCount = useSelector(getQuestionsCount);

  const handleQuestionCountChange = useCallback(e => {
    dispatch(generalSlice.actions.setQuestionsCount(e.target.value));
  }, [dispatch]);

  return (
    <div>
      <span>Questions</span>
      <input
        type="number"
        value={questionsCount}
        onChange={handleQuestionCountChange}
      />
    </div>
  )
};

export default QuestionBoard;
