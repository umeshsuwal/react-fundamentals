function DocBlock({ title, description, children }) {
  return (
    <section className="doc-block">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="doc-demo">{children}</div>
    </section>
  );
}

export default DocBlock;