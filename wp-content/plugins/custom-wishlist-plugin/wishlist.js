jQuery(document).ready(function ($) {
    $(".cwp-wishlist-button").click(function (e) {
        e.preventDefault();
        let id = $(this).data("id");
        let type = $(this).data("type");

        let wishlist = JSON.parse(localStorage.getItem("cwp_wishlist")) || [];
        let exists = wishlist.find(item => item.id == id && item.type == type);

        if (!exists) {
            wishlist.push({ id: id, type: type });
            localStorage.setItem("cwp_wishlist", JSON.stringify(wishlist));
            alert("Added to wishlist!");
        } else {
            alert("Already in wishlist!");
        }
    });
});
