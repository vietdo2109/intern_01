export enum TagType {
  Urgent = "Urgent",
  Internal = "Internal",
  Marketing = "Marketing",
  Document = "Document",
  Event = "Event",
  Report = "Report",
}

export type TaskTag = {
  id: number,
  title: TagType;
  color: string;
  bg: string;
};

export const allTags: TaskTag[] = [
  {
    id: 1,
    title: TagType.Urgent,
    color: "#E77C7E",
    bg: "#FFEDEC",
  },
  {
    id: 2,
    title: TagType.Internal,
    color: "#E6814E",
    bg: "#FFEDDF",
  },
  {
    id: 3,
    title: TagType.Marketing,
    color: "#F5D459",
    bg: "#FFFCEF",
  },
  {
    id: 4,
    title: TagType.Document,
    color: "#6598FE",
    bg: "#EDF2FE",
  },
  {
    id: 5,
    title: TagType.Event,
    color: "#9F81EE",
    bg: "#F1EAFF",
  },
  {
    id: 6,
    title: TagType.Report,
    color: "#75D07E",
    bg: "#EDF8EC",
  },
];
