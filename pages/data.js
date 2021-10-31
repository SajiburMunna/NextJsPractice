import axios from "axios";
const data = ({ data }) => {
  return (
    <div>
      <h1>All Data Displayed</h1>
      {data.map((u) => (
        <div
          key={Math.random()}
          style={{
            border: "1px solid yellow",
            width: "400px",
            margin: "20px",
          }}
        >
          <p style={{ color: "red" }}>{u.score}</p>
          <p style={{ color: "green" }}>{u.show.name}</p>
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
