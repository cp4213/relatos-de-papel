export const AppRoutes = {
    landing: "/",
    home: "/home",                   // Mantén home en /
    auth: "/auth",
    cart: "/carrito",
    bookDetail: "/libro/:id",

    private: {
        root: "/cuenta",
        orders: "/pedidos",
        profile: "perfil",
        addresses: "direcciones",
        wishlist: "wishlist",
        checkout: "/checkout"
    }
}