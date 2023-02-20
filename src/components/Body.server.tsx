import moment from 'moment';
import { UserData } from '../service/getGitUser';
import Links from './Links.serve';

export default function Body({ userData }: { userData: UserData }) {
  const links = (({ company, location, twitter_username, blog }: UserData) => ({
    company,
    location,
    twitter_username,
    blog,
  }))(userData);

  return (
    <div className="mt-4 flex flex-col items-start rounded-2xl bg-white px-6 pt-8 pb-[42px] shadow-custom dark:bg-neutral-dark-blue-700">
      <div className="flex gap-5">
        <img src="./Oval.png" alt="" width={70} height={70} />
        <div className="flex flex-col">
          <h3 className="font-bold text-secondary-dark-blue dark:text-white">
            {userData.name}
          </h3>
          <h4 className="text-primary-blue">{`@${userData.login}`}</h4>
          <h4 className="text-secondary-grey dark:text-white">
            {`Joined ${moment(userData.created_at).format('D MMM YYYY')}`}
          </h4>
        </div>
      </div>
      <h4 className="mt-[33px] leading-6 text-secondary-blue dark:text-white">
        {userData.bio || 'This profile has no bio'}
      </h4>
      <div className="mt-[23px] flex w-full justify-around rounded-[10px] bg-neutral-gray px-[14px] py-[18px] dark:bg-neutral-dark-blue-900">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue dark:text-white">
            Repos
          </span>
          <h3 className="font-bold dark:text-white">{userData.public_repos}</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue dark:text-white">
            Followers
          </span>
          <h3 className="font-bold dark:text-white">{userData.followers}</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue dark:text-white">
            Following
          </span>
          <h3 className="font-bold dark:text-white">{userData.following}</h3>
        </div>
      </div>
      <div className="mt-[24px] flex flex-col gap-4">
        <Links links={links} />
      </div>
    </div>
  );
}
