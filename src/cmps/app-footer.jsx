import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export function AppFooter() {

    return (
        <footer className="app-footer main-layout full">
            <div className='footer-inner-wrapper'>
                <div className='footer-terms'>
                    <small>© 2022 Windbnb</small>
                    <span>•</span>
                    <a href="">Privacy</a>
                    <span>•</span>
                    <a href="">Terms</a>
                </div>
                <div className='footer-menu'>
                    <a href="">Support & resurces </a><KeyboardArrowUpIcon />
                </div>
            </div>
        </footer>
    )
}