import React, {useState} from 'react';
import List from './components/use-effect/List/List';
import TestHook from './components/use-json-fetch/TestHook';
import Landing from './components/authentication/Landing';

import './App.css';

function App() {
  const [app, setApp] = useState(<Landing />);
  const [currentClass, setCurrentClass] = useState("authentication");
  const apps = [
    {
      name: "use-effect",
      component: <List />
    },
    {
      name: "json-fetch",
      component: <TestHook />
    },
    {
      name: "authentication",
      component: <Landing />
    }
  ]

  const handleClick = e => {
    const curApp = apps.find(item => item.name === e.target.className);
    setApp(curApp.component);
    setCurrentClass(curApp.name);
  }
  
  return (
    <div>
      <header className="header_main">
        <button className='use-effect' onClick={handleClick}>Задание №1(Карточки)</button>
        <button className='json-fetch' onClick={handleClick}>Задание №2(Кастомный хук)</button>
        <button className="authentication" onClick={handleClick}>Задание №3(Collapse)</button>
      </header>
      <div className={"app_" + currentClass}>{app}</div>
    </div>
  );
}

export default App;