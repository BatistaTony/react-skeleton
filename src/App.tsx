import Skeleton from "./components/hoc/Skeleton/skeleton";
import { Card, Navbar } from "./demo";
import { useState } from "react";

const NavbarWithSkeleton = Skeleton(Navbar);
const CardWithSkeleton = Skeleton(Card);

function App() {
  const [data, setData] = useState({
    title: "React Skeleton Package Coming soon.",
    text: `With data
Something here
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate animi cumque incidunt laudantium fuga, sed debitis dolorum magnam saepe expedita atque doloremque id exercitationem dolores voluptates sapiente pariatur dolorem soluta!
`,
  });

  const [user, setUser] = useState({
    avatar:
      "data:image/jpeg;base64,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",
    text: `With data
Something here
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate animi cumque incidunt laudantium fuga, sed debitis dolorum magnam saepe expedita atque doloremque id exercitationem dolores voluptates sapiente pariatur dolorem soluta!
`,
  });

  const [isLoading, setIsLoading] = useState(true);

  const triggerSuspense = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className="App">
      <NavbarWithSkeleton
        avatar={user.avatar}
        text={user.text}
        isLoading={isLoading}
      />
      <CardWithSkeleton
        title={data.title}
        text={data.text}
        isLoading={isLoading}
      />

      <button onClick={triggerSuspense}>
        {isLoading ? "stop loading " : "trigger loading"}
      </button>
    </div>
  );
}

export default App;
