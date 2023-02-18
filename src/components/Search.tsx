import searchIcon from '../assets/icon-search.svg';

export default function Search() {
  return (
    <div className="mt-8 flex items-center rounded-2xl bg-white p-[7px] shadow-custom dark:bg-neutral-dark-blue-700">
      <img src={searchIcon} alt="search-icon" className="pl-2" />
      <input
        type="text"
        className="w-full px-[7px] placeholder:text-xs placeholder:leading-6 placeholder:text-secondary-blue dark:bg-transparent dark:placeholder:text-white"
        placeholder="Search Github username..."
      />
      <button
        type="button"
        className="rounded-xl bg-primary-blue px-4 py-3 font-bold capitalize text-white"
      >
        search
      </button>
    </div>
  );
}
