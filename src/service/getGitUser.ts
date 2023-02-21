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
        Authorization:
          'Bearer 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',
      },
    })
  ).data;

export default getGitUser;
