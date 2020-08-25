import React from 'react';
import {useSelector} from "react-redux";
import {RootState, UserDataProperties} from "../../types";
import {useForm} from "react-hook-form";
import {UserData} from "../../classes/UserData";
import {Link} from "react-router-dom";
import createFriendIdList from "../../modules/createFriendIdList";

type Inputs = {
  displayName: string;
  biography: string;
}

const ProfileEdit: React.FC = () => {
  const userData = useSelector<RootState, UserDataProperties>(({userData}) => userData)

  // Create a friend ID list
  const friendIdList = createFriendIdList(userData.friend)

  // use React Hook Form
  // Library for form validation
  const {register, handleSubmit, errors} = useForm<Inputs>();

  // Required items for displayName
  const displayNameRegister = register({
    required: true,
    minLength: {
      value: 5,
      message: "Please enter at least 5 characters"
    },
    maxLength: {
      value: 30,
      message: "Please enter the text within 30 characters"
    }
  })

  // Required items for biography
  const biographyRegister = register({
    maxLength: {
      value: 200,
      message: "Enter text up to 200 characters"
    }
  })

  const handleEditProfileSubmit = handleSubmit((values: Inputs): void => {
    new UserData(userData.userId).updateUserData({
      displayName: values.displayName,
      biography: values.biography
    })

    friendIdList.forEach(id => {
      new UserData(id).updateUserData({
        [`friend.${userData.userId}.displayName`]: values.displayName,
        [`friend.${userData.userId}.biography`]: values.biography
      })
    })
  })

  return (
    <div>
      <form onSubmit={handleEditProfileSubmit}>
        <label>
          <span>名前</span>
          <input
            type="text"
            name="displayName"
            defaultValue={userData.displayName}
            ref={displayNameRegister}
          />
          {errors.displayName && <p>{errors.displayName?.message}</p>}
        </label>
        <label>
          <span>紹介文</span>
          <textarea
            name="biography"
            defaultValue={userData.biography}
            ref={biographyRegister}
          />
        </label>
        {errors.biography && <p>{errors.biography?.message}</p>}
        <button type="submit">EDIT</button>
      </form>
      <Link to="/profile">Back Profile</Link>
    </div>
  );
};

export default ProfileEdit;
