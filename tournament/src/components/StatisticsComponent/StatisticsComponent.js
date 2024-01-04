import { React, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import { ReactDOM } from "react-dom";

const getRating = async () => {
  try {
    const response = await fetch("/leaderboards");

    if (response.status !== 200) {
      throw new Error("ERROR: ", response.status);
    }
    return response.json();
  } catch (error) {
    console.log(":: error on request");
    return [];
  }
};

export const RatingComponent = ({}) => {
  const { t } = useTranslation;

  const [data, setData] = useState([]);

  useEffect(async () => {
    const rating = await getRating();

    setData(rating);
  }, []);

  return (
    <Container className="d-flex justify-content-center">
      <ul>
        {data.map((user, id) => (
          <li key={id}>
            <p>{user.name}</p>
            <p>{user.score}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};
