import { GroceryProvider } from "./context/GroceryContext";

const App = ({Component,pageProps}) => {
  return (
    <>
      <GroceryProvider>
        <Component {...pageProps}/>
      </GroceryProvider>
    </>
  );
}
export default App;
