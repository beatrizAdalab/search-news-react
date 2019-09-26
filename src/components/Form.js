import React, { Component } from 'react';

class Form extends Component {
    state = {
        category: 'general'
    }

    changeCategory = e => {
        this.setState({
            category: e.target.value,
            error: true
        }, () => {
            this.props.getNewsApi(this.state.category)
        });
    }


    render() {
        return (
            <div className='search row'>
                <div className='col s0 m2 l3'></div>
                <div className='col s12 m8 l6'>
                    <form>
                        <div className='input-field col-12'>
                            <select
                                onChange={this.changeCategory}
                                value={this.state.category}>
                                <option value='general'>General</option>
                                <option value='business'>Business</option>
                                <option value='entertainment'>Entertainment</option>
                                <option value='health'>Health</option>
                                <option value='science'>Science</option>
                                <option value='sports'>Sports</option>
                                <option value='technology'>Technology</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;