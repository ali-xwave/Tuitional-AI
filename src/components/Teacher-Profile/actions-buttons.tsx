import { leagueSpartan } from '@/app/fonts'
import { Box, Button } from '@mui/material'

const ActionsButtons = () => {
  return (
    <Box>
      <Box sx={styles.actionButtons}>
        <Button variant="outlined" sx={styles.changePasswordButton} className={leagueSpartan.className}>
          Change Password
        </Button>
        <Button variant="outlined" sx={styles.deactivateButton} className={leagueSpartan.className}>
          Deactivate Account
        </Button>
        <Button variant="contained" sx={styles.logoutButton} className={leagueSpartan.className}>
          Logout
        </Button>
      </Box>
    </Box>
  )
}

export default ActionsButtons

const styles = {
  actionButtons: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
    alignItem: "center",
    justifyContent: "center"
  },
  changePasswordButton: {
    color: '#38B6FF',
    borderColor: '#38B6FF',
  },
  deactivateButton: {
    color: '#FF5A5A',
    borderColor: '#FF5A5A',
  },
  logoutButton: {
    backgroundColor: '#38B6FF',
    color: '#FFFFFF',
  },
}

