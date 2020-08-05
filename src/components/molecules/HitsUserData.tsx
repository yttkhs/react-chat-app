import {Hit} from "react-instantsearch-core";
import React from "react";
import {connectHits} from "react-instantsearch-dom";

type Props = {
  hits: Hit[];
}

const CustomHits: React.FC<Props> = ({hits}) => (
  <ul>
    {hits.map((h) => (
      <li key={h.objectID}>
        <div>{h.displayName}</div>
        <div>{h.userId}</div>
      </li>
    ))}
  </ul>
)

export default connectHits(CustomHits)
