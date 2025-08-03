import React from 'react';

const courses = [
  { id: 1, name: "Madhushala", instructor: "Harivansh Rai Bachchan" },
  { id: 2, name: "Chandrakanta", instructor: "Devaki Nandan Khatri" },
  { id: 3, name: "Raag Darbari", instructor: "Shrilal Shukla" }
];

const CourseDetails = () => {
  return (
    <div>
      <h2> Courses</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.name}</strong> — {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
