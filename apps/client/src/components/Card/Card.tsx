import { useState } from "react";
import { useStyles } from "./style";
import { CardProps } from "./types";

export const Card = (props: CardProps) => {
  const classes = useStyles();

  const [data, setData] = useState<Issue>(props.data);
  const [mode, setMode] = useState<"view" | "edit">("view");
  return (
    <>
      {mode === "view" ? (
        <div className={classes.container}>
          <div className={classes.header}>
            <h1 className={classes.title}>{props.data.title}</h1>
            <span className={classes.menu}>
              <button onClick={() => setMode("edit")}>edit</button>
              <button onClick={() => props.handleDelete(props.data.id!)}>
                delete
              </button>
            </span>
          </div>
          <div className={classes.description}>{props.data.description}</div>
        </div>
      ) : (
        <div className={classes.container}>
          <div className={classes.header}>
            <input
              className={classes.title}
              onChange={(e) =>
                setData((prev) => ({ ...prev, title: e.target.value }))
              }
              value={data.title}
            ></input>
            <span className={classes.menu}>
              <button
                onClick={() => props.handleEdit({ id: props.data.id, ...data })}
              >
                save
              </button>
              <button
                onClick={() => {
                  setMode("view");
                  setData({
                    description: props.data.description,
                    title: props.data.title,
                  });
                }}
              >
                cancel
              </button>
            </span>
          </div>
          <textarea
            className={classes.description}
            onChange={(e) =>
              setData((prev) => ({ ...prev, title: e.target.value }))
            }
            rows={3}
            value={data.description}
          ></textarea>
        </div>
      )}
    </>
  );
};
