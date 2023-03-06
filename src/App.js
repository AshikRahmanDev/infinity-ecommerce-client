import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import Loading from "./Shared/Loading";

function App() {
  const [buffer, setbuffer] = useState(false);
  useEffect(() => {
    setbuffer(true);
    setTimeout(() => {
      setbuffer(false);
    }, 1000);
  }, []);

  if (buffer) {
    return <Loading />;
  }
  return (
    <div className="">
      <RouterProvider router={router} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
