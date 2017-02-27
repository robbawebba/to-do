import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setVisibility } from '../actions/actions'

const FilterLink = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibility(ownProps.filter))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)
