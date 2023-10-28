import MainQuery from '../main-query/main-query.tsx';
import { useState } from 'react';
import quickLinks from '../config/quickLinks.json';

export const blueTorchMainParams: string[] = [
  'Client',
  'Dynamic',
  'Static',
  'Maps',
  'UserActions',
  'Alerts'
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const blueTorchSites: string[] = quickLinks.reduce(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  (acc, curr) => [...acc, curr.name],
  []
);
// const blueTorchSecondaryPramas = [
//   { logToConsole: [true, false] },
//   { Screen: ['main', 'secondary'] }
// ];

export interface MainParams {
  client: string;
  Dynamic: string;
  Static: string;
  Maps: string;
  UserActions: string;
  Alerts: string;
}

const QueryBuilder = () => {
  const [selectedSiteParams, setSelectedSiteParams] = useState<MainParams>({
    client: 'fac1',
    Dynamic: 'fac1',
    Static: 'fac1',
    Maps: 'fac1',
    UserActions: 'fac1',
    Alerts: 'fac1'
  });

  // const buildLink = () => `https://www.${selectedSiteParams.client}.app.osft`;

  return (
    <div>
      {blueTorchMainParams.map((val, index) => (
        <MainQuery
          key={index}
          mainParams={selectedSiteParams}
          selectedParam={val}
          setSelectedSiteParams={setSelectedSiteParams}
        ></MainQuery>
      ))}
    </div>
  );
};

export default QueryBuilder;
