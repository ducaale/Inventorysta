import { AppBar } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import React from 'react'
import { connect } from 'react-redux'

let AppHeader = ({restockMode, sellMode}) => {

  const style = {
    title : {
      marginLeft: 36,
    },
    bar : {
      background: "#607D8B",
      paddingRight: 60
    }
  }

  return (
    <MuiThemeProvider>
      <AppBar title="Inventory Management System"
        showMenuIconButton={false}
        titleStyle={style.title}
        style={style.bar}>
        <button className="nav-button active" onClick={restockMode}>Buy</button>
        <button className="nav-button" onClick={sellMode}>Sell</button>
        <button className="nav-button">History</button>
      </AppBar>
    </MuiThemeProvider>
  )
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    sellMode: () => dispatch({
      type: 'SET_MODE',
      mode: 'SELL_MODE'
    }),
    restockMode: () => dispatch({
      type: 'SET_MODE',
      mode: 'RESUPPLY_MODE'
    }),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
