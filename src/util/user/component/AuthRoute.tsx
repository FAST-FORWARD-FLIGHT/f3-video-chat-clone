import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, user => {
    if (user) {
      setLoading(false);
    } else {
      console.log("삐~");
      navigate("/");
    }
  });
  if (loading) return <p>loading...</p>;

  return <div>{children}</div>;
};

export default AuthRoute;
