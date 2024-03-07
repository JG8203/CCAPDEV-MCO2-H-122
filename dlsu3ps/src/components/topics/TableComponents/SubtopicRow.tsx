import { Subtopic, Topic } from './topics.types'
import LatestPostColumn from './LatestPostColumn'
import ThreadsColumn from './ThreadsColumn'
import VotesColumn from './VotesColumn'
import SubtopicColumn from './SubtopicColumn'
import Link from 'next/link'

export default function SubtopicRow({subtopic}: {subtopic: Subtopic}) {
    return (
    <tr className="border-b-2 border-olive">
        <SubtopicColumn subtopic={subtopic} />
        <LatestPostColumn />
        <ThreadsColumn />
        <VotesColumn />
    </tr>
  )
}

