import modal from "./modules/modal";
import data from "./modules/data";
import clider from "./modules/clider";
import loader from "./modules/loader";
import cards from "./modules/cards";
import form from "./modules/form";
import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
    tabs()
    modal()
    data()
    clider()
    loader()
    cards()
    form()
});