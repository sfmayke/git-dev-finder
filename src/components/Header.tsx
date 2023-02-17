import moonIcon from '../assets/icon-moon.svg'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[#222731]">devfinder</h1>
      <div className="flex gap-4">
        <h4 className="font-bold uppercase tracking-[2.5px] text-secondary-blue">
          dark
        </h4>
        <img src={moonIcon} alt="moon-icon" />
      </div>
    </div>
  )
}
