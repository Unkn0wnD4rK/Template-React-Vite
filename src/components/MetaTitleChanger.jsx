import React, { useEffect } from "react";

const MetaTitleChanger = ({ newTitle }) => {
  useEffect(() => {
    document.title = newTitle;

    return () => {
      document.title = "Not found | X-2024-C3932-X1.0.0";
    };
  }, [newTitle]);

  return null;
};

export default MetaTitleChanger;