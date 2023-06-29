import { MdOutlinePets } from 'react-icons/md';
import AddAppoinment from './components/AddAppoinment';
import { useCallback, useEffect, useState } from 'react';
import Search from './components/Search';
import AppointmentInfo from './components/AppointmentInfo';

function App() {
  // const [toggleForm, setToggleForm] = useState(false);
  const [appointmentList, setAppointmentList] = useState([]);
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('petName');
  const [orderBy, setOrderBy] = useState('asc');

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setAppointmentList(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const appointmentIdDelete = (id) => {
    setAppointmentList(
      appointmentList.filter((appointment) => appointment.id !== id)
    );
  };

  const filteredAppointments = appointmentList
    .filter((item) => {
      return (
        item.petName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLocaleLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === 'asc' ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  return (
    <>
      <div className="bg-gray-50 h-screen font-abc">
        <div className="">
          <h1 className="text-blue-900 text-2xl font-semibold p-4 bg-blue-200">
            Pet Appointment System
          </h1>
        </div>
        <div className="container mx-auto p-2">
          <AddAppoinment
            onSendAppointment={(myAppoinment) =>
              setAppointmentList([...appointmentList, myAppoinment])
            }
            lastId={appointmentList.reduce(
              (max, item) => (Number(item.id) > max ? Number(item.id) : max),
              0
            )}
          />
          <Search
            query={query}
            onQueryChange={(myQuery) => setQuery(myQuery)}
            orderBy={orderBy}
            onOrderByChange={(mySort) => setOrderBy(mySort)}
            sortBy={sortBy}
            onSortByChange={(mySort) => setSortBy(mySort)}
          />
          <h3 className="text-xl mb-4">Appointment List:</h3>
          <ul className="w-full divide-y divide-gray-300">
            {filteredAppointments.map((appointment) => (
              <AppointmentInfo
                appointment={appointment}
                key={appointment.id}
                handleDeleteAppointment={() =>
                  appointmentIdDelete(appointment.id)
                }
              />
            ))}
          </ul>
          <p className="mt-5 bg-gray-200 p-4">
            This app is based on LinkedIn video{' '}
            <a
              className="underline hover:text-blue-800"
              href="https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?contextUrn=urn%3Ali%3AlyndaLearningPath%3A593715e0498e9e9be7fb8506"
              target="_blank"
            >
              ReactJS: Building an interface
            </a>{' '}
            by <span>Ray Villalobos</span>{' '}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
