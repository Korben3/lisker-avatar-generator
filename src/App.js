import "./App.css";
import LiskerGenerator from "./LiskerGenerator";
import GoogleFontLoader from "react-google-font-loader";

const App = () => {
  <GoogleFontLoader
    fonts={[
      {
        font: "Poppins",
        weights: [400, "400b"],
      },
    ]}
  />;

  const getLiskerId = (liskerId) => {
    console.log("App - " + liskerId);
  };

  return (
    <div className="App">
      <LiskerGenerator
        getLiskerId={getLiskerId}
        setLiskerId="t111t311t412t491t523t531t541t551t701t801t851c1D8E6EDc25300EBc3E38E61c42C1B18"
      />
    </div>
  );
};

export default App;
