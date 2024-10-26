//We will use params which is a type of params objects having single [id] string type.
const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params; //destructuring params

  return (
    <>
      <div>User profile {id}</div>
    </>
  );
};

export default Page;
