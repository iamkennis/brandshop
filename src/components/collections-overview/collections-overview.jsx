import { CollectionOverviewContainer} from './collection-overview.styles'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview} from '../../redux/shop/shop-selectors'


const CollectionsOverview = ({collections}) => (
    <CollectionOverviewContainer>
             {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps) (CollectionsOverview)