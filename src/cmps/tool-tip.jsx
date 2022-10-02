
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export function ToolTip({cb,imgUrl}){
    return (
        <Tooltip title="Delete" onClick={(ev)=> cb(ev,imgUrl)}>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
}