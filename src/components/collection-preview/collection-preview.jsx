
import CollectionItem from '../collection-item/collection-item'

import { CollectionPreviewContainer, CollectionPreviewItem, CollectionPreviewH1} from './collection-preview.styles'

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <CollectionPreviewH1>{title.toUpperCase()}</CollectionPreviewH1>
        <CollectionPreviewItem>
            {items
                .filter( (item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
              ))}
         </CollectionPreviewItem>
    </CollectionPreviewContainer>
)


export default CollectionPreview