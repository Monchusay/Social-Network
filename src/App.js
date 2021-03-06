import style from "./App.module.css";
import Header from "./Components/Header/Header";
import NavList from "./Components/NavList/NavList";
import Settings from "./Components/NavList/Settings/Settings";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MusicContainer from "./Components/NavList/Music/MusicContainer";
import DialogsContainer from "./Components/NavList/Messages/DialogsContainer";
import AllUsersContainer from "./Components/NavList/AllUsers/AllUsersContainer";
import ProfilePageContainer from "./Components/ProfilePage/ProfilePageContainer";
import NewsContainer from "./Components/NavList/News/NewsContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className={style.appWrapper}>
        <Header />
        <NavList />
        <div className={style.MainObj}>
          <Routes>
            <Route path="/AllUsers/*" element={<AllUsersContainer />} />
            <Route path="/Music/*" element={<MusicContainer />} />
            <Route path="/Profile/*" element={<ProfilePageContainer />} />
            <Route path="/Dialogs/*" element={<DialogsContainer />} />
            <Route path="/News/*" element={<NewsContainer />} />
            <Route path="/Settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
