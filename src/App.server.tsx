import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import Body from './components/Body.server';
import Header from './components/Header.server';
import Search from './components/Search.server';
import ThemeProvider from './context/ThemeContext.server';
import getGitUser from './service/getGitUser';

function App() {
  const [userName, setUserName] = useState('octocat');
  const { data } = useQuery(['gitUserData', userName], () =>
    getGitUser(userName)
  );

  const changeUser = useCallback((name: string) => setUserName(name), []);

  return (
    <ThemeProvider>
      <div className="flex flex-col px-6 pt-[1.9375rem]">
        <Header />
        <Search changeUserName={changeUser} />
        {data && <Body userData={data} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
