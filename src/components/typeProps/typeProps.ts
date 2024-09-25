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

// FACILITY HISTORY TYPE
export type facilityHistory = {
  date_borrowed_turnover: string;
  custodian_id: number;
  custodian_name: string;
  item_name: string;
  brand: string;
  item_code: string;
  current_location: string;
  serve_status: string;
  status_served_id: number;
  mt_no: string;
  serial_no: string;
  rs_no: string;
  status_item: string;
  item_name_desc_id: number;
  transfer_to: string;
  type_of_purchasing: string;
  rr_price: number;
};

export type distinctFacilityHistory = {
  item_name: string;
  brand: string;
  item_code: string;
};
// END FACILITY HISTORY TYPE

// UPLOADIMAGEFORITEMCODE TYPE
export type uploadImageForItemCodeType = {
  itemCode: string;
  image: File;
};
// END UPLOADIMAGEFORITEMCODE TYPE

// CREATE REPAIR ORDER PARAMETER TYPE
export type createRepairOrderModalProps = {
  cItemCode?: string;
};
// END CREATE REPAIR ORDER PARAMETER TYPE
