ReactDOM.createRoot(document.getElementById("root")).render(<App />);

function App() {
  return (
    <div>
      <Profile />
      <Bio />
      <Stat />
    </div>
  );
}

function Profile() {
  const imgURL =
    "https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80";
  return (
    <div className="main">
      <img src={imgURL} alt="img" className="img" />
    </div>
  );
}

function Bio() {
  const name = "Julienne Moore";
  const email = "julienne.more@company.com";

  return (
    <div className="main" style={{flexDirection: 'column'}}>
      <p className="name">{name}</p>
      <p>{email}</p>
    </div>
  );
}

function Stat() {
  const posts = 25;
  const following = 350;
  const follower = "1.5K";

  return (
    <div className="stat-main">
      <div className="stat-ctn">
        <p className="stat">{posts}</p>
        <p className="stat-header">Posts</p>
      </div>
      <div className="stat-ctn">
        <p className="stat">{following}</p>
        <p className="stat-header">Following</p>
      </div>
      <div className="stat-ctn">
        <p className="stat">{follower}</p>
        <p className="stat-header">Follower</p>
      </div>
    </div>
  );
}
