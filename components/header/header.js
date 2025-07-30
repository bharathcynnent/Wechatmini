// Component({
//   data: {
//     menuVisible: false,
//     chemicals: [
//       { name: 'Acetone' },
//       { name: 'Benzene' },
//       { name: 'Chloroform' },
//       { name: 'Ethanol' },
//       { name: 'Hexane' },
//       { name: 'Methanol' },
//       { name: 'Toluene' },
//       // add more chemicals as needed
//     ],
//     searchQuery: '',
//     searchResults: [],
//     showPopup: false,
//     selectedChemical: null,
//   },

//   methods: {
//     toggleMenu() {
//       this.setData({
//         menuVisible: !this.data.menuVisible
//       });
//     },

//     goHome() {
//       wx.navigateTo({
//         url: '/pages/home/home'
//       });
//     },

//     goDashboard() {
//       wx.navigateTo({
//         url: '/pages/dashboard/dashboard'
//       });
//     },

//     goProducts() {
//       wx.navigateTo({
//         url: '/pages/products/products'
//       });
//     },

//     goUsers() {
//       wx.navigateTo({
//         url: '/pages/users/users'
//       });
//     },

//     onSearchInput(e) {
//       const query = e.detail.value.trim().toLowerCase();
//       const results = this.data.chemicals.filter(item =>
//         item.name.toLowerCase().includes(query)
//       );
//       this.setData({
//         searchQuery: query,
//         searchResults: query ? results : []
//       });
//     },

//     onSelectChemical(e) {
//       const chemical = e.currentTarget.dataset.chemical;
//       this.setData({
//         showPopup: true,
//         selectedChemical: chemical,
//         searchResults: [],
//         searchQuery: chemical.name
//       });
//     },

//     onClosePopup() {
//       this.setData({
//         showPopup: false
//       });
//     },

//     onAddProduct() {
//       wx.showToast({
//         title: 'Product added!',
//         icon: 'success'
//       });
//       this.setData({
//         showPopup: false
//       });
//       // Add additional logic for product addition here if needed
//     }
//   }
// });
Component({
  data: {
    menuVisible: false,
    chemicals: [
      { name: 'Acetone' },
      { name: 'Benzene' },
      { name: 'Chloroform' },
      { name: 'Ethanol' },
      { name: 'Hexane' },
      { name: 'Methanol' },
      { name: 'Toluene' },
      // Add more as needed
    ],
    searchQuery: '',
    searchResults: [],
    showPopup: false,
    selectedChemical: null,
  },

  methods: {
    toggleMenu() {
      this.setData({
        menuVisible: !this.data.menuVisible
      });
    },

    goHome() { wx.navigateTo({ url: '/pages/home/home' }); },
    goDashboard() { wx.navigateTo({ url: '/pages/dashboard/dashboard' }); },
    goProducts() { wx.navigateTo({ url: '/pages/products/products' }); },
    goUsers() { wx.navigateTo({ url: '/pages/users/users' }); },

    onSearchInput(e) {
      const query = e.detail.value.trim().toLowerCase();
      let results = [];
      if (query) {
        results = this.data.chemicals.filter(item =>
          item.name.toLowerCase().includes(query)
        );
      }
      this.setData({
        searchQuery: query,
        searchResults: results.length ? results : [{ name: 'No products', isNoProducts: true }]
      });
    },

    onSelectChemical(e) {
      const item = e.currentTarget.dataset.chemical;
      if (item.isNoProducts) {
        // If clicked on "No products", do nothing or clear suggestions
        this.setData({ searchResults: [] });
        return;
      }
      this.setData({
        showPopup: true,
        selectedChemical: item,
        searchResults: [],
        searchQuery: item.name
      });
    },

    onClosePopup() {
      this.setData({ showPopup: false });
    },

    onAddProduct() {
      const chemical = this.data.selectedChemical;
      wx.showToast({
        title: 'Product added!',
        icon: 'success'
      });
      this.setData({ showPopup: false });
    
      // Retrieve existing added products or initialize
      let addedProducts = wx.getStorageSync('addedProducts') || [];
      // Prevent duplicates (optional)
      if (!addedProducts.find(item => item.name === chemical.name)) {
        addedProducts.push({ name: chemical.name });
        wx.setStorageSync('addedProducts', addedProducts);
      }
    
      // Navigate to the added products page
      wx.redirectTo({ url: '/pages/products/products' });
    }
    
  }
});

