export const Navbar = ({ avatar, text }: any) => {
  return (
    <div className="navbar">
      <img
        src={avatar}
        alt=""
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          borderRadius: "100%",
        }}
      />

      <h1>Batista Tone</h1>

      <p>{text}</p>
    </div>
  );
};

interface CardProps {
  title: string;
  text: string;
}

export const Card = ({ title, text }: CardProps) => {
  return (
    <div style={{ width: "100%" }}>
      <h1>{title}</h1>
      <p>{text}</p>

      <button style={{ width: "200px", height: "50px", borderRadius: "10px" }}>
        Testing button
      </button>
    </div>
  );
};
