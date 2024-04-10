export const PROFILE_ROLES_LIST = [
    {
      value: 1,
      label: "Super Admin",
      id: "SuperAdmin",
      name: "role",
      roleLevel: 1,
    },
    {
      value: 2,
      label: "Organisation Admin",
      id: "OrgAdmin",
      name: "role",
      roleLevel: 2,
    },
    {
      value: 3,
      label: "Distributer",
      id: "Distributer",
      name: "role",
      roleLevel: 3,
    },
    {
      value: 4,
      label: "Dealer",
      id: "Dealer",
      name: "role",
      roleLevel: 4,
    },
    {
      value: 5,
      label: "Sub-Dealer",
      id: "Sub_Dealer",
      name: "role",
      roleLevel: 5,
    },
    {
      value: 6,
      label: "Retailer",
      id: "Retailer",
      name: "role",
      roleLevel: 6,
    },
    { value: 7, label: "Customer", id: "EndUser", name: "role", roleLevel: 7 },
    { value: 8, label: "Technician", id: "Technician", name: "role", roleLevel: 8 },
  ];
  export const PROFILE_ROLES_LEVEL = {
    SuperAdmin: 1,
    OrgAdmin: 2,
    Distributer: 3,
    Dealer: 4,
    Sub_Dealer: 5,
    Retailer: 6,
    EndUser: 7,
    Technician: 8
  };
  export const SUPER_ADMIN = "SuperAdmin";
  export const ORGANIZATION_ADMIN = "OrgAdmin";
  export const DEALER = "Dealer";
  export const SUB_DEALER = "Sub_Dealer";
  export const DISTRIBUTER = "Distributer";
  export const RETAILER = "Retailer";
  export const CUSTOMER = "EndUser";
  export const TECHNICIAN = "Technician";

  
  export const modifyZoneList = (zones: any) => {
    const zoneItems = [];
    zones.forEach((zone) => {
      const { zoneName } = zone;
      zoneItems.push({
        label: zoneName,
        value: zoneName,
      });
    });
    return zoneItems;
  };
  export const modifyStateList = (states: any) => {
    const stateItems = [];
    states.forEach((state) => {
      const { stateName } = state;
      stateItems.push({
        label: stateName,
        value: stateName,
      });
    });
    return stateItems;
  };