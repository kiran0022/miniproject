import "./App.css";
import Nav from "./homepage/Nav";
import Home from "./homepage/Home";
import Howto from "./homepage/Howto";
import Form from "./secondpage/Form";
import Team from "./secondpage/Team";
<<<<<<< HEAD
import Footer from "./secondpage/Footer";
=======
import Review from "./secondpage/Review";
>>>>>>> 318849ef43cc76c83ce7f104c94ed7051e09232a
import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
// SyncLoader

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="flex bg-mainbl-200 justify-center items-center
         w-[100%] h-[100vh]"
        >
          <RingLoader color="#B64FC8" loading={loading} size={180} />
        </div>
      ) : (
        <>
          <Nav />
          <Home />
          <Howto />
          <Form />
          <Team />
<<<<<<< HEAD
          <Footer />
=======
          <Review />
>>>>>>> 318849ef43cc76c83ce7f104c94ed7051e09232a
        </>
      )}
    </>
  );
};

export default App;
