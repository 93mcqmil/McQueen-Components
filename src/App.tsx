import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

function App() {
  return (
    <>
      <Header />
      <Form />
      <ProgressBar title="Progress" percentage={50} color={"green"} />
    </>
  );
}

export default App;
