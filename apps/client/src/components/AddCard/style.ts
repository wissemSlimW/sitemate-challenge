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

  save: {
    "&:hover": {
      color: "#3DA9FC",
      borderColor: "#3DA9FC",
    },
  },
  cancel: {
    "&:hover": {
      // borderColor: "red",
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
  menu: { display: "flex", gap: 10, width: "100%", justifyContent: "end" },
  btn: {
    fontFamily: "Poppins",
    fontWeight: 500,
    background: "transparent",
    color: "#333333",
    padding: 10,
    cursor: "pointer",
    borderRadius: 10,
    border: "2px solid #efefef",
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
