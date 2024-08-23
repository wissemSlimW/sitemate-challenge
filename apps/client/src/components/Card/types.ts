export type CardProps = {
  data: Issue;
  handleDelete: (id: string) => void;
  handleEdit: (props: Issue) => void;
};
