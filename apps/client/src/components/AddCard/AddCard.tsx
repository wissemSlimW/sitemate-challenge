import { useState } from "react";
import { Trash } from "../../assets/icons";
import { useStyles } from "./style";
import { AddCardProps } from "./types";
import { addApi } from "../../methods/addApi";
import { toastedApi } from "../../methods/toastedApi";

export const AddCard = (props: AddCardProps) => {
  const classes = useStyles();
  const handleAdd = () => {
    toastedApi<Issue>({
      successMessage: "item added",
      errorMessage: "Something went wrong try again",
      api: addApi,
      params: {
        endpoint: "issue",
        setReady: () => {},
        body: data,
        handleError: (err) => {
          console.log(err);
        },
        handleResponse: (response) => {
          props.setData((prev) => [...prev, response]);
          props.handleCancel();
          setData({
            description: "",
            title: "",
          });
        },
      },
    });
    setData({
      description: "",
      title: "",
    });
  };
  const [data, setData] = useState<Issue>({ description: "", title: "" });
  return (
    <div className={classes.container}>
      <input
        className={classes.titleInput}
        onChange={(e) =>
          setData((prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Title"
        value={data.title}
      ></input>
      <textarea
        placeholder="Description"
        className={classes.descriptionInput}
        onChange={(e) =>
          setData((prev) => ({ ...prev, description: e.target.value }))
        }
        rows={3}
        value={data.description}
      />
      <span className={classes.menu}>
        <button
          className={`${classes.btn} ${classes.save}`}
          onClick={() => handleAdd()}
        >
          Save
        </button>
        <button
          className={`${classes.btn} ${classes.cancel}`}
          onClick={() => {
            props.handleCancel();
          }}
        >
          Close
          <Trash />
        </button>
      </span>
    </div>
  );
};
