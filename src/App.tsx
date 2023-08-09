import { Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { Suspense } from "react";
import useTheme from "./theme/useTheme";
import classNames from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<span>Loading</span>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
      <div className="link">
        <Link to="/about">about</Link>
        <Link to="/">MainPage</Link>
        <button onClick={toggleTheme}>сменить тему</button>
      </div>
      <Counter />
    </div>
  );
};

export default App;
