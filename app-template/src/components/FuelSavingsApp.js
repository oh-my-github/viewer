import React, {PropTypes} from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

import RaisedButton from 'material-ui/lib/raised-button';

const FuelSavingsApp = (props) => {
  const save = function () {
    props.actions.saveFuelSavings(props.fuelSavingsAppState);
  };

  const onTimeframeChange = function (e) {
    props.actions.calculateFuelSavings(props, 'milesDrivenTimeframe', e.target.value);
  };

  const fuelSavingsKeypress = function (name, value) {
    props.actions.calculateFuelSavings(props, name, value);
  };

  const settings = props.fuelSavingsAppState;



  return (
    <div>
      <RaisedButton label="Default" />
      <div className="row">
        <div className="col s1">1</div>
        <div className="col s1">2</div>
        <div className="col s1">3</div>
        <div className="col s1">4</div>
        <div className="col s1">5</div>
        <div className="col s1">6</div>
        <div className="col s1">7</div>
        <div className="col s1">8</div>
        <div className="col s1">9</div>
        <div className="col s1">10</div>
        <div className="col s1">11</div>
        <div className="col s1">12</div>
      </div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
      <h2>Fuel Savings Analysis</h2>
      <table>
        <tbody>
        <tr>
          <td><label htmlFor="newMpg">New Vehicle MPG</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="newMpg" value={settings.newMpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="tradeMpg">Trade-in MPG</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="tradeMpg" value={settings.tradeMpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="newPpg">New Vehicle price per gallon</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="newPpg" value={settings.newPpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="tradePpg">Trade-in price per gallon</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="tradePpg" value={settings.tradePpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="milesDriven">Miles Driven</label></td>
          <td>
            <FuelSavingsTextInput onChange={fuelSavingsKeypress} name="milesDriven" value={settings.milesDriven} /> miles per
            <select name="milesDrivenTimeframe" onChange={onTimeframeChange} value={settings.milesDrivenTimeframe}>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </td>
        </tr>
        <tr>
          <td><label>Date Modified</label></td>
          <td>{settings.dateModified}</td>
        </tr>
        </tbody>
      </table>

      <hr/>

      {settings.necessaryDataIsProvidedToCalculateSavings ? <FuelSavingsResults savings={settings.savings} /> : null}
      <input type="submit" value="Save" onClick={save} />
    </div>
  );
};

FuelSavingsApp.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavingsAppState: PropTypes.object.isRequired
};

export default FuelSavingsApp;
