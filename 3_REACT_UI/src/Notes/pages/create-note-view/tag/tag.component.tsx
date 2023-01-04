import CloseIcon from "@mui/icons-material/Close";

const TagComponent = ({ tag, deleteTag }) => {
  return (
    <section className="flex-row align-center-center rounded bg-white ml-3">
      <span className="p-1 pl-3 ">{tag}</span>
      <CloseIcon
        onClick={() => deleteTag(tag)}
        className="scale-down mr-2 cursor-pointer"
      />
    </section>
  );
};

export default TagComponent;
