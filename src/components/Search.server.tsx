import { useRef } from 'react';
import searchIcon from '../assets/icon-search.svg';

interface Props {
  changeUserName: (name: string) => void;
  error: boolean;
}

export default function Search({ changeUserName, error }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative mt-8 flex items-center justify-between rounded-2xl bg-white p-[7px] text-xs leading-6 shadow-custom dark:bg-neutral-dark-blue-700 tablet:p-[10px]">
      <div className="flex w-full">
        <img src={searchIcon} alt="search-icon" className="pl-2" />
        <input
          ref={inputRef}
          type="text"
          className="w-full px-[7px] placeholder:text-secondary-blue focus:outline-none dark:bg-transparent dark:text-white dark:placeholder:text-white tablet:px-[14px] tablet:text-lg"
          placeholder="Search Github username..."
        />
      </div>
      {error && (
        <span className="absolute right-24 text-xs leading-6 text-error tablet:right-28 tablet:text-lg">
          No results
        </span>
      )}
      <button
        type="button"
        className="z-10 rounded-xl bg-primary-blue px-4 py-3 text-[14px] font-bold capitalize leading-5 text-white tablet:text-base"
        onClick={() => changeUserName(inputRef.current?.value as string)}
      >
        search
      </button>
    </div>
  );
}
