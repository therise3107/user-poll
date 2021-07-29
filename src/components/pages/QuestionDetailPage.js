/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

import {
  useChoiceSelectPollsApi,
  useQuestionPollsApi,
} from "hooks/usePollsApi";

const getId = (str) => str.split("/").reverse()[0];
const getPercentage = (total, current) => {
  const safeTotal = total ? total : 1;
  return Math.floor((current / safeTotal) * 100);
};

const QuestionDetailPage = (props) => {
  const id = props.match.params.questionID;
  const [question] = useQuestionPollsApi(id);
  const [data, setVote] = useChoiceSelectPollsApi();
  const [selectedChoice, setSelectedChoice] = useState();

  if (question.isLoading) {
    return "Loading...";
  }

  const choices = question.data.choices || [];
  const toalVotes = (choices || []).reduce((acc, cur) => acc + cur.votes, 0);

  const handleSelectChoice = (id) => {
    if (id === selectedChoice) {
      setSelectedChoice(null);
    }

    setSelectedChoice(id);
  };

  return (
    <div>
      <h1>Question detail</h1>
      <h2>Question: {question.data.question}</h2>
      <table>
        <caption>{}</caption>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Votes</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {choices.map((choice) => {
            const id = getId(choice.url);
            return (
              <tr
                key={id}
                css={css`
                  ${id === selectedChoice ? "background: #eee" : ""};
                `}
              >
                <td onClick={() => handleSelectChoice(id)}>
                  <input
                    type="checkbox"
                    checked={selectedChoice === id}
                    value={selectedChoice === id}
                    onChange={() => handleSelectChoice(id)}
                  ></input>
                </td>
                <td>{choice.choice}</td>
                <td>{choice.votes}</td>
                <td>{getPercentage(toalVotes, choice.votes)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        disabled={selectedChoice === undefined}
        onClick={() => setVote(id, selectedChoice)}
      >
        Vote!
      </button>
    </div>
  );
};

export default QuestionDetailPage;
