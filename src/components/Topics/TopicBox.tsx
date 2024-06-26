import SubtopicTable from './SubtopicTable'
import TableHeader from '../TableHeader'
import { Topic } from '../../app/api/topics.types'

export default function TopicBox({topic}:{topic: Topic}) {
  return (
    <div className="flex-col justify-center items-center pl-32 pr-32 pt-12">
      <div className="overflow-x-auto flex-col">
        <TableHeader topicName={topic.name} />
        <SubtopicTable subtopics={topic.subtopics}/>
      </div>
    </div>
    
  )
}