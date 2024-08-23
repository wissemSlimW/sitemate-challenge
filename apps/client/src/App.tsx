import { useState } from "react";
import { useGetAllApi } from "./api/useGetAllApi";
import { Card } from "./components/Card";
import { removeApi } from "./methods/removeApi";
import { toastedApi } from "./methods/toastedApi";
import { useStyles } from "./style";
import { updateApi } from "./methods/updateApi";
import { addApi } from "./methods/addApi";

const App = () => {
  const { data, ready } = useGetAllApi<Issue>({ endpoint: "issue" });
  const classes = useStyles();
  const [addIssue, setAddIssue] = useState(false);
  const [issue, setIssue] = useState<Issue>({ title: "", description: "" });

  const [deleteRequest, setDeleteREquest] = useState<boolean>(false);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}> Issues Viewer</h1>
        <button className={classes.addBtn} onClick={() => setAddIssue(true)}>
          Add Issue
        </button>
      </div>
      {addIssue && (
        <div>
          <input
            onChange={(e) =>
              setIssue((prev) => ({ ...prev, title: e.target.value }))
            }
            value={issue.title}
            placeholder="Title"
          />
          <input
            onChange={(e) =>
              setIssue((prev) => ({ ...prev, description: e.target.value }))
            }
            value={issue.description}
            placeholder="Description"
          />
          <button
            onClick={() =>
              toastedApi({
                errorMessage: "item added",
                successMessage: "Something went wrong try again",
                api: addApi,
                params: {
                  endpoint: "issue",
                  setReady: () => {},
                  body: issue,
                  handleError: (err) => {
                    console.log(err);
                  },
                },
              })
            }
          >
            save
          </button>
          <button onClick={() => setAddIssue(false)}>cancel</button>
        </div>
      )}
      <div className={classes.content}>
        {!ready ? (
          <div className={classes.loading}>Loading</div>
        ) : (
          data.map((item) => (
            <Card
              data={item}
              handleDelete={(id) => {
                toastedApi({
                  errorMessage: "item deleted",
                  successMessage: "Something went wrong try again",
                  api: removeApi,
                  params: {
                    id,
                    endpoint: "issue",
                    setReady: setDeleteREquest,
                    handleError: (err) => {
                      console.log(err);
                    },
                  },
                });
              }}
              handleEdit={(props: Issue) => {
                toastedApi({
                  errorMessage: "item updated",
                  successMessage: "Something went wrong try again",
                  api: updateApi,
                  params: {
                    body: props,
                    id: props.id,
                    endpoint: "issue",
                    setReady: () => {},
                    handleError: (err) => {
                      console.log(err);
                    },
                  },
                });
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
