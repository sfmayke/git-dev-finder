import { UserData } from '../service/getGitUser';
import {
  CompanyIcon,
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
} from './Icons.server';

const iconDic = {
  location: (className: string) => <LocationIcon className={className} />,
  blog: (className: string) => <WebsiteIcon className={className} />,
  twitter_username: (className: string) => (
    <TwitterIcon className={className} />
  ),
  company: (className: string) => <CompanyIcon className={className} />,
};

interface Props {
  links: Pick<UserData, 'company' | 'blog' | 'location' | 'twitter_username'>;
}

export default function Links({ links }: Props) {
  const genIcon = (className: string, iconName: string) => {
    const iconFn = iconDic[iconName as keyof typeof iconDic];
    return iconFn(className);
  };

  return (
    <>
      {Object.entries(links).map(([key, value]) => (
        <div key={value} className="flex gap-[13px]">
          {genIcon(
            value
              ? 'fill-secondary-blue dark:fill-white'
              : 'fill-secondary-blue/50 dark:fill-white/50',
            key
          )}
          <h4
            className={`${
              value
                ? 'overflow-clip text-ellipsis text-secondary-blue dark:text-white tablet:text-base'
                : 'overflow-clip text-ellipsis text-secondary-blue/50 dark:text-white/50 tablet:text-base'
            } `}
          >
            {value || 'Not Available'}
          </h4>
        </div>
      ))}
    </>
  );
}
