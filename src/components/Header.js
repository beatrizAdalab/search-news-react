import React, {Fragment} from 'react';
import Form from './Form'
import PropTypes from 'prop-types'

const Header = ({ title, getNewsApi }) => (
    <Fragment>
        <header>
            <div className = 'section'>
                <div className ='container'>
                    <h1 className = 'header center grey-text text-darken-4'>{title}</h1>
                    <p className = 'center-align'>On this website you can be updated with the interesting news for you. Its source is <strong>NewsAPI.org</strong> and it has been built with React. Discover what happens in the world right now!</p>
                    <Form
                    getNewsApi= {getNewsApi}/>
                </div>
              
            </div>
        </header>
    </Fragment>
         
)
Header.protoType = {
    title: PropTypes.string.isRequired,
    getNewsApi: PropTypes.func.isRequired,
}

export default Header;