import React,{Component} from "react";
import './search-panel.css'

export default class SearchPanel extends Component {
    state={
        term:' '
    }
    const
    searchText = 'Type here to search'
    const
    searchStyle = {
        fontSize: '20px'
    }
onSearchChange=(e)=>{
        const  term=e.target.value;
        this.setState({term})
    this.props.onSearchChange(term)
}



    render() {
        return <input className="search-input" style={this.searchStyle}
                      placeholder={this.searchText}
                      value={this.state.term}
                      onChange={this.onSearchChange}

        />
    }
}
