import Box from "./Components/Box/Box";
// import Carousel from "./Components/Carousel/Carousel";
// import { myObj } from "./Components/Carousel/carouselTypes";
// import Checkbox from "./Components/Checkbox/Checkbox";
// import Form from "./Components/Form/Form";
// import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/NavBar";
// import ProgressBar from "./Components/ProgressBar/ProgressBar";
import ShareButton from "./Components/ShareButton/ShareButton";
import RadioButton from "./RadioButton/RadioButton";

//-------------------------------------------NavBar-----------------------------------------------//
const GoToNavLink = [
  { Text: 'Home', href: '/#' },
  { Text: 'About oss', href: '/#' },
  { Text: 'Contakt oss', href: '/#' },
  { Text: 'Different services', href: '/#' },
  { Text: 'Cooperate with oss', href: '/#' }
];

//------------------------------------------------------------------------------------------//

//-------------------------------------Social Media Butten's---------------------------------------//

const socialLinks = [
  { className: "twitter", icon: "ri-twitter-line", href: "#" },
  { className: "facebook", icon: "ri-facebook-line", href: "#" },
  { className: "close", icon: "ri-close-line", href: "#" }, // För att stänga knap menyn 
  { className: "discord", icon: "ri-discord-line", href: "#" },
  { className: "whatsapp", icon: "ri-whatsapp-line", href: "#" }
];

//------------------------------------------------------------------------------------------//

// const names = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "David",
//   "Emma",
//   "Frank",
//   "Grace",
//   "Henry",
//   "Isabella",
//   "Jack",
//   "Kate",
//   "Liam",
//   "Mia",
//   "Noah",
// ];
function App() {
  return (
    <>
      <Navbar GoToNavLink={GoToNavLink} />
      {/* <Header />
      <Form />
      
      <ProgressBar title='Progress' percentage={75} color={"green"} />
      <h2>Names:</h2>
      {names.map((name, index) => (
        <Checkbox key={index} title={name} big={false} />
      ))}
      
      
      <ProgressBar title="Progress" percentage={75} color={"green"} />
      
      <Carousel obj={myObj} />
    */}
      <RadioButton />
      <Box />
      <ShareButton socialLinks={socialLinks} />
    </>
  );
}

export default App;
