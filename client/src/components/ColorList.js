import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "./axiosWithAuth";
import { withRouter } from "react-router-dom";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };
  const saveEdit = e => {
    e.preventDefault();
    // where is is saved right now?
    let selectedColor = colors.find(color => color.id === colorToEdit.id);
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${selectedColor.id}`, colorToEdit)
      .then(res => {
        let colorsToReturn = colors.filter(color => color.id !== res.data.id);
        updateColors([...colorsToReturn, res.data]);
        setEditing(false);
      });
  };

  const deleteColor = color => {
    // make a delete request to delete this color

    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${color.id}`)

      .then(res =>
        updateColors(colors.filter(color => color.id !== res.data))
      );
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default withRouter(ColorList);
