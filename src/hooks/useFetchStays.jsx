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

        // Normalise data so components can safely rely on
        // `image` (single URL) and `images` (array of URLs)
        const normalised = data.map((stay) => {
          const rawImages = stay.images || stay.image;

          const imagesArray = Array.isArray(rawImages)
            ? rawImages
            : rawImages
            ? [rawImages]
            : [];

          return {
            ...stay,
            images: imagesArray,
            image: imagesArray[0] || ""
          };
        });

        setStays(normalised);
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
