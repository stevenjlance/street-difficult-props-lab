import React from 'react';
import './DataView.css';

function DataView(props) {
  return(
    <div className="view">
      <div className="view-column">
        <div className="borough">
          <h1 className="borough-text">{props.borough}</h1>
        </div>
      </div>
      <div className="view-column">
        <div className="data-view">
          <div className="data-view-column left right">
            <div className="text">
              <h3 className="text-header">Renters</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.renterCost}</h2>
              <h3 className="text-label">Annual Housing Cost</h3>
            </div>
          {/* Add new divs below this line */}



          </div>
          <div className="data-view-column right">
            <div className="text">
              <h3 className="text-header">Homeowners</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{}</h2>
              <h3 className="text-label">Annual Housing Cost</h3>
            </div>
            {/* Add new divs below this line */}



          </div>
        </div>
      </div>
    </div>
  );
}

export default DataView;
