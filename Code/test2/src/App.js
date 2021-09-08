import './App.css';
// import Button, { ButtonV2 } from './components/Button';
// import Status from './components/Status';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      {/* <SignUpForm /> */}
      {/* <Status isOnline={true}/> */}
      {/* <Button color={'red'} buttonType="primary" label="button1" />
      <Button color={'green'} buttonType="primary" label={<h1>button2</h1>} /> */}
      {/* <Button buttonType="primary" label="button1" />
      <Button buttonType="primary" label={<h1>button2</h1>} />
    
      <ButtonV2 buttonType="primary">
        <h1>Hello</h1>
        <h1>Hello</h1>
      </ButtonV2> */}
      <Weather />
    
    
    </div>
  );
}

export default App;
