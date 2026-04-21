function Article({ post }) {
  return (
    <article>
      <h2>{post.titulo}</h2>
      
      <p className="autor">Escrito por: {post.autor}</p>

      <time dateTime={post.data}>{post.data}</time>

      {post.conteudo.map((texto, index) => (
        <p key={index}>{texto}</p>
      ))}

      {post.imagens.map((img, index) => (
        <figure key={index}>
          <img src={img.src} alt={img.legenda} />
          <figcaption>{img.legenda}</figcaption>
        </figure>
      ))}
    </article>
  );
}

export default Article;