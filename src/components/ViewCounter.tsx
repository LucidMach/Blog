import { useState, useEffect } from "react";

interface ViewCounterProps {
  title: string;
}

const ViewCounter: React.FC<ViewCounterProps> = ({ title }) => {
  const [views, setViews] = useState<number>();

  const fetchViews = async () => {
    try {
      const response = await fetch("/api/views", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        const data: { views: number } = await response.json();
        setViews(data.views);
      }
    } catch (err) {
      console.log(title);
      console.log(err);
      setViews(-1);
    }
  };

  useEffect(() => {
    fetchViews();
  }, [title]);

  return <span>👀 : {views}</span>;
};

export default ViewCounter;
