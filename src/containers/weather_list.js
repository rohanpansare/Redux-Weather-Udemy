import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const {lat, lon} = cityData.city.coord;


        console.log(temps)
        return (
            <tr key={name}>
                <td><GoogleMap lon={ lon} lat = {lat}/></td>
                <td><Chart data = {temps} color = "orange" units = "F"/></td>
                <td><Chart data = {pressures} color = "green" units = "hPa"/></td>
                <td><Chart data = {humidities} color = "black" units = "%"/></td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
              <thead>
                <tr>
                    <th width="25%">City</th>
                    <th width="25%">Temperature (F)</th>
                    <th width="25%">Pressure (hPa)</th>
                    <th width="25%">Humidity (%)</th>
                </tr>
              </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather } // === {weather : weather}
}

export default  connect(mapStateToProps)(WeatherList)