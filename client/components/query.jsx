

import { useSearchParams } from 'next/navigation'

const query = ({setTopic, setGotTopic}) => {

    const searchParams = useSearchParams();
    let topic = searchParams.get('topic')
    let array = topic.split('%20');
    topic = ""
    for (let i = 0; i < array.length; i++) {
        topic = topic + array[i] + " "
    }
    setTopic(topic)
    setGotTopic(true);
  return (
    <h1>Loading......</h1>
  )
}

export default query