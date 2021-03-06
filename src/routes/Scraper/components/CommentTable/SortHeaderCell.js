import React, { Component, PropTypes } from 'react'
import HeaderCell from './HeaderCell'
import omit from 'lodash/omit'
import * as SortDir from '../../containers/SortDir'

import './SortHeaderCell.scss'

class SortHeaderCell extends Component {
  propTypes: {
    sortDir: PropTypes.string,
    onSortChange: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.onSortChange = this.onSortChange.bind(this)
  }

  render () {
    var { sortDir, children, ...props } = this.props
    return (
      <HeaderCell
        {...omit(props, 'onSortChange')}
        className='sort-header-cell'
        onClick={this.onSortChange}>

        {this.getSortDirIcon(sortDir)} {children}

      </HeaderCell>
    )
  }

  onSortChange (e) {
    e.preventDefault()

    this.props.onSortChange(
      this.props.columnKey,
      this.getNextSortDir(this.props.sortDir))
  }

  getNextSortDir (currentSortDir) {
    switch (currentSortDir) {
      case SortDir.ASC:
        return SortDir.DESC
      case SortDir.DESC:
        return null
      default:
        return SortDir.ASC
    }
  }

  getSortDirIcon (sortDir) {
    switch (sortDir) {
      case SortDir.DESC:
        return <span className='pt-icon-default pt-icon-chevron-down' />
      case SortDir.ASC:
        return <span className='pt-icon-default pt-icon-chevron-up' />
      default:
        return <span />
    }
  }
}

export default SortHeaderCell
