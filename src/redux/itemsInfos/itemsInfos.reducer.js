const INITIAL_STATE = {
    sections: [{
      title : 'hats',
      imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      size: "small",
      linkUrl: 'shop/hats'
  },{
      title : 'jackets',
      imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      size: "small",
      linkUrl: 'shop/jackets'
  },{
      title : 'sneakers',
      imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      size: "small",
      linkUrl: 'shop/sneakers'
  },{
      title : 'womens',
      imageUrl : 'https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      id: 4,
      size: "large",
      linkUrl: 'shop/womens'
  },{
      title : 'mens',
      imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
      id: 5,
      size: "large",
      linkUrl: 'shop/mens'
  }]
}

const menuItemsReducer = (state= INITIAL_STATE, action) => {
  switch(action.type) {
    default: return state;
  }
}

export default menuItemsReducer;