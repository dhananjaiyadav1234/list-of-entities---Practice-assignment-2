import LikeButton from "./LikeButton";

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "10px",
        margin: "10px 0",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        src={post.profileImage}
        alt="Profile"
        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
      />
      <div>
        <h4>{post.username}</h4>
        <p>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;