import React from "react";
import {SearchBoxProvided} from "react-instantsearch-core";
import {connectSearchBox} from 'react-instantsearch-dom';

const CustomSearchBox: React.FC<SearchBoxProvided> = ({currentRefinement, refine}) => (
  <form noValidate action="" role="search">
    <input
      type="search"
      value={currentRefinement}
      onChange={e => refine(e.currentTarget.value)}
    />
  </form>
)

export default connectSearchBox(CustomSearchBox)
