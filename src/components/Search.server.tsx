import { useRef } from 'react';
import searchIcon from '../assets/icon-search.svg';

interface Props {
  changeUserName: (name: string) => void;
}

export default function Search({ changeUserName }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="mt-8 flex items-center rounded-2xl bg-white p-[7px] shadow-custom dark:bg-neutral-dark-blue-700">
      <img src={searchIcon} alt="search-icon" className="pl-2" />
      <input
        ref={inputRef}
        type="text"
        className="w-full px-[7px] placeholder:text-xs placeholder:leading-6 placeholder:text-secondary-blue dark:bg-transparent dark:placeholder:text-white"
        placeholder="Search Github username..."
        defaultValue="asdas"
      />
      <button
        type="button"
        className="rounded-xl bg-primary-blue px-4 py-3 font-bold capitalize text-white"
        onClick={() => changeUserName(inputRef.current?.value as string)}
      >
        search
      </button>
    </div>
  );
}
