import Providers from "./context/Providers";
import Routes from "./routes/Routes";


function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

export default App;
