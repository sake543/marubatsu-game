import { Box } from "@mui/material"

type Props = {
  item: string,
  itemCell: string,
  onClick: (itemCell: string) => void;
  checkedItem: {
    itemCell: string,
    checked: boolean,
    maruOrBatsu: string,
  }
  backgroundColorSettings: {
    itemCell: string,
    color: string,
  }
}

const ItemField = (props: Props) => {

  let backGroundColor = "pink"
  if(props.backgroundColorSettings.itemCell === props.itemCell){
    backGroundColor = props.backgroundColorSettings.color;
  }

  return (
    <>
      {
        props.checkedItem.maruOrBatsu !== ""
          ?
          <>
            {
              props.itemCell === props.checkedItem.itemCell ?
                <Box sx={{backgroundColor: backGroundColor}}>{props.checkedItem.maruOrBatsu}</Box>
                :
                <Box onClick={() => props.onClick(props.itemCell)} sx={{backgroundColor: backGroundColor}}>
                  {props.item}
                </Box>
            }
          </>
          :
          <Box onClick={() => props.onClick(props.itemCell)} sx={{backgroundColor: backGroundColor}}>
            {props.item}
          </Box>
      }
    </>
  )
}

export default ItemField