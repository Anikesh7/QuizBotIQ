import {useState} from 'react'
import { useRouter } from 'next/navigation';

function feed() {

  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  function handleSearchChange(e){
    setSearchText(e.target.value)
  }

  const submit = (e)=>{
    e.preventDefault();
    router.push(`/quiz/?topic=${searchText}`)
  }

  return (
    <>
    <section className="feed">
      <form className='relative w-full flex-center'>
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      {/* <PromptCardList
        data={posts}
        handleTagClick={()=>{}}
      /> */}
    </section>
    <button type="submit" onClick={submit} className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent mt-5 p-3 rounded-lg border hover:border-amber-500'>
          Submit
    </button>
    </>
  )
}

export default feed