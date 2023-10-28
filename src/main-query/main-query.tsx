import { Dispatch, SetStateAction, useState } from 'react';
import { blueTorchSites, MainParams } from '../query-builder/query-builder.tsx';
import { Combobox } from '@headlessui/react';

interface MainQueryProps {
  mainParams: MainParams;
  selectedParam: string;
  setSelectedSiteParams: Dispatch<SetStateAction<MainParams>>;
}
const MainQuery = ({
  mainParams,
  selectedParam,
  setSelectedSiteParams
}: MainQueryProps) => {
  const [selectedSite, setSelectedSite] = useState(blueTorchSites[0]);
  const [query, setQuery] = useState<string>('');

  const filteredPeople =
    query === ''
      ? blueTorchSites
      : blueTorchSites.filter((MainParam) =>
          MainParam.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <Combobox
      value={selectedSite}
      onChange={(val) => {
        setSelectedSite(val);
        setSelectedSiteParams({
          ...mainParams,
          [`${selectedParam}`]: selectedSite
        });
      }}
    >
      <Combobox.Label>{selectedParam}</Combobox.Label>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredPeople.map((person) => (
          <Combobox.Option key={person} value={person}>
            {person}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default MainQuery;
