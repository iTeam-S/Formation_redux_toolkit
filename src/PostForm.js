import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPost } from "./redux/postSlice";

const PostForm = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchPost(id));

    setId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="id"
        placeholder="Ajouter une tâche"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </form>
  );
};

export default PostForm;
