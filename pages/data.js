import axios from "axios";
import Users from "./../components/users";

const data = ({ data }) => {
  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <h1>All Data Displayed</h1>

      {data.map((u) => (
        <div
          key={Math.random()}
          style={{
            border: "1px solid yellow",
            width: "400px",
            margin: "30px",
          }}
        >
          <p>{u.score}</p>
          <p>{u.show.name}</p>
          <Users users={u}></Users>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  try {
    const result = await axios.get(
      "https://api.tvmaze.com/search/shows?q=batman"
    );
    const data = result.data;
    console.log(data);
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default data;
