import { Note } from "../models/note.model";

const notes: Note[] = [
  {
    id: "9u01ujöjsöpaojkpfdoija",
    date: "20 APR",
    heading: "Exploration Ideas",
    tags: ["Design", "Productivity", "+1"],
    listItems: ["Ticket App", "Travel Website", "Digital Marketing Website..."],
    text: "",
    checkBoxItems: [],
  },
  {
    id: "u289y7ddhs877hiahj",
    date: "19 APR",
    heading: "Database Systems Week 4",
    tags: ["Collage", "Lecture", "+3"],
    listItems: [],
    text: "obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these...",
    checkBoxItems: [],
  },
  {
    id: "91u208uw998sa89qyn",
    date: "18 APR",
    heading: "Grocery List",
    tags: ["Shopping", "List"],
    listItems: [
      "Cereal",
      "Shampoo",
      "Toothpaste",
      "Apple",
      "Cup of noodles...",
    ],
    text: "",
    checkBoxItems: [],
  },
  {
    id: "jaojzxirhb789201n",
    date: "17 APR",
    heading: "Daily Tasks",
    tags: ["Productivity", "Daily"],
    listItems: [],
    text: "",
    checkBoxItems: [
      { checked: false, text: "House Chores" },
      { checked: false, text: "2km Run" },
      { checked: true, text: "Read a book" },
      { checked: true, text: "Laundry" },
    ],
  },
  {
    id: "91u208uw998dsa89yn",
    date: "18 APR",
    heading: "Grocery List",
    tags: ["Shopping", "List"],
    listItems: [
      "Cereal",
      "Shampoo",
      "Toothpaste",
      "Apple",
      "Cup of noodles...",
    ],
    text: "",
    checkBoxItems: [],
  },
  {
    id: "9u01ujöjsqöpaojkpdoija",
    date: "20 APR",
    heading: "Exploration Ideas",
    tags: ["Design", "Productivity", "+1"],
    listItems: ["Ticket App", "Travel Website", "Digital Marketing Website..."],
    text: "",
    checkBoxItems: [],
  },
  {
    id: "u289y7rdhs877hiahj",
    date: "19 APR",
    heading: "Database Systems Week 4",
    tags: ["Collage", "Lecture", "+3"],
    listItems: [],
    text: "obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these...",
    checkBoxItems: [],
  },
];
export default function getNotes() {
  return notes;
}
