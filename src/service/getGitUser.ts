import axios from 'axios';

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

const getGitUser = async (name: string) =>
  (
    await axios.get(`https://api.github.com/users/${name}`, {
      headers: {
        Accept: 'application/vnd.github+json',
      },
    })
  ).data;

export default getGitUser;
