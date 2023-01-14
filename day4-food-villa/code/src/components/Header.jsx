const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/b00a857378033.560aa75ad3828.jpg"
      />
    </a>
  );
  // https://dypdvfcjkqkg2.cloudfront.net/large/1396634-1884.png
  const Header = () => {
    return (
      <div className="header">
        <Title />
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;
  