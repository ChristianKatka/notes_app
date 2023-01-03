interface checkBoxItem {
  checked: boolean;
  text: string;
}

export interface Note {
  date: string;
  heading: string;
  tags: string[];
  listItems: string[];
  text: string;
  checkBoxItems: checkBoxItem[];
}
