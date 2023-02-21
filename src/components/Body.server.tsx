import moment from 'moment';
import { UserData } from '../service/getGitUser';
import Links from './Links.serve';

export default function Body({ userData }: { userData: UserData }) {
  const links = (({ company, location, twitter_username, blog }: UserData) => ({
    location,
    blog,
    twitter_username,
    company,
  }))(userData);

  return (
    <div className="mt-4 flex flex-col items-start rounded-2xl bg-white px-6 pt-8 pb-[42px] shadow-custom dark:bg-neutral-dark-blue-700 tablet:p-10 desktop:p-[48px]">
      <div className="flex w-full items-center gap-5 tablet:gap-10 desktop:items-start">
        <img
          src={userData.avatar_url}
          alt="user-avatar"
          className="w-[70px] rounded-full tablet:w-[117px]"
        />
        <div className="flex w-full flex-col tablet:gap-1 desktop:flex-row desktop:justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-secondary-dark-blue dark:text-white tablet:text-[1.625rem]">
              {userData.name}
            </h3>
            <h4 className="text-primary-blue tablet:text-base">{`@${userData.login}`}</h4>
          </div>
          <h4 className="text-secondary-grey dark:text-white tablet:text-[0.9rem] tablet:leading-[1.375rem]">
            {`Joined ${moment(userData.created_at).format('D MMM YYYY')}`}
          </h4>
        </div>
      </div>
      <h4 className="mt-[33px] w-[480px] leading-6 text-secondary-blue dark:text-white tablet:text-[0.9375em] tablet:leading-[1.5625rem] desktop:m-0 desktop:-mt-2 desktop:max-w-[480px] desktop:self-end">
        {userData.bio || 'This profile has no bio'}
      </h4>
      <div className="mt-[23px] flex w-full justify-around rounded-[10px] bg-neutral-gray px-[14px] py-[18px] dark:bg-neutral-dark-blue-900 tablet:mt-[32px] desktop:max-w-[480px] desktop:self-end">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue dark:text-white">
            Repos
          </span>
          <h3 className="font-bold dark:text-white tablet:text-[1.375rem]">
            {userData.public_repos}
          </h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue dark:text-white">
            Followers
          </span>
          <h3 className="font-bold dark:text-white tablet:text-[1.375rem]">
            {userData.followers}
          </h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue dark:text-white">
            Following
          </span>
          <h3 className="font-bold dark:text-white tablet:text-[1.375rem]">
            {userData.following}
          </h3>
        </div>
      </div>
      <div className="mt-[24px] flex flex-col gap-4 tablet:mt-[30px] tablet:grid tablet:grid-cols-2 tablet:gap-x-[3.75rem] desktop:w-[480px] desktop:self-end">
        <Links links={links} />
      </div>
    </div>
  );
}
