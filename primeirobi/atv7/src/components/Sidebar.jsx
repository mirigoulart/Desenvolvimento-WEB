function Sidebar({ posts }) {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        {posts.map((p, i) => (
          <li key={i}>
            <a href="#">{p}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;