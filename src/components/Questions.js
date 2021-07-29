/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import { useQuestionsPollsApi } from "hooks/usePollsApi";
import { formatDate } from "utils/dateHelper";
// import Question from "component/Question";

const Questions = (props) => {
  const [questions] = useQuestionsPollsApi();

  if (questions.isLoading) {
    return "Loading...";
  }

  return (
    <div>
      <h1>Questions</h1>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          width: 100%;
          gap: 2rem;
        `}
      >
        {questions.data.map((question) => (
          <Link
            to={question.url}
            key={question.url}
            css={css`
              max-width: 300px;
              padding: 10px;
            `}
          >
            <h2>{question.question}</h2>
            <p>{formatDate(question.published_at)}</p>
            <p>{question.choices.length}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Questions;
