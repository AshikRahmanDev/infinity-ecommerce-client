import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import Loading from "./Shared/Loading";

function App() {
  const [buffer, setbuffer] = useState(false);
  useEffect(() => {
    setbuffer(true);
    setTimeout(() => {
      setbuffer(false);
    }, 3000);
  }, []);

  if (buffer) {
    return <Loading />;
  }
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
