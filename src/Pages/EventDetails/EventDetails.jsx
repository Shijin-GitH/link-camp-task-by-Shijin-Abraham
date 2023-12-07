import React, { useRef, useEffect, useState } from 'react';
import Events from './Events.json';
import './EventDetails.css';

function EventDetails() {
  const [showMore, setShowMore] = useState({});
  const [showContent, setShowContent] = useState(true);
  const refs = useRef({});

  const handleClickOutside = (event, id) => {
    if (refs.current[id] && !refs.current[id].contains(event.target)) {
      setShowMore((prevShowMore) => ({ ...prevShowMore, [id]: false }));
      setShowContent((prevShowContent) => ({ ...prevShowContent, [id]: true }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.keys(refs.current).forEach((id) => {
        if (refs.current[id] && !refs.current[id].contains(event.target)) {
          setShowMore((prevShowMore) => ({ ...prevShowMore, [id]: false }));
          setShowContent((prevShowContent) => ({ ...prevShowContent, [id]: true }));
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMore = (id) => {
    setShowMore((prevShowMore) => ({ ...prevShowMore, [id]: !prevShowMore[id] }));
    setShowContent((prevShowContent) => ({ ...prevShowContent, [id]: true }));
    if (!showMore[id]) {
      setTimeout(() => {
        setShowContent((prevShowContent) => ({ ...prevShowContent, [id]: false }));
      }, 1000);
    }
  };
  
  //To modify events, please do make the necessary changes in src/Pages/EventDetails/Events.json

  return (
    <div>
      <div className='h-[20vh] w-screen flex justify-center items-center text-[#FDE4B0] text-7xl font-abril '>EVENTS</div>
      <div className={`events relative h-fit w-screen flex justify-around gap-32 flex-wrap max-[767px]:flex-col max-[767px]:items-center ${showMore ? '':''}`} id='events' data-aos="fade-up" data-aos-duration="1000">
        {Events.event.map((event) => (
          <div className="" key={event.id}>
            <div
              ref={(el) => (refs.current[event.id] = el)}
              className={`event front m-12 h-[320px] bg-[url(assets/card.jpg)] bg-cover bg-no-repeat rounded-[20px] hover:scale-110 flex flex-col justify-between ${
                showMore[event.id] ? 'w-[50vw] max-[767px]:w-[250px]' : 'w-[200px] max-[767px]:w-[250px]'
              }`}
            >
              <div
                className={`inner absolute h-[320px] w-[200px] rounded-[20px] scale-90 flex justify-center items-center cursor-pointer max-[767px]:w-[250px] ${
                  showMore[event.id] ? 'ml-3 max-[767px]:hidden' : 'ml-0'
                }`}
                onClick={() => toggleMore(event.id)}
              >
                <div className="name text-[#FDE4B0] text-2xl font-medium text-center mt-3" id={event.id}>
                  {event.name}
                </div>
              </div>
              <div
                className={`more h-[320px] rounded-[20px] scale-90 ${showMore[event.id] ? 'ml-[200px] max-[767px]:w-[250px] max-[767px]:ml-0 w-[calc(50vw-220px)] ' : 'w-0'}`}
              >
                <div
                  className={`name text-[#FDE4B0] text-2xl font-medium text-center mt-3 ${
                    showContent[event.id] ? 'hidden' : ''
                    } ${showMore[event.id] ? '' : 'hidden'}`
                  }
                >
                  {event.name}
                </div>
                <div
                  className={`description text-[#FDE4B0] text-lg font-medium text-center mt-3 ${
                    showContent[event.id] ? 'hidden' : ''
                  } ${showMore[event.id] ? '' : 'hidden'}`}
                >
                  {event.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDetails;
