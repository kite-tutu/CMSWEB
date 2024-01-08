import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'

const CampUserRoleAdd = () => {
  const [roleName, setRoleName] = useState('')
  const [roles, setRoles] = useState([])

  useEffect(() => {
    // Fetch roles from the server on initial load or when roles change
    fetchRoles()
  }, [roles])

  const fetchRoles = async () => {
    try {
      const response = await axios.get('/api/getRoles')
      setRoles(response.data.roles || [])
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/postRole', {
        roleName: roleName
      })

      console.log('Response:', response.data)

      // Clear the input field after successful submission
      setRoleName('')
    } catch (error) {
      console.error('Error:', error)

      // Handle error scenarios
    }
  }

  return (
    <div>
      <TextField
        label='Role Name'
        variant='outlined'
        value={roleName}
        onChange={e => setRoleName(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button variant='contained' color='primary' onClick={handleSubmit}>
        Add Role
      </Button>

      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Role ID</TableCell>
              <TableCell>Role Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map(role => (
              <TableRow key={role.id}>
                <TableCell>{role.id}</TableCell>
                <TableCell>{role.roleName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

CampUserRoleAdd.acl = {
  action: 'read',
  subject: 'camp-user-role-page'
}

export default CampUserRoleAdd
