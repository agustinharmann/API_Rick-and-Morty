import { useContext } from "react";
import { UserContext } from "../../utils/useContext";

const Error = () => {
  const { error, setError } = useContext(UserContext);
  return (
    <div>
      erroooooooorrrrrrrrr
      <button onClick={() => setError(!error)}>x</button>
    </div>
  )
}

export { Error };
