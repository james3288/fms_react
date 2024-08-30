import { itemHistoryProps } from "../typeProps/typeProps";

const itemHistory1: itemHistoryProps = {
  itemCode: "DT-01",
  itemName: "Computer",
  status: "served",
  status_turnover: "turnovered",
  custodian: "King James",
  date_borrowed: "2024-01-01",
  mto_no: "34-53",
  custodianLocation: "CBR",
  location: "Cabadbaran",
  department: "ITD",
  turnover_to: "Mak2x",
  date_turnover: "none",
  submitted_date: "2024-01-01",
  noted_by: "none",
};

const itemHistory2: itemHistoryProps = {
  itemCode: "DT-01",
  itemName: "Computer",
  status: "served",
  status_turnover: "waiting",
  custodian: "King James",
  date_borrowed: "2024-01-01",
  mto_no: "34-53",
  custodianLocation: "CBR",
  location: "Cabadbaran",
  department: "ITD",
  turnover_to: "Mak2x",
  date_turnover: "none",
  submitted_date: "2024-01-01",
  noted_by: "none",
};

const itemHistory3: itemHistoryProps = {
  itemCode: "DT-01",
  itemName: "Computer",
  status: "served",
  status_turnover: "turnovered",
  custodian: "King James",
  date_borrowed: "2024-01-01",
  mto_no: "34-53",
  custodianLocation: "CBR",
  location: "Cabadbaran",
  department: "ITD",
  turnover_to: "Mak2x",
  date_turnover: "none",
  submitted_date: "2024-01-01",
  noted_by: "none",
};

export const listOfBorrowerItems: itemHistoryProps[] = [
  itemHistory1,
  itemHistory2,
  itemHistory3,
];
