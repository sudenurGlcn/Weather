// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FirstPage from './components/FirstPage';
// import MainPage from './components/MainPage';
// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<FirstPage />} />
//           <Route path="/mainpage" element={<MainPage />} />
//         </Routes>

//       </Router>
//     </>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import MainPage from './components/MainPage';
import { WeatherProvider } from './components/Context'; // WeatherProvider'ı içe aktarın

function App() {
  return (
    <WeatherProvider> {/* WeatherProvider'ı burada kullanarak bağlamı sağlayın */}
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
}

export default App;
