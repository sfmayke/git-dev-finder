import searchIcon from '../assets/icon-search.svg'

export default function Search() {
  return (
    <div className="mt-8 flex items-center rounded-2xl bg-white p-[7px] shadow-custom">
      <img src={searchIcon} alt="search-icon" className="pl-2" />
      <input
        type="text"
        className="w-full px-[7px] placeholder:text-xs placeholder:leading-6 placeholder:text-secondary-blue"
        placeholder="Search Github username..."
      />
      <button
        type="button"
        className="rounded-xl bg-primary-blue px-4 py-3 font-bold text-white"
      >
        search
      </button>
    </div>
  )
}
