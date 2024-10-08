import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "min(300px, 100%)",
    height: 250,
    boxShadow: "1px 1px 7px #00000020",
    borderRadius: 15,
    padding: 10,
    gap: 10,
    background: "white",
  },
  header: { display: "flex", justifyContent: "space-between", gap: 10 },

  title: {
    fontFamily: "Poppins",
    marginBlock: 0,
    paddingBlock: 5,
    fontSize: 20,
    color: "#333333",
  },
  menu: { display: "flex", gap: 10, alignItems: "center" },
  menuBtn: {
    outline: "none",
    padding:0,
    border: "none",
    display: "flex",
    backgroundColor: "transparent",
  },
  close: {
    "&:hover": {
      color: "red",
    },
  },
  edit: {
    "&:hover": {
      color: "#3DA9FC",
    },
  },
  delete: {
    "&:hover": {
      color: "red",
    },
  },
  description: {
    fontFamily: "Poppins",
    overflow: "hidden",
    whiteSpace: "break-spaces",
    textOverflow: "ellipsis",
    flex: 1,
  },
  titleInput: {
    fontFamily: "Poppins",
    outline: "none",
    border: "1px solid #f5eeee",
    borderRadius: 10,
    padding: 10,
    marginBlock: 0,
    paddingBlock: 10,
    color: "#333333",
  },
  descriptionInput: {
    fontFamily: "Poppins",
    flex: 1,
    outline: "none",
    border: "1px solid #f5eeee",
    borderRadius: 10,
    padding: 10,
    resize: "none",
  },
});
