import Search from "./Components/Search";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import Repos from "./Components/profile/repo/Repos";

function App() {
  return (
    <>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
      <Search />
    </>
  );
}

export default App;
