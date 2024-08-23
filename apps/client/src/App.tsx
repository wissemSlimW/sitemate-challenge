import { useState } from "react";
import { AddCard, Card } from "./components";
import { useStyles } from "./style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useApi } from "./api/useApi";

const App = () => {
  const [data, setData] = useState<Issue[]>([]);
  const [ready, setReady] = useState<boolean>(false);
  useApi<Issue>({
    endpoint: "issue",
    setData,
    setReady,
    handleError: (err) => console.log(err),
  });
  const classes = useStyles();
  const [addIssue, setAddIssue] = useState(false);

  const Skeleton = () => (
    <div className={classes.skeletonContainer}>
      <div className={classes.skeleonHeader}>
        <div className={`${classes.titleSkeleton} ${classes.animation}`}></div>
        <div className={`${classes.circleSkeleton} ${classes.animation}`}></div>
        <div className={`${classes.circleSkeleton} ${classes.animation}`}></div>
      </div>
      <div className={`${classes.bodySkeleton} ${classes.animation}`}></div>
    </div>
  );
  return (
    <>
      <ToastContainer />
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}> Issues Viewer</h1>
          {!addIssue && (
            <button
              className={classes.addBtn}
              onClick={() => setAddIssue(true)}
            >
              Add Issue
            </button>
          )}
        </div>

        <div className={classes.content}>
          {addIssue && (
            <AddCard
              setData={setData}
              handleCancel={() => setAddIssue(false)}
            />
          )}
          {!ready
            ? Array(Math.floor(Math.random() * 8 + 2))
                .fill("")
                .map((_, i) => <Skeleton key={i} />)
            : data.map((item) => (
                <Card key={item._id} data={item} setData={setData} />
              ))}
        </div>
      </div>
    </>
  );
};

export default App;
