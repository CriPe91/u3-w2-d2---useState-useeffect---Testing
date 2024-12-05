import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";

import Horror from "./Books/horror.json";

function App() {
  return (
    <>
      <MyNav />,
      <Welcome />,
      <BookList books={Horror} />,{/* <AllTheBooks /> */}
      <MyFooter />
    </>
  );
}

export default App;
