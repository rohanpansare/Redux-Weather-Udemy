import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'
import _ from 'lodash'

function average(data) {
    return _.round(((_.round(_.sum(data)/data.length) - 273) + 32)*1.8)   //Kelvin to Fahrenheit
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data} >
                <SparklinesLine color = {props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                {average(props.data)} {props.units}
            </div>
        </div>
    )
}