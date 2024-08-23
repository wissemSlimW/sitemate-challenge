import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    fontFamily: "Poppins",
    display: "flex",
    flexDirection: "column",
    paddingBlock: 40,
    paddingInline: 20,
    gap: 20,
    minHeight: "100dvh",
  },
  header: { display: "flex", justifyContent: "space-between" },
  title: {
    marginBlock: 0,
    color: "#3DA9FC",
    fontWeight: 700,
  },
  addBtn: {
    fontFamily: "Poppins",
    background: "#3DA9FC",
    padding: 10,
    color: "white",
    outline: "none",
    border: "none",
    borderRadius: 10,
    height: 44,
  },
  content: {
    padding:20,
    flex: 1,
    display: "flex",
    gap: 15,
    flexWrap: "wrap",
    background: "#f8f8f8",
    borderRadius: 20,
  },
  loading: {
    flex: 1,
    color: "#333333",
    padding: 20,
    justifyContent: "center",
    textAlign: "center",
  },
});
