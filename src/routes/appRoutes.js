export const AppRoutes = {
    
    home: "/",
    login: "/login",
    register: "/registro",
    cart: "/carrito",
    bookDetail: "/libro/:slug",
    category: "/categoria/:slug",

    private: {
        root: "/cuenta",
        orders: "pedidos",
        profile: "perfil",
        addresses: "direcciones",
        wishlist: "wishlist"
    }
}