import { packageItemProps } from "../typeProps/typeProps";

const items: packageItemProps = {
  status: "served",
  location: "ITD",
  items: "Computer2",
};

const items2: packageItemProps = {
  status: "served",
  location: "ACT",
  items: "Computer",
};

export const listOfPackages: packageItemProps[] = [items, items2];
