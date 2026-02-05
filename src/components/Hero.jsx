import { useRef, useEffect } from "react";

export default function Hero() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className="hero">
      <h1>Find Your Calm. Stay in Nature.</h1>
      <p>Premium villas & peaceful retreats</p>
      <input ref={inputRef} placeholder="Search destination..." />
    </section>
  );
}
