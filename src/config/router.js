import {createRouter, createMemoryHistory} from 'vue-router'
import CreateNotes from "@/pages/CreateNotes";
import ViewNotes from "@/pages/ViewNotes";
import UpdateNotes from "@/pages/UpdateNotes";
import Note from "@/pages/Note";

export default createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            component: ViewNotes
        }, //read
        {
            path: '/create',
            component: CreateNotes,
            name: "PostNotes",
            props: true
        }, //create
        {
            path: '/update',
            component: UpdateNotes,
            name: "Update"
        }, //delete
        {
            path: '/note',
            component: Note,
            name: "ShowNote",
            props: true
        }, //note
    ],
    linkExactActiveClass: "active",
})

