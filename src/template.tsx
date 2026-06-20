import { useEffect, useState } from "react";
import "./ComponentName.css";

type ComponentNameProps = {
  title?: string;
};

export default function ComponentName({
  title = "Default Title",
}: ComponentNameProps) {

  /*********************
   * STATES
   *********************/
  const [loading, setLoading] = useState(false);

  /*********************
   * EFFECTS
   *********************/
  useEffect(() => {
    // Runs on mount

    return () => {
      // Cleanup on unmount
    };
  }, []);

  /*********************
   * FUNCTIONS
   *********************/
  const handleClick = () => {
    console.log("Clicked");
  };

  /*********************
   * RENDER
   *********************/
  return (
    <div className="component-name">

      <h1>{title}</h1>

      <button onClick={handleClick}>
        Click Me
      </button>

      {loading && (
        <p>Loading...</p>
      )}

    </div>
  );
}