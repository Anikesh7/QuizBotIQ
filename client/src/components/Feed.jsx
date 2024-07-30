import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Feed({ setTopic }) {

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  function handleSearchChange(e) {
    setSearchText(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault();
    setTopic(searchText);
    navigate('/test');
  }

  return (
    <>
      <section className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2">
        <form className='relative w-full flex-center'>
          <input
            type="text"
            placeholder="Search for a topic"
            value={searchText}
            onChange={handleSearchChange}
            required
            className='block w-full rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0'
          />
        </form>
      </section>
      <div className='mt-5 w-full flex justify-center'>
        <button
          type="submit"
          onClick={submit}
          className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent p-3 rounded-lg border hover:border-amber-500'>
          Submit
        </button>
      </div>
    </>
  )
}

export default Feed