import { Subtopic, Topic } from '../../../app/api/topics.types'
import LatestPostColumn from './LatestPostColumn'
import ThreadsColumn from './ThreadsColumn'
import VotesColumn from './VotesColumn'
import SubtopicColumn from './SubtopicColumn'
import {posts} from '@/app/api/data';

export default function SubtopicRow({subtopic}: {subtopic: Subtopic}) {
    //find posts with same id as subtopic id
    const subPosts = posts.map(post => post.subtopicId === subtopic.topicId);
    //find latest
    // const lastPost = subPosts.find(post => );
    return (
    <tr className="border-b-2 border-olive">
        <SubtopicColumn subtopic={subtopic} />
        {/*<LatestPostColumn post={lastPost} />*/}
        <ThreadsColumn />
        <VotesColumn />
    </tr>
  )
}

