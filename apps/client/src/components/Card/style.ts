import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: 300,
    height: 250,
    boxShadow: "1px 1px 7px #00000040",
  },
  header: { display: "flex", justifyContent: "space-between" },

  title: {},
  menu: { display: "flex" },
  description: {},
});
