import { Button, Modal, NavBar } from 'ui';
import './App.css';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button />
      <Modal>
        <p>children</p>
      </Modal>
      <NavBar />
    </>
  );
}

export default App;
