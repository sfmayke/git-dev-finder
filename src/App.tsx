import Header from './components/Header'
import Search from './components/Search'

function App() {
  return (
    <div className="flex flex-col px-6 pt-[1.9375rem]">
      <Header />
      <Search />
      <div className="mt-4 bg-white">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  )
}

export default App
