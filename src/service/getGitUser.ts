interface IObjectKeys {
  [key: string]: string | undefined | number | Date;
}

export interface UserData extends IObjectKeys {
  public_repos?: number;
  twitter_username?: string;
  followers?: number;
  following?: number;
  login?: string;
  bio?: string;
  avatar_url?: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  created_at?: Date;
}

const getGitUser = (name: string): Promise<UserData> =>
  fetch(`https://api.github.com/users/${name}`).then((res) => res.json());

export default getGitUser;
