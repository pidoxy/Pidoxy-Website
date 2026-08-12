// Renders a comma-separated author list, bolding Emmanuel's name.
// Author order is preserved exactly as written in the data.
export default function Authors({ authors }) {
  return authors.split(", ").map((author, i, arr) => {
    const isMe = author.includes("Idoko");
    return (
      <span key={`${author}-${i}`}>
        {isMe ? <strong>{author}</strong> : author}
        {i < arr.length - 1 ? ", " : ""}
      </span>
    );
  });
}
