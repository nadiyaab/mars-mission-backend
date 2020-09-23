﻿import {db} from "./database";
import {RoverName} from "../models/requestModels";

interface TimelineItem {
    id: string;
    rover_name: RoverName;
    image_url: string | null;
    heading: string;
    timeline_entry: string;
    date: string;
}

interface NewTimelineItem {
    roverName: RoverName;
    imageUrl: string;
    heading: string;
    body: string;
    date: string;
}

export const insertTimelineItem = async (timelineItem: NewTimelineItem): Promise<void> => {
    await db()
        .insert({
            rover_name: timelineItem.roverName,
            image_url: timelineItem.imageUrl,
            heading: timelineItem.heading,
            timeline_entry: timelineItem.body,
            date: timelineItem.date
        })
        .into<TimelineItem>("timeline_entry");
};