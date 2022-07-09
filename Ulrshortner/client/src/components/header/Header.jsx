import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Url Shortner</span>
        <span className="headerTitleLg">Url Shortner</span>
      </div>
      <img
        className="headerImg"
        src="https://miro.medium.com/max/830/1*Pdw7h5X6vQQNVopIzHBG6A.jpeg"
        alt=""
      />
    </div>
  );
}
