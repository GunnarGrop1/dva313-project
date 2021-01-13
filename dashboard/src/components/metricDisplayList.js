import React from 'react';
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function postData(url = '', data = {}) {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
          metric: data.metric,
          status: data.status
      }),
      credentials: 'include'
    });
  }

//Represents a single list item inside the list of metrics
class MetricDisplay extends React.Component {
    constructor(props) {
        super(props)

        this.state = {status: props.status}
        this.toggle = this.toggle.bind(this)
    }

    //code for toggling metric collection on and off.
    toggle() {
        this.setState({status: !this.state.status});
        postData('http://localhost/dva313/backend/src/GetSetAPI/setMetricCollectionStatus.php', {metric: this.props.name, status: Number(!this.state.status)});
    }

    render() {
        return (<li className={this.state.status ? "metric-enabled" : "metric-disabled"} onClick={this.toggle}>
                {this.state.status ? <AiOutlineCheck/> : <AiOutlineClose/>}
                {this.props.display_name}
            </li>);
    }
}

//Represents the entire list of metrics
class MetricDisplayList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {apiData: []}
    }
    async componentDidMount() {
        await fetch('http://localhost/dva313/backend/src/GetSetAPI/getMetricCollectionStatus.php', {credentials: 'include'})
        .then(response => response.json())
            .then(data => this.setState({apiData: data}));
    }

    render() {
        return (<div id="listContainer">
                    <ul>
                        {this.state.apiData.map(value => <MetricDisplay key={value.name} name={value.name} display_name={value.display_name} status={Number(value.collection_status)} />)}
                    </ul>
            </div>);
    }
}

export default MetricDisplayList;
