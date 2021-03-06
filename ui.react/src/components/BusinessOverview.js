import React, { Component } from "react";
import { MapTo } from "@adobe/cq-react-editable-components"

const TextEditConfig = {
  emptyLabel: "Text",

  isEmpty: function(props) {
    return !props || !props.text || props.text.trim().length < 1;
  }
};


class BusinessOverview extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>What We Do</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt
          neque tempore recusandae animi soluta quasi? Asperiores rem dolore
          eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat
          explicabo, maiores!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio
          neque consectetur consequatur magni in nisi, natus beatae quidem quam
          odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate.
          Voluptatum.
        </p>
        <a className="btn btn-primary btn-lg" href="#">
          Call to Action &raquo;
        </a>
      </React.Fragment>
    );
  }
}

export default MapTo("react-demo/components/content/text")(
  BusinessOverview,
  TextEditConfig
  );
  
