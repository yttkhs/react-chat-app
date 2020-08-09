import {Hit} from "react-instantsearch-core";
import React, {useState, useEffect} from "react";
import {connectHits} from "react-instantsearch-dom";
import firebase from "../../lib/firebase";

type Props = {
  hits: Hit[];
}

const CustomHits: React.FC<Props> = ({hits}) => {
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    // Get currently logged in user
    const currentUser = firebase.auth().currentUser

    // Set uid to "setUser"
    if (currentUser) setUser(currentUser.uid)
  }, [])

  return user ? (
    <ul>
      {hits
        .filter(h => h.objectID !== user) // Exclude my user data
        .map((h) => (
          <li key={h.objectID}>
            <div>{h.displayName}</div>
            <div>{h.userId}</div>
          </li>
        ))}
    </ul>
  ) : null;


}

export default connectHits(CustomHits)
