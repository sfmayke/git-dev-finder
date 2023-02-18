import Body from './components/Body';
import Header from './components/Header';
import Search from './components/Search';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col px-6 pt-[1.9375rem]">
        <Header />
        <Search />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
