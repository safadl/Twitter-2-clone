import React from "react";
import { Tweet } from "../typings";
import TimeAgo from "react-timeago";
import {
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  ArrowUpTrayIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

interface Props {
  tweet: Tweet;
}
function Tweet({ tweet }: Props) {
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
    </div>
  );
}

export default Tweet;
