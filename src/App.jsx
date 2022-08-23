import { MainNavigation } from "./components/layout/MainNavigation";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <div data-test="app">
      <MainNavigation />
      <Layout />
    </div>
  );
}

export default App;
