import { useState, useEffect } from "react";

const API_URL = "https://polls.apiblueprint.org";

export const useQuestionsPollsApi = () => {
  const [data, setState] = useState([]);
  const [isLoading, setIsLoadingState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingState(true);
      const response = await fetch(API_URL + "/questions?page=1");
      const results = await response.json();

      setState(results);
      setIsLoadingState(false);
    };

    fetchData();
  }, []);

  return [{ data, isLoading }, setState];
};

export const useQuestionPollsApi = (id) => {
  const [data, setState] = useState({ data: {}, isLoading: true });
  const [isLoading, setIsLoadingState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingState(true);
      const response = await fetch(API_URL + `/questions/${id}`);
      const results = await response.json();

      setState(results);
      setIsLoadingState(false);
    };

    fetchData();
  }, [id]);

  return [{ data, isLoading }, setState];
};

export const useChoiceSelectPollsApi = () => {
  const [data, setState] = useState({ data: {}, isLoading: true });
  const [isLoading, setIsLoadingState] = useState(false);
  const [requestParams, setRequestParamsState] = useState({
    choiceId: undefined,
    questionId: undefined,
  });
  const { choiceId, questionId } = requestParams;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingState(true);
      const response = await fetch(
        API_URL + `/questions/${questionId}/choices/${choiceId}`,
        { type: "POST" }
      );
      const results = await response.json();
      console.log(results);
      setState(results);
      setIsLoadingState(false);
    };

    if (questionId && choiceId) {
      fetchData();
    }
  }, [choiceId, questionId]);

  return [{ data, isLoading }, setRequestParamsState];
};
