
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory-selector'

import MenuItem from '../menuItem/menu-item';
import './directory.scss'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    { sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);
 
const mapStateToProps = createStructuredSelector({
   sections : selectDirectorySections
})

export default connect(
  mapStateToProps
)(Directory)