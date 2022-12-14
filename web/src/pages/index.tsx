interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <div className="">
      <h1 className="text-3xl text-yellow-300">Contagem: {props.count} </h1>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  return {
    props: {
      count: data.count,
    },
  };
};
