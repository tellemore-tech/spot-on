import './App.scss';

function App() {
  return (
    <div className="App">
      <main>
        <div className='spot-on-inner'>
          <img src='/spot-on-logo.svg' alt='Spot On Window Cleaning'/>
          <div className='spot-on-inner-text'>
            <h2>Website coming soon!</h2>
            <div className='spot-on-inner-text-info'>
              <span className='spot-on-inner-text-info-icon'>
                <span className="material-symbols-outlined">
                  call
                </span>
                519-550-7768
              </span>
              <span className='spot-on-inner-text-info-icon'>
                <span className="material-symbols-outlined">
                  mail
                </span>
                nick@spotonwindowcleaning.ca
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
