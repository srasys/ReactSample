const List = (props) => {
  console.log(props);
  return (
    <li key={props.key} className="comment">
      <div className="comments-header">
        <h3 className="email">{props.email}</h3>
        <h3 className="name">{props.name}</h3>
      </div>
      <p className="message">{props.body}</p>
    </li>
  );
};
export default List;
