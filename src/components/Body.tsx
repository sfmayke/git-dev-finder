import { CompanyIcon, TwitterIcon, LocationIcon, WebsiteIcon } from './Icons';

export default function Body() {
  return (
    <div className="mt-4 flex flex-col items-start rounded-2xl bg-white px-6 pt-8 pb-[42px] shadow-custom dark:bg-neutral-dark-blue-700">
      <div className="flex gap-5">
        <img src="./Oval.png" alt="" width={70} height={70} />
        <div className="flex flex-col">
          <h3 className="font-bold text-secondary-dark-blue dark:text-white">
            The Octocat
          </h3>
          <h4 className="text-primary-blue">@octocat</h4>
          <h4 className="text-secondary-grey dark:text-white">
            Joined 25 Jan 2011
          </h4>
        </div>
      </div>
      <h4 className="mt-[33px] leading-6 text-secondary-blue dark:text-white">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </h4>
      <div className="mt-[23px] flex w-full justify-around rounded-[10px] bg-neutral-gray px-[14px] py-[18px] dark:bg-neutral-dark-blue-900">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue dark:text-white">
            Repos
          </span>
          <h3 className="font-bold dark:text-white">8</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue dark:text-white">
            Followers
          </span>
          <h3 className="font-bold dark:text-white">1234</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue dark:text-white">
            Following
          </span>
          <h3 className="font-bold dark:text-white">3</h3>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-[24px]">
        <div className="flex gap-[13px]">
          <LocationIcon className="dark:fill-white" />
          <h4 className="text-secondary-blue dark:text-white">San Francisco</h4>
        </div>
        <div className="flex gap-[13px]">
          <WebsiteIcon className="dark:fill-white" />
          <h4 className="text-secondary-blue dark:text-white">
            https://github.blog
          </h4>
        </div>
        <div className="flex gap-[13px]">
          <TwitterIcon className="dark:fill-white" />
          {/* <img src={IconTwitter} alt="icon-twitter" /> */}
          <h4 className="text-secondary-blue dark:text-white">Not Available</h4>
        </div>
        <div className="flex gap-[13px]">
          <CompanyIcon className="dark:fill-white" />
          {/* <img src={IconCompany} className="fill-white" alt="icon-company" /> */}
          <h4 className="text-secondary-blue dark:text-white">@github</h4>
        </div>
      </div>
    </div>
  );
}
