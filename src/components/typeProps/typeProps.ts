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
  status_turnover: string;
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
  items: facilities;
};

export type facilities = {
  item_code_id: number;
  item_code: string;
  item_name: string;
};

export type ItemHistoryProps = {
  item_desc: string;
  rs_no: string;
  facilityHistory: facilityHistory;
};

export type facilityHistory = {
  custodian_id: number;
  custodian_name: string;
  item_name: string;
  brand: string;
  item_code: string;
  current_location: string;
  serve_status: string;
  mt_no: string;
  serial_no: string;
};

export type distinctFacilityHistory = {
  item_name: string;
  brand: string;
  item_code: string;
};
