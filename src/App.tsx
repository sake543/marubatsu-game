import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import ItemField from "./components/ItemField"
import './App.css';
import ItemDialog from './components/ItemDialog';
import React, { useState } from 'react';

function App() {

  const items = {
    line1row1: "○",
    line1row2: "○",
    line1row3: "×",
    line2row1: "○",
    line2row2: "○",
    line2row3: "○",
    line3row1: "×",
    line3row2: "×",
    line3row3: "○",
  }
  const [isDilogSettings, setIsDialogSettings] = useState({
    itemCell: "",
    isOpen: false,
  });
  const [checkedItem, setCheckedItem] = useState(
    {
      itemCell: "",
      checked: false,
      maruOrBatsu: "",
    }
  )
  const [backGroundColorSettings, setBackGroundColorSettings] = useState({
    itemCell: "",
    color: "pink",
  })

  //ダイアログを開く
  const onClickDialogOpen = (itemCell: string) => {
    setIsDialogSettings({
      itemCell: itemCell,
      isOpen: true,
    });
  }

  //ダイアログを閉じる
  const onClickBackButton = (itemCell: string) => {
    setIsDialogSettings({
      itemCell: itemCell,
      isOpen: false,
    });
  }

  //チェックボックスが選択されたとき
  const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>, itemCell: string, maruOrBatsu: string) => {
    setCheckedItem({
      itemCell: itemCell,
      checked: e.target.checked,
      maruOrBatsu: maruOrBatsu,
    })
  }

  //ダイアログで確定ボタン押したとき
  const onClickConfirmButton = (itemCell: string) => {
    calculateGame();
    onClickBackButton(itemCell);
  }

  //勝敗で背景色を変更する
  const backGroundColorChange = (itemCell: string) => {
    setBackGroundColorSettings({
      itemCell: itemCell,
      color: "green",
    })
  }

  //縦横斜めがそろっているか
  const calculateGame = () => {
    //1行目1列目
    if (checkedItem.itemCell === "line1row1") {
      if (checkedItem.maruOrBatsu === items.line1row2 && checkedItem.maruOrBatsu === items.line1row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line2row1 && checkedItem.maruOrBatsu === items.line3row1) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line2row2 && checkedItem.maruOrBatsu === items.line3row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
    }
    //1行目2列目
    if (checkedItem.itemCell === "line1row2") {
      if (checkedItem.maruOrBatsu === items.line1row2 && checkedItem.maruOrBatsu === items.line1row1) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line2row1 && checkedItem.maruOrBatsu === items.line3row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
    }
    //1行目3列目
    if (checkedItem.itemCell === "line1row3") {
      if (checkedItem.maruOrBatsu === items.line1row1 && checkedItem.maruOrBatsu === items.line1row2) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line2row3 && checkedItem.maruOrBatsu === items.line3row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line2row2 && checkedItem.maruOrBatsu === items.line3row1) {
        backGroundColorChange(checkedItem.itemCell);
      }
    }
    //2行目1列目
    if (checkedItem.itemCell === "line2row1") {
      if (checkedItem.maruOrBatsu === items.line2row1 && checkedItem.maruOrBatsu === items.line2row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line2row1 && checkedItem.maruOrBatsu === items.line2row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
    }
    //2行目2列目
    if (checkedItem.itemCell === "line2row2") {
      if (checkedItem.maruOrBatsu === items.line2row1 && checkedItem.maruOrBatsu === items.line2row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line1row2 && checkedItem.maruOrBatsu === items.line3row2) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line1row1 && checkedItem.maruOrBatsu === items.line3row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
    }
    //2行目3列目
    if (checkedItem.itemCell === "line2row3") {
      if (checkedItem.maruOrBatsu === items.line2row1 && checkedItem.maruOrBatsu === items.line2row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line1row2 && checkedItem.maruOrBatsu === items.line2row2) {
        backGroundColorChange(checkedItem.itemCell);
      }
    }
    //3行目1列目
    if (checkedItem.itemCell === "line3row1") {
      if (checkedItem.maruOrBatsu === items.line3row2 && checkedItem.maruOrBatsu === items.line3row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line1row3 && checkedItem.maruOrBatsu === items.line2row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line1row3 && checkedItem.maruOrBatsu === items.line2row2) {
        backGroundColorChange(checkedItem.itemCell);
      }
    }
    //3行目2列目
    if (checkedItem.itemCell === "line3row2") {
      if (checkedItem.maruOrBatsu === items.line3row1 && checkedItem.maruOrBatsu === items.line3row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line1row2 && checkedItem.maruOrBatsu === items.line2row2) {
        backGroundColorChange(checkedItem.itemCell);
      }
    }
    //3行目3列目
    if (checkedItem.itemCell === "line3row3") {
      if (checkedItem.maruOrBatsu === items.line1row3 && checkedItem.maruOrBatsu === items.line2row3) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line3row1 && checkedItem.maruOrBatsu === items.line3row2) {
        backGroundColorChange(checkedItem.itemCell);
      }
      if (checkedItem.maruOrBatsu === items.line1row1 && checkedItem.maruOrBatsu === items.line2row2) {
        backGroundColorChange(checkedItem.itemCell);
      }
    }
  }

  return (
    <div className="App">
      <Table sx={{ width: 1000, margin: "auto", border: 1, borderColor: "#E0E0E0" }}>
        <TableBody>
          <TableRow>
            <TableCell sx={{ textAlign: "center", borderRight: 1, borderColor: "#E0E0E0" }}>
              <ItemField item={items.line1row1} itemCell={"line1row1"} onClick={onClickDialogOpen} checkedItem={checkedItem} backgroundColorSettings={backGroundColorSettings} />
            </TableCell>
            <TableCell sx={{ textAlign: "center", borderRight: 1, borderColor: "#E0E0E0" }}>
              <ItemField item={items.line1row2} itemCell={"line1row2"} onClick={onClickDialogOpen} checkedItem={checkedItem} backgroundColorSettings={backGroundColorSettings} />
            </TableCell>
            <TableCell sx={{ textAlign: "center", borderRight: 1, borderColor: "#E0E0E0" }}>
              <ItemField item={items.line1row3} itemCell={"line1row3"} onClick={onClickDialogOpen} checkedItem={checkedItem} backgroundColorSettings={backGroundColorSettings} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ textAlign: "center", borderRight: 1, borderColor: "#E0E0E0" }}>
              <ItemField item={items.line2row1} itemCell={"line2row1"} onClick={onClickDialogOpen} checkedItem={checkedItem} backgroundColorSettings={backGroundColorSettings} />
            </TableCell>
            <TableCell sx={{ textAlign: "center", borderRight: 1, borderColor: "#E0E0E0" }}>
              <ItemField item={items.line2row2} itemCell={"line2row2"} onClick={onClickDialogOpen} checkedItem={checkedItem} backgroundColorSettings={backGroundColorSettings} />
            </TableCell>
            <TableCell sx={{ textAlign: "center", borderRight: 1, borderColor: "#E0E0E0" }}>
              <ItemField item={items.line2row3} itemCell={"line2row3"} onClick={onClickDialogOpen} checkedItem={checkedItem} backgroundColorSettings={backGroundColorSettings} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ textAlign: "center", borderRight: 1, borderColor: "#E0E0E0" }}>
              <ItemField item={items.line3row1} itemCell={"line3row1"} onClick={onClickDialogOpen} checkedItem={checkedItem} backgroundColorSettings={backGroundColorSettings} />
            </TableCell>
            <TableCell sx={{ textAlign: "center", borderRight: 1, borderColor: "#E0E0E0" }}>
              <ItemField item={items.line3row2} itemCell={"line3row2"} onClick={onClickDialogOpen} checkedItem={checkedItem} backgroundColorSettings={backGroundColorSettings} />
            </TableCell>
            <TableCell sx={{ textAlign: "center", borderRight: 1, borderColor: "#E0E0E0" }}>
              <ItemField item={items.line3row3} itemCell={"line3row3"} onClick={onClickDialogOpen} checkedItem={checkedItem} backgroundColorSettings={backGroundColorSettings} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* ダイアログ */}
      <ItemDialog dialogSettings={isDilogSettings} onClickBackButton={onClickBackButton} onClickConfirmButton={onClickConfirmButton} onChangeCheckBox={onChangeCheckBox} />
    </div>
  );
}

export default App;
