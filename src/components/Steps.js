/*
 * Copyright (c) 2017 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import log from "../utils/log";

class Steps extends Component {
  componentWillMount() {
    const steps = this.getSteps();
    this.context.wizard.init(steps);
  }

  componentDidUpdate(prevProps) {
    if (this.getSteps(prevProps.children).length !== this.getSteps().length) {
      log("Updated steps", {
        oldSteps: this.getSteps(prevProps.children),
        newSteps: this.getSteps(),
      });
      this.context.wizard.setSteps(this.getSteps());
    }
  }

  getSteps(_children) {
    const children = _children || this.props.children;

    return React.Children.map(
      children,
      ({ props: { children, render, ...config } }) => config
    );
  }

  render() {
    const { id: activeId } = this.props.step || this.context.wizard.step;
    const [child = null] = React.Children.toArray(this.props.children).filter(
      ({ props: { id } }) => id === activeId
    );
    return child;
  }
}

Steps.propTypes = {
  children: PropTypes.node.isRequired,
  step: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

Steps.defaultProps = {
  step: null,
};

Steps.contextTypes = {
  wizard: PropTypes.object,
};

export default Steps;
