import SubtopicTable from './SubtopicTable'
import TableHeader from '../TableHeader'
import { Topic } from '../../app/api/topics.types'

export default function TopicBox({topic}:{topic: Topic}) {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="overflow-x-auto flex-col">
        <TableHeader topicName={topic.name} />
        <SubtopicTable subtopics={topic.subtopics}/>
      </div>
    </div>
    
  )
}