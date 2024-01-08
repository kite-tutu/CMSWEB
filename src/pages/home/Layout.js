// components/Layout.js
import { useState } from 'react'
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material'

const Layout = () => {
  const [selectedClass, setSelectedClass] = useState(null)
  const [selectedStudent, setSelectedStudent] = useState(null)

  const classList = ['Class A', 'Class B', 'Class C'] // Replace with your actual class list

  const studentList = {
    'Class A': ['Student 1', 'Student 2', 'Student 3'],
    'Class B': ['Student 4', 'Student 5', 'Student 6'],
    'Class C': ['Student 7', 'Student 8', 'Student 9']

    // Add student list for each class
  }

  const handleClassClick = className => {
    setSelectedClass(className)
    setSelectedStudent(null)
  }

  const handleStudentClick = studentName => {
    setSelectedStudent(studentName)
  }

  return (
    <div style={{ display: 'flex' }}>
      {/* Left Menu - Class List */}

      <List>
        {classList.map(className => (
          <ListItem button key={className} onClick={() => handleClassClick(className)}>
            <ListItemText primary={className} />
          </ListItem>
        ))}
      </List>

      {/* Right Section - Class and Student Details */}

      {selectedClass && (
        <div>
          <h2>Class Details - {selectedClass}</h2>
          <Divider />
          <List>
            {studentList[selectedClass].map(student => (
              <ListItem button key={student} onClick={() => handleStudentClick(student)}>
                <ListItemText primary={student} />
              </ListItem>
            ))}
          </List>
        </div>
      )}

      {selectedStudent && (
        <div>
          <h2>Student Details - {selectedStudent}</h2>
          {/* Display student details */}
        </div>
      )}
    </div>
  )
}

export default Layout
