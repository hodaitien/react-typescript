import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box, Card, CardContent, CardHeader, Checkbox, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'


const useStyles = makeStyles((theme: Theme) => createStyles({
    topMoviesHeader: {
        paddingBottom: 0
    },   
    topMoviesList: {
       paddingTop: 0
    },
    topMovieItem: {
        paddingTop: '2px',
        paddingBottom: '2px'
    }
}))


const TopMovies = () => {
    const classes = useStyles()
    return (
        <Box mt={1} ml={2}>
            <Card raised>
                <CardHeader 
                    title='Top 10 movies of all time' 
                    className={classes.topMoviesHeader} 
                    titleTypographyProps={{variant: 'h4', align: 'center', color: 'primary'}} 
                />
                <CardContent className={classes.topMoviesList}>
                    <List>
                        <ListItem button className={classes.topMovieItem}>
                            <ListItemIcon>
                                <Checkbox />
                            </ListItemIcon>
                            <ListItemText primary='ten bo phim vao day' />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    )
}

export default TopMovies
