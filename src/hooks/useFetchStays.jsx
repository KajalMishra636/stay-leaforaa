import { useEffect, useState } from "react";

export const useFetchStays = () => {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStays = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/stays.json");

        if (!response.ok) {
          throw new Error("Failed to fetch stay data");
        }

        const data = await response.json();

        // Data transformation validation
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received");
        }

        setStays(data);
      } catch (err) {
        setError(err.message || "Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchStays();
  }, []);

  return { stays, loading, error };
};
