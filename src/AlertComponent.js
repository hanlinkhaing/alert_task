import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function AlertComponent({ alert, remove }) {
  useEffect(() => {
    const timeId = setTimeout(() => {
      remove(alert.id);
    }, alert.timeLimit * 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  const goToLink = () => {
    if (alert.link) window.location = alert.link;
  };

  return (
    <Stack spacing={2}>
      <Alert severity={alert.type} onClick={goToLink}>
        <AlertTitle>{alert.title}</AlertTitle>
        {alert.text} — <a href={alert.link}>{alert.link}</a>
      </Alert>
    </Stack>
  );
}
