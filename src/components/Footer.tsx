import Box from "@mui/material/Box";
import {makeStyles} from "@mui/styles";
import {IconButton, Stack, Theme, Typography} from "@mui/material";
import {Container} from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import YouTube from "@mui/icons-material/YouTube";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        borderTop: '1px solid rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: 'fit-content',
    }
}));

const Footer = () => {
    const classes = useStyles();
    return <footer>
        <Box className={classes.container}>
            <Container>
                <Stack spacing={2}>
                    <Box>Footer</Box>
                    <Toolbar variant={'regular'}>
                        <Typography sx={{ flexGrow: 1 }}>
                            Jalo Tech S.A.S © 2024
                        </Typography>
                        <Stack spacing={2} direction={'row'}>
                            <IconButton>
                                <YouTube />
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </Stack>
            </Container>
        </Box>
    </footer>
}

export default Footer;