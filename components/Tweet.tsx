import React, { useEffect, useState } from "react";
import { Tweet } from "../typings";
import TimeAgo from "react-timeago";
import {
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  ArrowUpTrayIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import { fetchComments } from "../utils/fetchComments";
import{Comment} from '../typings';
interface Props {
  tweet: Tweet;
}
function Tweet({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  const refreshComments= async()=>{
    const comments: Comment[]= await fetchComments(tweet._id)
    setComments(comments);
  }
  useEffect(()=>{
    refreshComments();
  },[])
  console.log(comments)
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s*/g, "").toLowerCase()}
            </p>
            <TimeAgo
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>
          <p>{tweet.text}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              alt=""
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>
      <div className="flex mt-5 justify-between">
        <div className="flex curser-pointer items-center space-x-3 text-grau-400">
          <ChatBubbleBottomCenterIcon className="h-5 w-5" />
          <p>5</p>
        </div>
        <div className="flex curser-pointer items-center space-x-3 text-grau-400">
          <ArrowsRightLeftIcon className="h-5 w-5" />
        </div>

        <div className="flex curser-pointer items-center space-x-3 text-grau-400">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="flex curser-pointer items-center space-x-3 text-grau-400">
        
          <ArrowUpTrayIcon className="h-5 w-5" />
        </div>
      </div>
      {comments?.length>0 &&(
        <div>
          {comments.map(comment=>(
            <div key={comment._id}>
              <img src={comment.profileImg} alt="" className=' h-7 w-7 object-cover rounded-full' />
              <div>
                <div>
                  <p>{comment.username}</p>
                  <p>@{tweet.username.replace(/\s*/g, "").toLowerCase()}</p>
                </div>
                <TimeAgo
                className='text-sm text-gray-500' date={comment._createdAt} />
              </div>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tweet;
