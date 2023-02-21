import { useCallback, useEffect, useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Search from './components/Search';
import ThemeProvider from './context/ThemeContext';
import getGitUser, { UserData } from './service/getGitUser';

function App() {
  const [userName, setUserName] = useState('octocat');
  const [error, setError] = useState();
  const [data, setdata] = useState<UserData | undefined>(undefined);

  useEffect(() => {
    getGitUser(userName)
      .then((res) => {
        setdata(res);
        setError(undefined);
      })
      .catch((e) => setError(e));
  }, [userName]);

  const changeUser = useCallback((name: string) => setUserName(name), []);

  return (
    <ThemeProvider>
      <div className="flex flex-col px-6 pt-[1.9375rem] desktop:w-[730px] desktop:p-0">
        <Header />
        <Search error={!!error} changeUserName={changeUser} />
        {data && <Body userData={data} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
