import React from 'react';

const OfficeList = () => {
  const office = {
    name: "Skyline Tower",
    rent: 55000,
    address: "12th Floor, MG Road, Bangalore"
  };

  const officeList = [
    { name: "Skyline Tower", rent: 55000, address: "MG Road, Bangalore" },
    { name: "Tech Park", rent: 65000, address: "Whitefield, Bangalore" },
    { name: "Innovative Hub", rent: 48000, address: "Indiranagar, Bangalore" },
    { name: "Business Plaza", rent: 72000, address: "HSR Layout, Bangalore" }
  ];

  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Office Space Rental</h1>

      {/* Office Image */}
      <img
        src="https://cdn.sanity.io/images/uqxwe2qj/production/62db3c671745e98cb27690dff96f8033d2bb7f35-2048x1010.jpg"
        alt="Office"
        style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }}
      />

      {/* Single Office Info */}
      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      {/* List of Offices */}
      <h2>Available Offices</h2>
      <ul style={{listStyleType:'none',paddingLeft:0}}>
        {officeList.map((item, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {item.name}</p>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={getRentStyle(item.rent)}>{item.rent}</span>
            </p>
            <p><strong>Address:</strong> {item.address}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfficeList;
