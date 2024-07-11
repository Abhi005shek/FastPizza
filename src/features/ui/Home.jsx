import CreateUser from "../user/CreateUser";

function Home() {
  return (
    <div
      // style={{
      //   backgroundImage: ` url(
      //     "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
      //   )`,
      // }}
      className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url('https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg')] w-full h-full bg-center bg-cover text-center mb-8 flex items-center justify-center"
    >
      <div>
        <h1 className=" text-slate-200 text-2xl font-bold md:text-3xl">
          The best pizza.
          <br />
          <span className="text-lime-400">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        <CreateUser />
      </div>
    </div>
  );
}

export default Home;
