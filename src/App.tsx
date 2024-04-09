import Checkbox from "./Components/Checkbox/Checkbox";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Henry",
  "Isabella",
  "Jack",
  "Kate",
  "Liam",
  "Mia",
  "Noah"
];
function App() {
  return (
    <>
      <Header />
      <Form />

      <ProgressBar title="Progress" percentage={75} color={"green"} />
      <h2>Names:</h2>
      {names.map((name, index) => (
        <Checkbox key={index} title={name} big={false}/>
      ))}

      <ProgressBar title='Progress' percentage={75} color={"green"} />

    </>
  );
}

export default App;
