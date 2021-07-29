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
