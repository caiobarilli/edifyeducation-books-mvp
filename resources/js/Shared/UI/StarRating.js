import React from 'react';
import Icon from '@/Shared/UI/Icon';

export default ({ rating, numberOfStars }) => {
  // Icons
  const vote = <Icon name="vote" />;
  const vote_null = <Icon name="vote_null" />;

  // List of stars
  let listOfStars = [];
  numberOfStars <= 1 ? (numberOfStars = 0) : numberOfStars--;
  for (let i = numberOfStars; i >= 0; i--) {
    rating >= 1 ? listOfStars.push(vote) : listOfStars.push(vote_null);
    rating--;
  }

  return (
    <ul className="flex my-2">
      {listOfStars.map((star, i) => (
        <li className="inline mr-1" key={i}>
          {star}
        </li>
      ))}
    </ul>
  );
};
