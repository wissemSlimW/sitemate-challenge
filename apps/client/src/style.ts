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
    padding: 20,
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

  skeletonContainer: {
    width: "min(300px, 100%)",
    height: 250,
    boxShadow: "1px 1px 7px #00000020",
    borderRadius: 15,
    padding: 10,
    gap: 10,
    background: "white",
    display: "flex",
    flexDirection: "column",
  },
  skeleonHeader: { display: "flex", gap: 10 },
  titleSkeleton: { height: 44, flex: 1, borderRadius: 25 },
  circleSkeleton: { height: 44, width: 44, borderRadius: "50%" },
  bodySkeleton: { flex: 1, borderRadius: 25 },
  animation: {
    animation: "$placeHolderShimmer 1.25s forwards linear infinite",
    background:
      "linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%)",
    backgroundSize: "800px 104px",
    position: "relative",
  },
  "@keyframes placeHolderShimmer": {
    "0%": {
      backgroundPosition: "-468px 0",
    },
    "100%": {
      backgroundPosition: "468px 0",
    },
  },
});
