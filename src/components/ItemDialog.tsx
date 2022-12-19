import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

type Props = {
    dialogSettings: {
        itemCell: string,
        isOpen: boolean,
    }
    onClickBackButton: (itemCell: string) => void;
    onClickConfirmButton: (itemCell: string) => void;
    onChangeCheckBox: (e:React.ChangeEvent<HTMLInputElement>, itemCell: string, maruOrBatsu: string) => void;
}
const ItemDialog = (props:Props) => {

    return (
        <Dialog open={props.dialogSettings.isOpen}>
            <DialogTitle>○か×か選んでね</DialogTitle>
            <DialogContent>
                ○<Checkbox onChange={(e) => props.onChangeCheckBox(e, props.dialogSettings.itemCell, "○")} />
                ×<Checkbox onChange={(e) => props.onChangeCheckBox(e, props.dialogSettings.itemCell, "×")} />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.onClickBackButton(props.dialogSettings.itemCell)}>戻る</Button>
                <Button onClick={() => props.onClickConfirmButton(props.dialogSettings.itemCell)}>確定</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ItemDialog