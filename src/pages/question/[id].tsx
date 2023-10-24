type PropsType = {
  id: string;
};
export default function About(props: PropsType) {
  return (
    <>
      <main>
        <h4>标题</h4>
        <div>{props.id}</div>
      </main>
    </>
  );
}
export async function getServerSideProps(context: any) {
  const { id } = context.params;
  return {
    props: {
      id,
    },
  };
}
