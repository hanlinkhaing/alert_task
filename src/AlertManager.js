import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAlert } from "./redux/reducer";
import AlertComponent from "./AlertComponent";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function AlertManager(props) {
  const alerts = useSelector((state) => state.alerts);
  const dispatch = useDispatch();
  const removeFun = (id) => {
    dispatch(removeAlert(id));
  };

  return alerts.length !== 0 ? (
    <Card sx={{ minWidth: 75 }}>
      <CardContent>
        {alerts
          ? alerts.map((alert) => (
              <AlertComponent
                key={alert.id}
                id={alert.id}
                alert={alert}
                remove={removeFun}
              ></AlertComponent>
            ))
          : null}
      </CardContent>
    </Card>
  ) : (
    <></>
  );
}
