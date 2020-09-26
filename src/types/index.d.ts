import firebase from '../lib/firebase';

export interface _UserData {
  uid: string;
}

export interface UserDataProperties {
  userId: string;
  displayName: string;
  email: string;
  biography: string;
  friend: UserDataFriend;
}

export interface UserDataFriend {
  [key: string]: UserDataFriendProperties;
}

export interface UserDataFriendProperties {
  roomId: string;
  userId: string;
  displayName: string;
  biography: string;
  lastChatLog?: ChatDataLogProperties;
}

export interface ChatDataProperties {
  authors: ChatDataAuthorsProperties;
  log?: ChatDataLog;
}

export interface ChatDataAuthorsProperties {
  firstAuthor: string;
  secondAuthor: string;
}

export interface ChatDataLog {
  [key: string]: ChatDataLogProperties;
}

export interface ChatDataLogProperties {
  timestamp: number;
  text: string;
  author: string;
}

export interface RootState {
  userData: UserDataProperties;
}

export type UserDataActionType = 'ADD::USER_DATA' | 'RESET::USER_DATA';

export interface UserDataAction {
  type: UserDataActionType;
  payload?: Partial<UserDataProperties>;
}

export interface SidebarPanelComponent {
  value: number;
  index: number;
}

/**
 * State Auth
 *
 * 認証状態の型
 */
type StateAuth = firebase.User | null | undefined;
