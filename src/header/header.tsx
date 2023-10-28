import quickLinks from '../config/quickLinks.json';
import Tab = chrome.tabs.Tab;
const Header = () => {
  const moveToUrl = (url: string) =>
    chrome.tabs.getCurrent((tab: Tab | undefined) =>
      chrome.tabs.update(tab?.id as number, { url })
    );
  return (
    <div className='h-20 flex justify-evenly items-center'>
      {quickLinks.map((val, index) => (
        <button
          key={index}
          className='text-xs rounded-xl outline outline-offset-2 outline-2 outline-blue-400 p-2 text-[#A6ADBA]'
          onClick={() => moveToUrl(val.url)}
        >
          {val.name}
        </button>
      ))}
    </div>
  );
};

export default Header;
