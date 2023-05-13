import React from "react";

interface UserType {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

type UserProps = {
  user: UserType;
  index: number
};

import "./style.scss";

export default function index({ user, index }: UserProps) {
  return (
    <div className="users__card">
      <img src={user.avatar_url} alt="" />
      <p>{index} - {user.login}</p>
    </div>
  );
}
