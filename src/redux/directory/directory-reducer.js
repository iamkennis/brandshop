const INITIAL_STATE = {
    sections : [
        {
          title: 'wrist watch',
          imageUrl: 'https://i.ibb.co/P108hWZ/watch-7.jpg ',
          id: 1,
          linkUrl: 'shop/watch'
        },
        {
          title: 'back packs',
          imageUrl: 'https://i.ibb.co/HHK6zjp/bag-0.jpg ',
          id: 2,
          linkUrl: 'shop/packs'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/NTw4PPJ/sneakers-0.jpg ',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/B2kNXrk/women-0.jpg ',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/6RSRrjD/men-4.jpg ',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        } ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state
    }
}

export default directoryReducer