
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory-selector'

import MenuItem from '../menuItem/menu-item';
import {DirectoryContainer} from './directory.style'

const Directory = ({ sections }) => (
  <DirectoryContainer>
    { sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
);
 
const mapStateToProps = createStructuredSelector({
   sections : selectDirectorySections
})

export default connect(
  mapStateToProps
)(Directory)