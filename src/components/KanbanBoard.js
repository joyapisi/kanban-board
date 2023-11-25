// Board.js
import React from "react";
import { connect } from "react-redux";
import { addColumn } from "./actions"
import Column from "./Column";

function KanBanBoard({ columns, addColumn }) {
  return (
    <div>
      {/* Handle the event of clicking add button */}
      <button onClick={() => addColumn("New Column")}>+</button>
      {/* map each column in the column array */}
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  columns: state.columns,
});

const mapDispatchToProps = { addColumn };

export default connect(mapStateToProps, mapDispatchToProps)(KanBanBoard);
