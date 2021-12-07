import { AppBar, Box, Toolbar, Typography, MenuItem, Select, FormControl, Chip } from '@material-ui/core'
import {useState, ChangeEvent, useEffect, useContext} from 'react'
import WelcomeMessage from './WelcomeMessage'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { ProgressContext } from '../contexts/ProgressContext'
import { ThemeContext } from '../contexts/ThemeContext'


const useStyles = makeStyles((theme: Theme) => createStyles({
    positionSelect: {
        color: 'white',
        borderBottom: '1px solid white'
    }
}))

const Navbar = () => {
    
    // styles 
    
    const classes = useStyles();

    // context

    const { lastTime, status } = useContext(ProgressContext)
    const { theme } = useContext(ThemeContext)
    // state

    const [position, setPosition] = useState<string>('Full-Stack Developer')

    const [time, setTime] = useState<Date>(() => new Date(Date.now()))
    const onPositionChange = (event: ChangeEvent<{
        value: unknown;
    }>
    ) => setPosition(event.target.value as string);

    // Effect

    useEffect(() => { 
        const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
        return () => clearInterval(timer)
    }, [])
    return (
       <AppBar position='static' color={theme}>
           <Toolbar>
               <Box display='flex' justifyContent='space-between' alignItems='center' width={1} py={2}>
                    <Typography variant='h6'>My movies</Typography>
                    <Box textAlign='center'>
                        <WelcomeMessage position={position} country='America'/>
                        <Chip label={`Last time working on this project: ${lastTime} - Status: ${status}`}></Chip>
                        <Box mt={1}>
                            <FormControl>
                                <Select value={position} onChange={onPositionChange} className={classes.positionSelect} >
                                    <MenuItem value='Full-Stack Developer'>Full-Stack Developer</MenuItem>
                                    <MenuItem value='Front-end Developer'>Front-end Developer</MenuItem>
                                    <MenuItem value='Back-end Developer'>Back-end Developer</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box textAlign='center'>
                        <Box my={1}>
                            <Typography variant='h6'>{time.toUTCString()}</Typography>
                        </Box>
                    </Box>
               </Box>
           </Toolbar>
       </AppBar>
    )
}

export default Navbar
