import './collection-overview.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectorCollectionsForPreview } from '../../redux/shop/shop-selectors'


const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
             {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectorCollectionsForPreview
})


export default connect(mapStateToProps) (CollectionsOverview)