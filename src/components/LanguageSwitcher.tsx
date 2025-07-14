import { useState } from 'react';
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();
    const { locale, locales, pathname, asPath, query } = router;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (lang: string) => {
        setAnchorEl(null);
        router.push({ pathname, query }, asPath, { locale: lang });
    };

    return (
        <>
            <IconButton
                sx={{ marginRight: '10px' }}
                onClick={handleClick}
                color="inherit"
                size="large"
                aria-controls={open ? 'language-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <LanguageIcon />
            </IconButton>
            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <MenuItem onClick={() => handleClose('en')} selected={locale === 'en'}>
                    <ListItemIcon>🇺🇸</ListItemIcon>
                    <ListItemText primary="EN" />
                </MenuItem>
                <MenuItem onClick={() => handleClose('es')} selected={locale === 'es'}>
                    <ListItemIcon>🇲🇽</ListItemIcon>
                    <ListItemText primary="ES" />
                </MenuItem>
            </Menu>
        </>
    );
}