import React, { useState, createRef, useRef } from 'react';
import Icon from '@/Shared/UI/Icon';

export default ({ numberOfStars, onVoteSubmit }) => {
  const vote = <Icon name="vote" />;
  const vote_null = <Icon name="vote_null" />;

  const [starsRatingList, setStarsRatingList] = useState(emptyList());

  const liRef = useRef(starsRatingList.map(() => createRef()));

  function emptyList() {
    let listOfStars = [];

    numberOfStars <= 1 ? (numberOfStars = 0) : numberOfStars--;
    for (let i = numberOfStars; i >= 0; i--) {
      listOfStars.push(vote_null);
    }

    return listOfStars;
  }

  const setVote = param => {
    let value = liRef.current[param].current.value;

    let rating = value++;
    let listOfStars = [];

    numberOfStars <= 1 ? (numberOfStars = 0) : numberOfStars;

    for (let i = numberOfStars; i >= 0; i--) {
      rating >= 0 ? listOfStars.push(vote) : listOfStars.push(vote_null);
      rating--;
    }

    setStarsRatingList(listOfStars);

    onVoteSubmit(value);
  };

  return (
    <ul className="flex my-2">
      {starsRatingList.map((star, i) => (
        <li
          key={i}
          className="cursor-pointer inline mr-1"
          ref={liRef.current[i]}
          onClick={() => setVote(i)}
          value={i}
        >
          {star}
        </li>
      ))}
    </ul>
  );
};
