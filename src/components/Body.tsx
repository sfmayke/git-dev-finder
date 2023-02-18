import IconLocation from '../assets/icon-location.svg';
import IconWebsite from '../assets/icon-website.svg';
import IconTwitter from '../assets/icon-twitter.svg';
import IconCompany from '../assets/icon-company.svg';

export default function Body() {
  return (
    <div className="mt-4 flex flex-col items-start rounded-2xl bg-white px-6 pt-8 pb-[42px] shadow-custom">
      <div className="flex gap-5">
        <img src="./Oval.png" alt="" width={70} height={70} />
        <div className="flex flex-col">
          <h3 className="font-bold text-secondary-dark-blue">The Octocat</h3>
          <h4 className="text-primary-blue">@octocat</h4>
          <h4 className="text-secondary-grey">Joined 25 Jan 2011</h4>
        </div>
      </div>
      <h4 className="mt-[33px] leading-6 text-secondary-blue">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </h4>
      <div className="mt-[23px] flex w-full justify-around rounded-[10px] bg-neutral-gray px-[14px] py-[18px]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue">
            Repos
          </span>
          <h3 className="font-bold">8</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue">
            Followers
          </span>
          <h3 className="font-bold">1234</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] leading-4 text-secondary-blue">
            Following
          </span>
          <h3 className="font-bold">3</h3>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-[24px]">
        <div className="flex gap-[13px]">
          <img src={IconLocation} alt="icon-location" />
          <h4 className="text-secondary-blue">San Francisco</h4>
        </div>
        <div className="flex gap-[13px]">
          <img src={IconWebsite} alt="icon-website" />
          <h4 className="text-secondary-blue">https://github.blog</h4>
        </div>
        <div className="flex gap-[13px]">
          <img src={IconTwitter} alt="icon-twitter" />
          <h4 className="text-secondary-blue">Not Available</h4>
        </div>
        <div className="flex gap-[13px]">
          <img src={IconCompany} alt="icon-company" />
          <h4 className="text-secondary-blue">@github</h4>
        </div>
      </div>
    </div>
  );
}
