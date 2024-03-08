import { Subtopic, Topic } from '../../../app/api/topics.types'
import LatestPostColumn from './LatestPostColumn'
import ThreadsColumn from './ThreadsColumn'
import VotesColumn from './VotesColumn'
import SubtopicColumn from './SubtopicColumn'
import {posts} from '@/app/api/data';

export default function SubtopicRow({subtopic}: {subtopic: Subtopic}) {
    return (
    <tr className="border-b-2 border-olive">
        <SubtopicColumn subtopic={subtopic} />
        {/*
        {posts.map(post => (
          <LatestPostColumn key={subtopic._id} post={post} />
        ))}*/}
        <LatestPostColumn />
        <ThreadsColumn />
        <VotesColumn />
    </tr>
  )
}

