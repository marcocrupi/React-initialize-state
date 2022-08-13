import React, { useState } from "react";

export default function ToggleLoading() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <p>The data is {isLoading ? "Loading" : "Not Loading"}</p>
      <button onClick={() => setIsLoading(true)}>Turn Loading On</button>
      <button onClick={() => setIsLoading(false)}>Turn Loading Off</button>
    </div>
  );
}
