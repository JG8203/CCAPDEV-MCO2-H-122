import React from 'react'
import SubtopicTable from './SubtopicTable'
import TopicHeader from './TopicHeader'

export default function TopicBox() {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="overflow-x-auto flex-col">
        <TopicHeader topicName="Top 5 Cattos"/>
        <SubtopicTable />
      </div>
    </div>
  )
}