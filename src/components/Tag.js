export default function Tags({ tags }) {
  return (
    <div className="tagsWrapper">
      {tags.map((tag, index) => {
        return (
          <div className="tagsLogement" key={index}>
            <span key={`${tag}-${index}`}>{tag} </span>
          </div>
        );
      })}
    </div>
  );
}
