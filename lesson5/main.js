
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const products = new Vue ({
    el: '#wrap',
    data: {
        isCartOpen: false,
        catalogUrl: '/catalogData.json',
        product: [],
        products:[], 
        productDel: [], 
        findProducts: '',
        imgCataLog: 'https://placehold.it/250x200'
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));            
        },
        //Добавить продукт
        addProduct(product){
            this.product.push(product);             
        },
        //Удалить продукт
        delProduct(productDel){
            this.product.splice(this.productDel,1);       
        },
        //Найти продукт 
        findProduct(findProducts){
                
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
        })
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
        })
    }

});