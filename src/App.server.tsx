import { QueryClient, QueryClientProvider } from 'react-query';
import Body from './components/Body.server';
import Header from './components/Header.server';
import Search from './components/Search.server';
import ThemeProvider from './context/ThemeContext.server';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex flex-col px-6 pt-[1.9375rem]">
          <Header />
          <Search />
          <Body />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
