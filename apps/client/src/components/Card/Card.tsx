import { useState } from "react";
import { useStyles } from "./style";
import { CardProps } from "./types";
import { CloseSquare, Edit, TickSquare, Trash } from "../../assets/icons";
import { removeApi, toastedApi, updateApi } from "../../methods";

export const Card = (props: CardProps) => {
  const [deleteRequest, setDeleteRequest] = useState(false);
  const classes = useStyles();
  const handleEdit = () => {
    toastedApi({
      errorMessage: "item updated",
      successMessage: "Something went wrong try again",
      api: updateApi,
      params: {
        body: data,
        id: props.data.id,
        endpoint: "issue",
        setReady: () => {},
        handleError: (err) => {
          console.log(err);
        },
      },
    });
  };
  const handleDelete = () => {
    toastedApi({
      errorMessage: "item deleted",
      successMessage: "Something went wrong try again",
      api: removeApi,
      params: {
        id: props.data.id!,
        endpoint: "issue",
        setReady: setDeleteRequest,
        handleError: (err) => {
          console.log(err);
        },
      },
    });
  };
  const [data, setData] = useState<Issue>(props.data);
  const [mode, setMode] = useState<"view" | "edit">("view");
  return (
    <>
      {mode === "view" ? (
        <div className={classes.container}>
          <div className={classes.header}>
            <h2 className={classes.title}>{props.data.title}</h2>
            <span className={classes.menu}>
              <button
                disabled={deleteRequest}
                className={`${classes.menuBtn} ${classes.edit}`}
                onClick={() => setMode("edit")}
              >
                <Edit />
              </button>
              <button
                disabled={deleteRequest}
                className={`${classes.menuBtn} ${classes.delete}`}
                onClick={() => handleDelete()}
              >
                <Trash />
              </button>
            </span>
          </div>
          <span className={classes.description}>{props.data.description}</span>
        </div>
      ) : (
        <div className={classes.container}>
          <div className={classes.header}>
            <input
              placeholder="Title"
              className={classes.titleInput}
              onChange={(e) =>
                setData((prev) => ({ ...prev, title: e.target.value }))
              }
              value={data.title}
            ></input>
            <span className={classes.menu}>
              <TickSquare color="#0cc61b" onClick={() => handleEdit()} />
              <CloseSquare
                className={classes.close}
                onClick={() => {
                  setMode("view");
                  setData({
                    description: props.data.description,
                    title: props.data.title,
                  });
                }}
              />
            </span>
          </div>
          <textarea
            placeholder="'Description"
            className={classes.descriptionInput}
            onChange={(e) =>
              setData((prev) => ({ ...prev, description: e.target.value }))
            }
            rows={3}
            value={data.description}
          ></textarea>
        </div>
      )}
    </>
  );
};
