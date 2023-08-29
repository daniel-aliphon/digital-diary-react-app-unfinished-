const Compose = () => {
  return (
    <>
      <form
        action="post"
        className=" p-3 compose m-5"
      >
        <section>
          <input
            type="text"
            placeholder="Title"
            className="p-4 m-3 rounded-lg"
          />
          <input
            type="date"
            name="date"
            id=""
            className="p-4 m-3 rounded-lg"
            placeholder="date"
          />
        </section>
        <textarea
          name="postContent"
          placeholder="Dear Diary..."
          className="p-4 rounded-lg m-3"
          rows={13}
          cols={50}
        />
        <section>
          <input
            type="button"
            value="Add new entry"
            className=" cursor-pointer bg-sky-500 m-3 p-2 rounded-md text-white"
          />
          <input
            type="button"
            value="Close"
            className=" cursor-pointer bg-sky-500 m-3 p-2 rounded-md text-white"
          />
        </section>
      </form>
    </>
  );
};

export default Compose;
