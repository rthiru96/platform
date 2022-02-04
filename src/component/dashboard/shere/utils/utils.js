import notfication from "./assets/event/notification.png";
import thumbnail from "./assets/event/thumbnail.png";
import message from "./assets/activity/message.png";
import follow from "./assets/activity/follow.png";
import event from "./assets/activity/event.png";
import { Box } from "@material-ui/core";
import React from "react";

export const eventActivity = [
  {
    id: 1,
    img: notfication,
    time: "10:30AM",
    desc: "Webinar: the basics",
  },
  {
    id: 2,
    img: thumbnail,
    time: "2:15PM",
    desc: "Team Building Activity",
  },
];

export const activity = [
  {
    id: 1,
    img: follow,
    name: (
      <Box color="#9c9ab6">
        You have new 5 followers including
        <Box component="span" color="#4589ff" className="ml-1 mr-1">
          Kathryn Crawford
        </Box>
        and
        <Box component="span" color="#4589ff" className="ml-1 mr-1">
          Piper Shaw
        </Box>
      </Box>
    ),
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Lpsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in 1960s with the release of Letraset sheets contains Lorem",
  },
  {
    id: 2,
    img: event,
    name: <Box color="#9c9ab6">3 events were added to your calender</Box>,
    desc: "no data found",
  },
  {
    id: 3,
    img: message,
    name: (
      <Box color="#9c9ab6"> You have 3 pending readings to complete 🤓</Box>
    ),
    desc: "no data found",
  },
];

export const progress = [
  {
    id: 1,
    name: "Total Webninars",
    value: 9,
    color: "#FFFEFE",
  },
  {
    id: 2,
    name: "Total Assignments",
    value: 0,
    color: "#FFFEFE",
  },
  {
    id: 3,
    name: "Total units",
    value: 5,
    color: "#FFFEFE",
  },
  {
    id: 4,
    name: "Total Readings",
    value: 14,
    color: "#FFFEFE",
  },
  {
    id: 5,
    name: <Box color="#FEFEFE !important"> Total Videos</Box>,
    value: 5,
    color: "#1984fe",
  },
];
