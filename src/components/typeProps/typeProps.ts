// borrower props
export type packageItemProps = {
  status: string;
  location: string;
  items: string;
};
export type packageProps = {
  packageItems: packageItemProps[];
};

export type itemHistoryProps = {
  itemCode: string;
  itemName: string;
  status: string;
  custodian: string;
  date_borrowed: string;
  mto_no: string;
  custodianLocation: string;
  location: string;
  department: string;
  turnover_to: string;
  date_turnover: string;
  submitted_date: string;
  noted_by: string;
};

export type borrowerItemsProps = {
  itemHistory: itemHistoryProps[];
};
// end borrower props

// accordion Props
export type acordionProps = {
  id: number;
  title: string;
};
