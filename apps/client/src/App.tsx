import { useState } from "react";
import { useGetAllApi } from "./api/useGetAllApi";
import { AddCard, Card } from "./components";
import { useStyles } from "./style";

const App = () => {
  const { data, ready } = useGetAllApi<Issue>({ endpoint: "issue" });
  const classes = useStyles();
  const [addIssue, setAddIssue] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}> Issues Viewer</h1>
        {!addIssue && <button className={classes.addBtn} onClick={() => setAddIssue(true)}>
          Add Issue
        </button>}
      </div>

      <div className={classes.content}>
        {addIssue && <AddCard handleCancel={() => setAddIssue(false)} />}
        {!ready ? (
          <div className={classes.loading}>Loading</div>
        ) : (
          data.map((item) => <Card data={item} />)
        )}
      </div>
    </div>
  );
};

export default App;
