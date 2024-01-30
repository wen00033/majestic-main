function SingleQuote({ data }) {
  return (
    <div className=" quote ">
      <h3>{data.book.title}</h3>
      <p>{data.text}</p>
    </div>
  );
}

export default SingleQuote;
