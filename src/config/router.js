import {createRouter, createWebHashHistory} from 'vue-router'
import CreateNotes from "@/pages/CreateNotes";
import ViewNotes from "@/pages/ViewNotes";
import UpdateNotes from "@/pages/UpdateNotes";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: ViewNotes}, //read
        {path: '/create', component: CreateNotes}, //create
        {path: '/update', component: UpdateNotes}, //delete
    ],
    linkExactActiveClass: "active",
})

