import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
  
   render(){
   	return(
			<div>
        <button 
          onClick={this.props.onReset}
          className = "btn btn-primary btn-sm m-2"> Reset </button>
        {this.props.counters.map(counter => (
				  <Counter 
             key={counter.id}
             onDelete={this.props.onDelete} 
             onIncrement={this.props.onIncrement}
             counter={counter} //insted of these we pass counter so if in future we want to add something in array we cannot add a line in this part value={counter.value}id={counter.id}
             />
				))}
			</div>
		);
	}
}
export default Counters;